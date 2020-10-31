const http = require('http');

const express = require('express');

const middleware = express();

//use allowed us to add middleware function
middleware.use((req, res, next) => {
    console.log('In the middleware')
    next();//allows the request to continue to the next middleware in line

});

middleware.use((req, res, next) => {
    console.log('In the another middleware')
    res.send('<h1>Hello from Express</h1>');

})

const server = http.createServer(middleware);

server.listen(3000)
