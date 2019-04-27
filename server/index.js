const http = require("http")

const server = http.createServer((req, res) => {
    const { method, url } = req
    res.statusCode === 200
    if (method === "get" && (url === "/" || url === "")) {
        
    } else if (url === "/style-3000.css" && method === "GET") {
        // res.statusCode = 200
        setTimeout(() => {
            res.end(`
                div {
                    background: lightblue;
                }
            `)
        }, 3000)
    } else if (url === "/js-3000.js" && method === "GET") {
        // res.statusCode = 200
        setTimeout(() => {
            res.end(`
                
            `)
        }, 3000)
    } else if (url === "/js-5000.js" && method === "GET") {
        // res.statusCode = 200
        setTimeout(() => {
            res.end(`
                
            `)
        }, 5000)
    } else {
        res.statusCode = 200;
        res.end()
    }
})

server.listen(8001)