from http.server import BaseHTTPRequestHandler
from urllib import parse, response
import json

class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        s = self.path
        dic = dict(parse.parse_qsl(parse.urlsplit(s).query))
        self.send_response(200)
        self.send_header('Content-type','text/plain')
        self.end_headers()
        myResponse = {message: "I got your message right here"}
        if "name" in dic:
            message = "Hello, " + dic["name"] + "!"
        else:
            message = "Hello, stranger!"
            json_string = json.dumps(myResponse)
        self.wfile.write(json_string.encode())
        return

    