const fs = require('fs')
fs.readFile('hi.txt', (err, data) => {
    console.log(data.toString())
})