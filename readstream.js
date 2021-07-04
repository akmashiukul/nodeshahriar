const fs = require('fs')
const data = fs.createReadStream('1.txt', 'utf8')
data.on('data', (chunk) => {
    console.log(chunk.toString())
})