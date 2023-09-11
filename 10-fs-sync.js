// interact with file system with help of fs module in node

const {readFileSync, writeFileSync} = require('fs')    // destructuring methods out of the fs module
console.log('start')
// readFileSync - reads from the filesystem, the method takes two parameters : path(path to that specific file ), encoding(utf-8)
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

console.log(first, second)

writeFileSync('./content/result-sync.txt',
                `Here is the result : ${first}, ${second}`,
                {flag: 'a'})    // flag: 'a'  -- means append

console.log('done with this task')
console.log('starting the next one')