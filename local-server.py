#!/usr/bin/env python3
"""
Local development server for moe-profile.
Handles clean URLs: /about → about.html, /portfolio → portfolio.html, etc.

Run:  python local-server.py
Then open:  http://localhost:3000
"""
import http.server
import socketserver
import os

PORT = 3000

# Clean URL mappings
ROUTES = {
    '/about':     '/about.html',
    '/expertise': '/expertise.html',
    '/portfolio': '/portfolio.html',
}

class CleanURLHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Strip query string / hash for matching
        path = self.path.split('?')[0].split('#')[0].rstrip('/')
        if path in ROUTES:
            self.path = ROUTES[path]
        return super().do_GET()

    def log_message(self, fmt, *args):
        # Cleaner console output
        print(f"  {self.address_string()}  {fmt % args}")

# Serve from the directory this script lives in
os.chdir(os.path.dirname(os.path.abspath(__file__)))

print(f"\n  Local server running →  http://localhost:{PORT}\n  Press Ctrl+C to stop.\n")
with socketserver.TCPServer(("", PORT), CleanURLHandler) as httpd:
    httpd.serve_forever()
