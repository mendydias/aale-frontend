"""
All data access objects are defined here.
"""
from sqlalchemy import String, Column, Integer, Table, ForeignKey
from sqlalchemy.orm import declarative_base, relationship
import bcrypt

DeclarativeBase = declarative_base()

user_roles = Table(
    "user_roles",
    DeclarativeBase.metadata,
    Column("username", ForeignKey("users.username")),
    Column("role_id", ForeignKey("roles.id")),
)


class Role(DeclarativeBase):
    """
    This defines the scope of actions that the specific user \
    can accomplish within the admin console. \
    This is not shared with any client.
    """

    __tablename__ = "roles"

    id = Column(Integer, primary_key=True)
    role = Column(String(25))


class User(DeclarativeBase):
    """
    Basic user class.
    """

    __tablename__ = "users"

    username = Column(String(100), primary_key=True)
    password = Column(String(200), nullable=False)
    salt = Column(String(50), nullable=False)

    roles = relationship("Role", secondary=user_roles)

    @staticmethod
    def create_hashed_user(username: str, password: str) -> "User":
        """
        Creates a user with an encrypted password.

        :param username: str
        Compulsory

        :param password: str
        Compulsory
        """
        salt = bcrypt.gensalt()
        encrypted_password = bcrypt.hashpw(password=password.encode("utf-8"), salt=salt)
        return User(username=username, password=encrypted_password, salt=salt)


class Client(DeclarativeBase):
    """
    Represents the client application that authenticates using the authorization server.
    """

    __tablename__ = "clients"

    client_types = ("confidential", "public")

    client_id = Column(String(25), primary_key=True)
    client_name = Column(String(100), nullable=False)
    client_description = Column(String(255), nullable=True)
    redirect_url = Column(String(1000), nullable=False)
    logout_redirect_url = Column(String(1000), nullable=True)
    web_origins = Column(String(1000), nullable=False)
    client_secret = Column(String(25), nullable=False)
    client_type = Column(String(15), nullable=False)

    def register_client(self, client_id: str, client_name: str, client_description: str | None, redirect_url: str, web_origins: str, client_secret: str, client_type: str) -> "Client":
        """checks whether the client_type is recognized and creates a client.

        Args:
            client_id (str): unique client id
            client_name (str): any unique name for a client
            client_description (str | None): simple description of the client, not necessary
            redirect_url (str): the url that the server will send the auth code to
            web_origins (str): the trusted url that the client will contact the server with, any other url will not be accepted
            client_secret (str): one-time generated unique string that will be used to identify the client
            client_type (str): either confidential or public as defined in RFC 6749 sectin 2.1

        Raises:
            Exception: throws an exception if the provided client type doesn't match confidential or public

        Returns:
            Client: configured client
        """
        if client_type not in self.client_types:
            raise Exception("Undefined client type")
        else:
            return Client(
                client_id = client_id,
                client_name = client_name,
                client_description = client_description,
                redirect_url = redirect_url,
                web_origins = web_origins,
                client_secret = client_secret,
                client_type = client_type
            )
