"""
This class gets the following options from the environment:
OAUTH2_ADMIN: admin user
OAUTH2_ADMIN_PASSWORD: admin password
OAUTH2_LOG_FILE: log file (default is oauth2.log)
OAUTH2_DB: Database connection url
OAUTH2_ENV: development or production

The default chain list for setup is as follows:
Index   Handler
----------------
0       Log file handler
1       Database connection handler
2       Default scope handler
3       Admin account handler
"""
import os
import logging
from typing import Any, List
from sqlalchemy import create_engine, select
from sqlalchemy.orm import Session, sessionmaker

from .models.daos import Scope, User
from .handlers import Options, Handler, AbstractHandler


class StartupOptions(Options):
    """
    Object encapsulating all configuartion parameters to start the application
    """

    db_string: str
    admin_user: str
    admin_pw: str
    scopes_list: List[str]
    log_file: str
    log: Any
    engine: Any
    env: str


class GlobalContext(Options):
    """
    Final context object that contains the configured settings that can be accessed globally.
    """

    engine: Any
    log: Any
    session: Any

    def get_logger(self, name: str) -> Any:
        """
        Set the name of the logger for the module.
        """
        self.log = logging.getLogger(name)
        return self.log

    def __repr__(self) -> str:
        return f"Global Context: engine {self.engine}, log {self.log}, session {self.session}"


class Config(object):
    """
    Configuration class that sets up the startup chain and bootstraps the application.

    USAGE:
    config = Config(options | None)
    config.init()
    """

    startup_chain: List[Handler] = list()
    options: StartupOptions | None = None

    def __init__(self, options: StartupOptions | None) -> None:
        if options is None:
            default_options: StartupOptions = StartupOptions(
                db_string="sqlite:///",
                admin_user="admin",
                admin_pw="admin",
                log_file="default.log",
                scopes_list=["user", "admin"],
                log=None,
                engine=None,
                env="development",
            )
            self.options = default_options
        else:
            self.options = options

    def add_to_chain(self, handler: Handler, prev_handler: Handler) -> None:
        """
        Given a handler, adds the new handler after the given handler.
        """
        try:
            index = self.startup_chain.index(prev_handler)
        except ValueError as value_error:
            raise Exception(
                f"{prev_handler} not registered as a Startup Chain Handler"
            ) from value_error
        self.startup_chain.insert(index + 1, handler)

    def add_scopes(self, *scopes: List[str]):
        """
        Append any scopes to the default scopes list.
        """
        self.options.scopes_list.extend(scopes)

    def __setup_chain__(self) -> None:
        for index, handler in enumerate(self.startup_chain):
            if index == (len(self.startup_chain) - 1):
                handler.set_next_handler(None)
            else:
                handler.set_next_handler(self.startup_chain[index + 1])

    def init(self) -> GlobalContext:
        """
        Sets up the handler chain and then starts the first handler.
        """
        self.startup_chain = __get_handler_list__()
        self.__setup_chain__()
        self.startup_chain[0].handle(self.options)
        global_session = sessionmaker(bind=self.options.engine)
        global_context = GlobalContext(
            engine=self.options.engine, log=self.options.log, session=global_session
        )
        global_context.log.info("Application ready.")
        return global_context


class EnvironmentHandler(AbstractHandler):
    """
    Sets up the application environment
    """

    def handle(self, options: StartupOptions):
        try:
            options.env = os.environ["OAUTH2_ENV"]
        except KeyError:
            pass
        finally:
            self.__next_handler__.handle(options)


class LogFileHandler(AbstractHandler):
    """
    Checks and gets the log file from environment variables.
    """

    def handle(self, options: StartupOptions):
        try:
            log_file = os.environ["OAUTH2_LOG_FILE"]
            options.log_file = log_file
            if options.env == "development":
                logging.basicConfig(
                    filename=log_file,
                    encoding="utf-8",
                    level=logging.DEBUG,
                    format="%(asctime)s %(levelname)s %(message)s",
                )
            else:
                logging.basicConfig(
                    filename=log_file,
                    encoding="utf-8",
                    level=logging.ERROR,
                    format="%(asctime)s %(levelname)s %(message)s",
                )
        except KeyError:
            if options.env == "development":
                logging.basicConfig(
                    filename=options.log_file,
                    encoding="utf-8",
                    level=logging.DEBUG,
                    format="%(asctime)s %(levelname)s %(message)s",
                )
            else:
                logging.basicConfig(
                    filename=options.log_file,
                    encoding="utf-8",
                    level=logging.ERROR,
                    format="%(asctime)s %(levelname)s %(message)s",
                )
        finally:
            log = logging.getLogger("Bootstrap")
            options.log = log
            log.info("Set up log file. Logging to %s", options.log_file)
            log.debug("Starting application bootup.")
            if self.__next_handler__ is not None:
                self.__next_handler__.handle(options)


class DatabaseConnectionUrlHandler(AbstractHandler):
    """
    Get the connection url from the environment if available.
    """

    def handle(self, options: StartupOptions):
        try:
            db_url = os.environ["OAUTH2_DB"]
            options.db_string = db_url
            if options.engine is None:
                options.engine = create_engine(db_url)
            options.log.debug("Setting up database to the url: %s", options.db_string)
        except KeyError:
            options.log.warning(
                "Database url is missing from environment.\nRerun the application with OAUTH2_DB set.\nDefaulting to %s",
                options.db_string,
            )
        if self.__next_handler__ is not None:
            self.__next_handler__.handle(options)


class DefaultScopesHandler(AbstractHandler):
    """
    Add the default scopes to the database
    """

    def handle(self, options: StartupOptions):
        with Session(options.engine) as session:
            for scope in options.scopes_list:
                statement = select(Scope).filter_by(scope=scope)
                result = session.execute(statement).all()
                if not result:
                    session.add(Scope(scope=scope))
            options.log.debug(f"Setting up scopes: {options.scopes_list}")
            session.commit()
        if self.__next_handler__ is not None:
            self.__next_handler__.handle(options)


class AdminAccountHandler(AbstractHandler):
    """
    Add the admin account to the database.
    """

    def handle(self, options: Options):
        try:
            admin_user = os.environ["OAUTH2_ADMIN"]
            admin_pass = os.environ["OAUTH2_ADMIN_PASSWORD"]
            options.admin_user = admin_user
            options.admin_pw = admin_pass
            options.log.debug("Admin account set to %s", admin_user)
        except KeyError:
            options.log.warning(
                "Admin account not set. Defaulting to %s", options.admin_user
            )
        finally:
            with Session(options.engine, future=True) as session:
                statement = (
                    select(User)
                    .join(User.scopes)
                    .where(User.scopes.any(Scope.scope == "admin"))
                    .where(User.username == options.admin_user)
                )
                results = session.execute(statement).all()
                options.log.debug(f"Found admins: {results}")
                if not results:
                    options.log.debug("Empty admin set. Initializing admin accounts.")
                    admin = User.create_hashed_user(options.admin_user, options.admin_pw)
                    statement = select(Scope).filter_by(scope="admin")
                    scope: Scope = session.execute(statement).scalar_one()
                    admin.scopes.append(scope)
                    session.add(admin)
                    session.commit()
                else:
                    options.log.debug("Not setting up the admin account.")
            if self.__next_handler__ is not None:
                self.__next_handler__.handle(options)


def __get_handler_list__() -> List[Handler]:
    handlers: List[Handler] = list()
    handlers.append(EnvironmentHandler())
    handlers.append(LogFileHandler())
    handlers.append(DatabaseConnectionUrlHandler())
    handlers.append(DefaultScopesHandler())
    handlers.append(AdminAccountHandler())
    return handlers
