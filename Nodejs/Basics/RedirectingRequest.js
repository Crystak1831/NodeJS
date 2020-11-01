/*redirect the user back to slash nothing, not leave him on /message
        将用户重定向回斜线，不让他继续停留在/ message
        * and to create a new file and store the message the user entered in it
        * */

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


    /*如果url是message的话我们可以刷新到localhost:3000, 而不是像之前那样刷新不回去*/
    if (url === '/message' && method === 'POST') {
        /*redirect the user back to slash nothing, not leave him on /message
        将用户重定向回斜线，不让他继续停留在/ message
        * and to create a new file and store the message the user entered in it
        * */

        //write the file
        fs.writeFileSync('message.txt', 'DUMMY');
         //302 stands for the redirection
       res.statusCode = 302;

       //'Location'是browser默认的header，set the location '/' can use the host automatically when we are ready running on.
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
