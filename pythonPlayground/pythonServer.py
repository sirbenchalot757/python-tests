from http.server import BaseHTTPRequestHandler, HTTPServer
from urllib import parse
from pythonScripts.playGround import *
import json
#this file is for testing scripts locally

class handler(BaseHTTPRequestHandler):
    
    def do_GET(self):
        s = self.path
        dic = dict(parse.parse_qsl(parse.urlsplit(s).query))
        #parse the request body for data
        data = parse.parse_qs(parse.urlsplit(s).query)
        self.send_response(200)
        self.send_header('Content-type','text/html')
        self.end_headers()
        if "name" in dic:
            message = "Hello, " + dic["name"] + "!"
        else:
            message = "Hello, stranger!"
        self.wfile.write(bytes(str(s), "utf8"))

    def do_POST(self):
        self.send_response(200)
        self.send_header('Content-type','text/html')
        self.end_headers()
        content_len = int(self.headers.get('Content-Length'))
        post_body = self.rfile.read(content_len)
        jb = json.loads(post_body)
    
        self.wfile.write(bytes(json.dumps(addCat(jb)), "utf8"))

with HTTPServer(('', 8000), handler) as server:
    server.serve_forever()

    