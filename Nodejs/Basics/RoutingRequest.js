const http = require('http');

const server = http.createServer((req,res) => {
    const url = req.url;
    //'/'表示输入任何信息都可以有/message
    if(url==='/'){
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="massage"><button type="submit">submit</button></form></body>')
        res.write('</html>');
       //if we write return we should out of the whole function, 不往下执行了
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html')
    res.write('<html>');
    res.write('<head><title>NodeJS</title></head>');
    res.write('<body><h1>Hello</h1></body>')
    res.write('</html>');

    res.end();

})
server.listen(3000)
