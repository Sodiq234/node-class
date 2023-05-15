// const http = require('node:http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello, World!\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


const serveData = require('node:http');
const dataFile  


const hostname = 'localhost';
const port = 3000;

const server = serveData.createServer((req,res) =>{

    res.json({
        message:'Hello World!',
        us: "We are learning Node.js"
    });
});

server.listen(port,hostname,()=>{

    console.log('server running at http://${hostname}:${port}/');

})
