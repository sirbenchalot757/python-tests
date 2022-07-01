from http.server import BaseHTTPRequestHandler
from pythonPlayground.pythonScripts import nameGuesser

do_GET = nameGuesser.do_GET

#this file being located in the special next.js api folder will be automatically parsed by vercel as a python serverless function when run on their servers.

#this file will not work in local development, but will work in vercel.

## YOU SHOULD NOT NEED TO EDIT THIS FILE
class handler(BaseHTTPRequestHandler):
   do_GET