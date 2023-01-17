"""
Tests the start up of the application
"""
import os
import pytest
from rauth.bootstrap import Config, GlobalContext


DB_STRING = "mysql://root:root@localhost:3306/test"

@pytest.fixture
def mock_db_string(monkeypatch):
    """Monkey patches the environmentatl variables for db string

    Args:
        monkeypatch (Pytest Monkeypatch): injected by pytest
    """
    monkeypatch.setenv("OAUTH2_DB", DB_STRING)


@pytest.fixture
def mock_log_file(monkeypatch):
    """Monkey patches a path to a log file.

    Args:
        monkeypatch (Pytest Monkeypatch): injected by pytest
    """
    monkeypatch.setenv("OAUTH2_LOG_FILE", "test_pytest.log")


@pytest.fixture
def mock_log_file_missing(monkeypatch):
    """Removes the log file environment variable"""
    monkeypatch.delenv("OAUTH2_LOG_FILE", raising=False)


class TestDefault(object):
    """
    Given no environmental variables, does the application use sensible defaults.
    """

    def test_log_file_default(self, mock_db_string, mock_log_file_missing):
        """
        Check if the initialization has the correct defaults setup.
        Gets the default logger and checks that the file baseName is the same as the default file name.
        """
        config = Config(options=None)
        context: GlobalContext = config.init()


        assert os.path.exists(context.log_file)

    def test_default_options_unchanged(self, mock_db_string):
        """
        Testing the default options to check that they remain unchanged.
        Not testing engine and log since they will change.
        """
        default_options = {
            "db_string": DB_STRING,
            "admin_user": "admin",
            "admin_pw": "admin",
            "log_file": "default.log",
            "roles_list": ["user", "admin"],
            "env": "development",
        }
        config = Config(options=None)
        config.init()
        options_to_test = {
            "db_string": config.options.db_string,
            "admin_user": config.options.admin_user,
            "admin_pw": config.options.admin_pw,
            "log_file": config.options.log_file,
            "roles_list": config.options.roles_list,
            "env": config.options.env,
        }

        assert options_to_test == default_options


class TestEnvironmentArgs(object):
    """
    Tests the changes that setting environmental variables will make in the application.
    """

    def test_log_file_env(self, mock_db_string, mock_log_file):
        """
        Tests the existence of the log file set up in the environment variables.
        """
        config = Config(options=None)
        config.init()

        assert os.path.exists(config.options.log_file)
