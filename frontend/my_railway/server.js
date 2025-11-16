const http = require('http')
const fs = require('fs')
const path = require('path')
const url = require('url')

const root = path.resolve(__dirname)
const port = 5523

const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml; charset=utf-8'
}

const server = http.createServer((req, res) => {
  const parsed = url.parse(req.url)
  let pathname = decodeURIComponent(parsed.pathname)
  if (pathname === '/') pathname = '/index.html'
  const filePath = path.join(root, pathname)
  if (!filePath.startsWith(root)) {
    res.statusCode = 403
    res.end('Forbidden')
    return
  }
  fs.stat(filePath, (err, stat) => {
    if (err) {
      res.statusCode = 404
      res.end('Not Found')
      return
    }
    if (stat.isDirectory()) {
      const indexFile = path.join(filePath, 'index.html')
      fs.readFile(indexFile, (e, data) => {
        if (e) {
          res.statusCode = 404
          res.end('Not Found')
          return
        }
        res.setHeader('Content-Type', types['.html'] || 'text/plain')
        res.end(data)
      })
      return
    }
    const ext = path.extname(filePath).toLowerCase()
    const type = types[ext] || 'application/octet-stream'
    fs.readFile(filePath, (e, data) => {
      if (e) {
        res.statusCode = 500
        res.end('Server Error')
        return
      }
      res.setHeader('Content-Type', type)
      res.end(data)
    })
  })
})

server.listen(port, () => {
  console.log('Preview: http://localhost:' + port + '/')
})