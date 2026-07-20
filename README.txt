========================================
  REACT TOOL - PORTABLE VERSION
========================================

SYSTEM REQUIREMENTS:
-------------------
✓ Windows 7 or later
✓ No installation required
✓ No admin rights needed
✓ ~100MB disk space

HOW TO USE:
-----------
1. Extract this ZIP file to any folder on your computer
   (Desktop, Documents, etc.)

2. Open the extracted folder

3. Double-click "START_TOOL.bat"

4. Wait 2-3 seconds

5. Your browser will open automatically with the tool

6. To close: Close the black command window


FOLDER STRUCTURE:
-----------------
├── node/              (Portable Node.js)
├── build/             (React application)
├── node_modules/      (Required packages)
├── portable-server.js (Server script)
├── package.json       (Package configuration)
├── START_TOOL.bat     (Launch script)
└── README.txt         (This file)


TROUBLESHOOTING:
----------------

Problem: Nothing happens when clicking START_TOOL.bat
Solution: 
  - Ensure all files were extracted
  - Check that 'node' folder exists
  - Right-click START_TOOL.bat → Run as administrator

Problem: Port already in use
Solution:
  - Close any other instances of the tool
  - Or edit portable-server.js, change PORT from 3000 to 3001

Problem: Browser doesn't open
Solution:
  - Manually open browser
  - Go to: http://localhost:5000

Problem: Tool loads but shows errors
Solution:
  - Check that 'build' folder is complete
  - Clear browser cache (CTRL+F5)

Problem: Antivirus blocks the tool
Solution:
  - Add folder to antivirus exceptions
  - Contact IT support if needed


TECHNICAL DETAILS:
------------------
- Node.js Version: 18.19.0 (Portable)
- Express Version: 5.2.1
- React Version: 18.1.0
- Server Port: 3000
- Runs locally only (no internet connection needed)


SUPPORT:
--------
For issues or questions, contact:
Email: your.email@capgemini.com
Teams: Your Name

Version: 1.0.0
Last Updated: [Current Date]

========================================