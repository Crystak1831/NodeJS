const http = require('http');
//work to the file system
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }



    if (url === '/message' && method === 'POST') {
        const body = []
        //on() allows us to listen to certain events
        req.on('data',(chunk) =>{
            body.push(chunk);
        });

        //end listener will be fired once it's done parsing the incoming requests data or the incoming requests
        req.on('end', ()=>{
            //buffer them
            const parseBody = Buffer.concat(body).toString();
            // console.log(parseBody)
            const message = parseBody.split('=')[1]
            //write the file
            fs.writeFileSync('message.txt', message);
        });


        //302 stands for the redirection
        res.statusCode = 302;

        res.setHeader('Location', '/')
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);
