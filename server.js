const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
  // Only respond to requests on the home route
  if (req.url === '/') {
    const currentDateTime = new Date().toLocaleString();
    const responseText = `ubuntu-big-zee ${currentDateTime}`;
    
    // Set the response header and status code
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    // Send the response
    res.end(responseText);
  } else {
    // Handle other routes (404)
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404: Not Found');
  }
});

// Start the server and listen on port 3000
const PORT = 8100;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});