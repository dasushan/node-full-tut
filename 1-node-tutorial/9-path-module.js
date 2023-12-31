// In Node.js we can interact with filesystem, so another useful module is path module
// path module - helps us interact with file paths easily

const path = require('path')

console.log(path.sep)

const filePath = path.join('/content/','subfolder','test.txt')
console.log(filePath);

const base = path.basename(filePath)
console.log(base)

const absolutepath = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolutepath)