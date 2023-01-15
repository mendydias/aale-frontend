"""
Tests the start up of the application
"""
from logging import FileHandler
import unittest
import os
import ntpath

from rauth.bootstrap import Config


class DefaultTestCase(unittest.TestCase):
    """
    Given no environmental variables, does the application use sensible defaults.
    """

    db_string = "mysql://root:root@localhost:3306/test"

    def setUp(self) -> None:
        os.environ["OAUTH2_DB"] = self.db_string

    def test_log_file_default(self):
        """
        Check if the initialization has the correct defaults setup.
        Gets the default logger and checks that the file baseName is the same as the default file name.
        """
        config = Config(options=None)
        context = config.init()
        handler: FileHandler = context.get_logger("").handlers[0]
        filename = ntpath.basename(handler.baseFilename)
        self.assertEqual(
            filename,
            config.options.log_file,
            "Should be equal to default.log",
        )

    def test_default_options_unchanged(self):
        """
        Testing the default options to check that they remain unchanged.
        Not testing engine and log since they will change.
        """
        default_options = {
            "db_string": self.db_string,
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
        self.assertDictEqual(
            default_options, options_to_test, "Default options should remain unchanged."
        )


class EnvironmentalTestCase(unittest.TestCase):
    """
    Tests the changes that setting environmental variables will make in the application.
    """

    def setUp(self) -> None:
        os.environ["OAUTH2_DB"] = "mysql://root:root@localhost:3306/test"
        os.environ["OAUTH2_LOG_FILE"] = "test.log"

    def test_log_file_env(self):
        """
        Tests the existence of the log file set up in the environment variables.
        """
        config = Config(options=None)
        config.init()
        self.assertTrue(
            os.path.exists(config.options.log_file),
            f"Application should log to {os.environ['OAUTH2_LOG_FILE']}",
        )

    def tearDown(self) -> None:
        os.remove(os.environ["OAUTH2_LOG_FILE"])
