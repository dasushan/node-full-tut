const http = require('http')   // in built http module

const server = http.createServer((req, res) => {
    // console.log(req)
    // res.write('Welcome to my server')
    // res.end()

    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    else{res.end(`
    <h1>Oops !</h1>
    <p>We can't seem to find the page we are looking for</p>
    <a href="/">back home</a>
    `)}
})

server.listen(5000)