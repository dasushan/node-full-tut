const {createReadStream} = require('fs')

// default 64kb (buffer size)
// last buffer - remainder
// highWatrMark - control size
// const stream = createReadStream('./content/big.txt', {highWaterMark: 90000})
//const stream = createReadStream('./content/big.txt', {encoding: 'utf8' })
const stream = createReadStream('./content/big.txt')

stream.on('data', (chunk) => {
    console.log(chunk)
})
stream.on('error', (err) => console.log(err))

// file size of big.txt is 169kb