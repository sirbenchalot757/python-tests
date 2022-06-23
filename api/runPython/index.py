from http.server import BaseHTTPRequestHandler
from cowpy import cow

class handler(BaseHTTPRequestHandler):

    def do_GET(self):
        
        self.send_header('Content-type','text/plain')
        self.end_headers()
        """ egg = input("Enter your name: ")
        print("Hello " + egg)
        if input() == "kyle":
            print("fuck you")  """
        message = cow.Cowacter().milk('Hello from Python from a Serverless Function!')
        response =  self.wfile.write(message.encode()).decode()
        self.send_response(200, response)
       
        
        return

    