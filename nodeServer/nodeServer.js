const http = require('http');
const fs = require('fs');

const server = http.createServer( (req, res) =>{
    console.log(`Request made to url:${req.url}`);

    if (req.url === '/'){
        res.writeHead(200, { 'contyent-type': 'text/html' });
        // res.write('<h1>Hello, there!</h1>');
        const homePageHTML = fs.readFileSync('node.html');
        res.write(homePageHTML)
        res.end();
    } else if (req.url === '/node.png') {
        res.writeHead(200, { 'contyent-type': 'image/png' });
        const nodeLogo = fs.readFileSync('node.png');
        res.write(nodeLogo)
        res.end();
    }else{
        res.writeHead(404, { 'contyent-type': 'text/html' });
        res.write('<h1>You lost bro!</h1>');
        res.end();
    }

});

server.listen(3000);
console.log('NodeServer: 3000')