"""
This module tests all the admin related flows.
"""
import pytest
from fastapi.testclient import TestClient
from bs4 import BeautifulSoup

from main import app


@pytest.fixture
def setup_db(monkeypatch):
    monkeypatch.setenv('OAUTH2_DB', 'mysql://root:root@localhost:3306/test')


class TestAdminLoginFlow(object):
    """
    This tests the login flow for the /admin/console endpoint
    """

    def test_admin_console_redirect(self, setup_db):
        """
        When calling /admin/console without a basic HTTP Authentication header
        Args:
            setup_db: mock database
            test_client: test client based on httpx

        Returns: nothing
        """
        test_client = TestClient(app)
        response = test_client.get("/admin/console")
        response = BeautifulSoup(response, 'html.parser')
        assert response.h1.contents[0] == "Hello World"
