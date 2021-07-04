const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {

        res.write("Home");
        res.end();
    }
    if (req.url === '/about') {

        res.write("About Us");
        res.end();
    } else {
        res.write("Eror")
        res.end()
    }
});
server.listen(300)
console.log("welcome")