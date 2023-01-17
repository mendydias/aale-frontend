from fastapi import APIRouter, Header
from fastapi.responses import RedirectResponse, HTMLResponse

from rauth.bootstrap import GlobalContext

router = APIRouter(prefix='/admin')

@router.get('/console')
def access_admin_console(authorization: str = Header(default=None)):
    """
    returns the admin dashboard
    Args:
        authorization: basic authorization header

    Returns: either the admin dashboard or redirects to the login page
    """
    if authorization is None:
        return RedirectResponse("/admin/login", status_code=307)
    else:
        return {"message": "ok"}

@router.get('/login')
def admin_console_login():
    return HTMLResponse(content="<html><head><title>Login Screen</title></head><body><h1>Hello World</h1></body></html>", status_code=200)
