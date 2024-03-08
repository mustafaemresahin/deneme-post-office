const http = require('http');
const port = 5000;

http.createServer((req, res) => {
    if (req.url === '/data') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: "Hello from the backend! Mustafa did it!" }));
    } else {
        res.writeHead(404);
        res.end();
    }
}).listen(port, () => {
    console.log(`Server running on port ${port}`);
});
