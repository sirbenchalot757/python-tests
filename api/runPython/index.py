from http.server import BaseHTTPRequestHandler
from cowpy import cow
import json

class handler(BaseHTTPRequestHandler):

    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type','text/plain')
        self.end_headers()
        """ egg = input("Enter your name: ")
        print("Hello " + egg)
        if input() == "kyle":
            print("fuck you")  """
        message = cow.Cowacter().milk('Hello from Python from a Serverless Function!')
        newMessage = 'hey there'
        self.wfile.write(message.encode())
        
        return json.dumps(newMessage)

    