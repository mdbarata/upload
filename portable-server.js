const express = require('express');
const path = require('path');
const { exec } = require('child_process');

const app = express();
const PORT = 5000;

// Serve static files from build folder
app.use(express.static(path.join(__dirname, 'build')));

// Handle React routing - Express 5 compatible
// Note: In Express 5, use middleware instead of app.get('*')
app.use((req, res, next) => {
  // If the request is not for a static file, serve index.html
  if (!req.path.match(/\.(js|css|jpg|jpeg|png|gif|svg|ico|json|woff|woff2|ttf|eot)$/)) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  } else {
    next();
  }
});

// Start server
app.listen(PORT, () => {
  console.log('========================================');
  console.log('  React Tool - Server Started');
  console.log('========================================');
  console.log('');
  console.log('✅ Server running at: http://localhost:' + PORT);
  console.log('');
  console.log('📱 Opening browser in 2 seconds...');
  console.log('');
  console.log('To stop: Press CTRL+C or close this window');
  console.log('========================================');
  console.log('');
  
  // Auto-open browser
  setTimeout(() => {
    const url = `http://localhost:${PORT}`;
    const command = process.platform === 'win32' 
      ? `start ${url}` 
      : process.platform === 'darwin' 
      ? `open ${url}` 
      : `xdg-open ${url}`;
    
    exec(command, (error) => {
      if (error) {
        console.log('⚠️  Please manually open: http://localhost:' + PORT);
      }
    });
  }, 2000);
}).on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.log('');
    console.log('❌ ERROR: Port ' + PORT + ' is already in use!');
    console.log('');
    console.log('Solutions:');
    console.log('1. Close any other running instances of this tool');
    console.log('2. Edit portable-server.js and change PORT to 3001');
    console.log('');
  } else {
    console.log('❌ Server error:', error.message);
  }
  process.exit(1);
});