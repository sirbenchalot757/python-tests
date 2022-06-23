from http.server import BaseHTTPRequestHandler
from cowpy import cow

class handler(BaseHTTPRequestHandler):

#get the request message from the client

    def do_GET(self):
        #request = self.path
        self.send_header('Content-type','text/plain')
        self.end_headers()
        """ egg = input("Enter your name: ")
        print("Hello " + egg)
        if input() == "kyle":
            print("fuck you")  """
        message = cow.Cowacter().milk('Hello from Python from a Serverless Function!')
        self.send_response(200,message)
        
        
        return

    