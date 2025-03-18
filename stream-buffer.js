const http = require('http');

//creating a server using  raw node.js

 const server = http.createServer()

 //listener

 server.on('request', (req, res) => {
    console.log(req.url, req.method);
    res.end('hello from the world')
 })
 server.listen(5000, () => {
    console.log(`Server is listening on port 5000`);
 })