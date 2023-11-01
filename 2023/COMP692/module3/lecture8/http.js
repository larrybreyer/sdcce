import http from 'http'
import {} from 'dotenv/config'

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end(`<h1>Welcome to our Website</h1>`)
  } else if (req.url === '/about') {
    res.end(`<h1>About our Website</h1>`)
  } else if (req.url === '/products') {
    res.end(`<h1>About our Products</h1>`)
  }
})

const PORT = process.env.PORT || 5002

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
// vim: ai ts=2 et nu
