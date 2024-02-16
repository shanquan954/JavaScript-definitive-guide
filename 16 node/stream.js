const fs = require('fs')
const stream = require('stream')
console.log("path:",process.cwd())

// const content = fs.readFileSync('./16 node/files/data.txt', 'utf8')
// console.log(content)

// fs.promises.readFile('./16 node/files/data.txt', 'utf8').then((content) => {
//     console.log(content)
// }).catch((err) => { console.log(err)})

const reader = fs.createReadStream('./16 node/files/data.txt', 'utf8')

const writer = fs.createWriteStream('./16 node/files/data_copy.txt')

reader.pipe(writer)

