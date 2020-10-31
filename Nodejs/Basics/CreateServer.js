const http = require('http');

// function rqListener(req, res) {
//
// }


//you can also use the 匿名函数
const server = http.createServer((req,res) => {
    console.log(req)

    //exit the server
    // process.exit()

    //set a new header
    //attach a header to our response where we can pass some meta information
    res.setHeader('Content-Type', 'text/html');
    //write some data to the response and this works in chunks or in multiple lines
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>')
    res.write('<body><h1>Hello from my Node.js Server</h1></body>')
    res.write('</html>')


   /*
   tell node once we're done with creating that response and we do this by calling 'end()', we can't
    write the res.write after this method, it will be the error
    */
    res.end()
});


server.listen(3000);
