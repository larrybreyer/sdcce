import http from 'http'

http.createServer((req, res) => {
    // Response
    res.write('Hello World!')
    res.end()
})
.listen(5001, () => {
    console.log('Server running...')
})

// vim:	ai ts=2 et nu
