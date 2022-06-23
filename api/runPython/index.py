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
        response =  'Just doin tests'
        #response = message.milk('Hello from Python from a Serverless Function!')
        self.wfile.write(bytes(response, 'utf-8'))

        
       
        
        return

    