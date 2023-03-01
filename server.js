const http = require('node:http')

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title></title>
</head>
<body>
  hello, wesley. 
</body>
</html>`

const server = http.createServer((req, res) => res.end(html))

server.listen(8000, () => {
  console.log('Listening 8000')
})
