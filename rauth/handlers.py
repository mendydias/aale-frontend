"""
Interface and Abstract implementation of chain handlers.
"""
from abc import ABC, abstractmethod
from pydantic import BaseModel


class Options(BaseModel):
    """
    Abstract options class. Subclass this to make it work with Handlers.
    """


class Handler(ABC):
    """
    Chain handler interface
    """

    __name__: str = "Handler"

    @abstractmethod
    def handle(self, options: Options) -> None:
        """
        Based on some condition, this function performs some action.
        """

    @abstractmethod
    def set_next_handler(self, handler):
        """
        This function asigns the next handler to be called in the chain.
        """

    def __repr__(self) -> str:
        return self.__name__


class AbstractHandler(Handler):
    """
    Base implementation of Handler interface.
    """

    __next_handler__: Handler

    @abstractmethod
    def handle(self, options: Options):
        pass

    def set_next_handler(self, handler):
        self.__next_handler__ = handler
