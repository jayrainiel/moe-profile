# ── Local dev server for moe-profile ──────────────────────────────────────────
# Handles clean URLs so /about → about.html, /portfolio → portfolio.html, etc.
# Uses only built-in Windows .NET — no Node, Python, or extra installs needed.
#
# HOW TO RUN (one of these):
#   1. Double-click start-server.bat
#   2. Right-click this file → "Run with PowerShell"
#   3. In PowerShell: cd to this folder, then: .\local-server.ps1
#
# Then open: http://localhost:3000

$port  = 3000
$root  = Split-Path -Parent $MyInvocation.MyCommand.Definition
$url   = "http://localhost:$port/"

$routes = @{
    '/'           = 'index.html'
    '/about'      = 'about.html'
    '/expertise'  = 'expertise.html'
    '/portfolio'  = 'portfolio.html'
}

$mimeTypes = @{
    '.html'  = 'text/html; charset=utf-8'
    '.css'   = 'text/css'
    '.js'    = 'application/javascript'
    '.json'  = 'application/json'
    '.jpg'   = 'image/jpeg'
    '.jpeg'  = 'image/jpeg'
    '.png'   = 'image/png'
    '.gif'   = 'image/gif'
    '.svg'   = 'image/svg+xml'
    '.ico'   = 'image/x-icon'
    '.woff2' = 'font/woff2'
    '.woff'  = 'font/woff'
}

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($url)

try {
    $listener.Start()
} catch {
    Write-Host "`n  ERROR: Could not start server on port $port."
    Write-Host "  Another process may be using that port. Close it and try again.`n"
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""
Write-Host "  ┌─────────────────────────────────────────┐"
Write-Host "  │  Local server  →  http://localhost:$port   │"
Write-Host "  │  Press Ctrl+C to stop                   │"
Write-Host "  └─────────────────────────────────────────┘"
Write-Host ""

# Open the browser automatically
Start-Process "http://localhost:$port"

try {
    while ($listener.IsListening) {
        $ctx = $listener.GetContext()
        $req = $ctx.Request
        $res = $ctx.Response

        $urlPath = $req.Url.AbsolutePath.TrimEnd('/')
        if ($urlPath -eq '') { $urlPath = '/' }

        # Apply clean URL routing
        if ($routes.ContainsKey($urlPath)) {
            $urlPath = '/' + $routes[$urlPath]
        }

        $filePath = Join-Path $root ($urlPath.TrimStart('/') -replace '/', '\')

        if (Test-Path $filePath -PathType Leaf) {
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $ext   = [System.IO.Path]::GetExtension($filePath).ToLower()
            $res.ContentType     = if ($mimeTypes[$ext]) { $mimeTypes[$ext] } else { 'application/octet-stream' }
            $res.ContentLength64 = $bytes.Length
            $res.StatusCode      = 200
            $res.OutputStream.Write($bytes, 0, $bytes.Length)
            Write-Host "  200  $($req.Url.AbsolutePath)"
        } else {
            $body = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
            $res.StatusCode      = 404
            $res.ContentType     = 'text/plain'
            $res.ContentLength64 = $body.Length
            $res.OutputStream.Write($body, 0, $body.Length)
            Write-Host "  404  $($req.Url.AbsolutePath)"
        }

        $res.OutputStream.Close()
    }
} finally {
    $listener.Stop()
}
