const http = require('http');
const port = 5000;

http.createServer((req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all domains
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');


    if (req.url === '/data') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: "Hello from the backend!" }));
    } else {
        res.writeHead(404);
        res.end();
    }
}).listen(port, () => {
    console.log(`Server running on port ${port}`);
});
