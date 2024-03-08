const http = require('http');
const port = process.env.PORT || 5000; // Use the Azure-assigned port

http.createServer((req, res) => {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // Define response for the '/data' route
    if (req.url === '/data') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: `Hello from the backend! Server running on ${port}` }));
    } else {
        // Handle 404
        res.writeHead(404);
        res.end();
    }
}).listen(port, () => {
    console.log(`Server running on port ${port}`);
});
