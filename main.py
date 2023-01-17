"""
the entry point to the application
"""

from fastapi import FastAPI, Depends

from rauth.bootstrap import Config, GlobalContext
from rauth.controllers import admin

config = Config(options=None)
global_context: GlobalContext | None = None

app = FastAPI()


@app.on_event("startup")
def init() -> None:
    global_context = config.init()


def get_context() -> GlobalContext:
    return global_context


app.include_router(admin.router, dependencies=[Depends(get_context)])
