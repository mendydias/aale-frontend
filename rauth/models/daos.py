"""
All data access objects are defined here.
"""
from sqlalchemy import String, Column, Integer, Table, ForeignKey
from sqlalchemy.orm import declarative_base, relationship
import bcrypt

DeclarativeBase = declarative_base()

user_scopes = Table(
    "user_scopes",
    DeclarativeBase.metadata,
    Column("username", ForeignKey("users.username")),
    Column("scope_id", ForeignKey("scopes.id")),
)


class Scope(DeclarativeBase):
    """
    Scopes, pylint sucks.
    """

    __tablename__ = "scopes"

    id = Column(Integer, primary_key=True)
    scope = Column(String(25))


class User(DeclarativeBase):
    """
    Basic user class.
    """

    __tablename__ = "users"

    username = Column(String(100), primary_key=True)
    password = Column(String(200), nullable=False)
    salt = Column(String(50), nullable=False)

    scopes = relationship("Scope", secondary=user_scopes)

    def create_hashed_user(self, username: str, password: str):
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
    
    client_id = Column(String(25), primary_key=True)
    client_name = Column(String(100), nullable=True)
    client_description = Column(String())
