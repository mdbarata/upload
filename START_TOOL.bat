@echo off
title React Tool - Server
color 0A
cls

echo.
echo ========================================
echo   REACT TOOL - PORTABLE VERSION
echo ========================================
echo.
echo Starting server...
echo.

REM Check if portable Node.js exists
if not exist "node\node.exe" (
    color 0C
    echo.
    echo ========================================
    echo   ERROR: Node.js Not Found!
    echo ========================================
    echo.
    echo The 'node' folder is missing or incomplete.
    echo.
    echo Please ensure you extracted the complete package.
    echo.
    echo Expected location:
    echo %CD%\node\node.exe
    echo.
    echo ========================================
    echo.
    pause
    exit /b 1
)

REM Check if build folder exists
if not exist "build" (
    color 0C
    echo.
    echo ========================================
    echo   ERROR: Build Folder Not Found!
    echo ========================================
    echo.
    echo The 'build' folder is missing.
    echo.
    echo Please ensure you extracted the complete package.
    echo.
    echo ========================================
    echo.
    pause
    exit /b 1
)

REM Start the server
echo Starting React Tool Server...
echo.
node\node.exe portable-server.js

REM If server exits, wait before closing
echo.
echo.
echo ========================================
echo   Server Stopped
echo ========================================
echo.
pause