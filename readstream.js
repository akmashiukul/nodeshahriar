const fs = require('fs')
const data = fs.createReadStream('1.txt', 'utf8')
const write = fs.createWriteStream('output.txt')
data.on('data', (chunk) => {
    write.write(chunk)

})