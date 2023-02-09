const http = require('http')
const app = require('./app')

const port = process.env.PORT || 3000

const server = http.createServer(app)

server.listen(port)
// const server = http.createServer((req, res) => {
//     if(req.url === '/'){
//         res.write('Hello World')
//         res.end()
//     }
//     if(req.url === '/api/courses'){
//         res.write(JSON.stringify([1,2,3,4,5]))
//         res.end()
//     }
// })

console.log(`Listening on port ${port}`)