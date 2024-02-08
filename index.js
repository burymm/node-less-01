const math = require('./math');
const fs = require('fs');
const http = require('http');


const PORT = 3000;
const HOST = 'localhost';

let server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8' });

    if (req.url === '/') {
        fs.createReadStream('./html/index.html').pipe(res);
    } else if (req.url === '/about') {
        fs.createReadStream('./html/about.html').pipe(res);
    } else {
        fs.createReadStream('./html/404.html').pipe(res);
    }
});

server.listen(PORT, HOST, () => {
    console.log(`started http://${HOST}:${PORT}`);
});


// console.log(math.sqr(100));