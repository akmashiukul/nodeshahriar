let a = require('http');
a.createServer(function(req, res) {
    res.write("Hi")
    res.end();
}).listen(8080);