@echo off
echo Starting local server...
powershell -ExecutionPolicy Bypass -File "%~dp0local-server.ps1"
pause
