@echo off
echo Starting Shree Lakshmi Portfolio Web Server on http://localhost:8080 ...
start "" "http://localhost:8080"
python -m http.server 8080
pause
