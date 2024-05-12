import express from 'express'

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: 'public'})
})

app.listen(5001, () => console.log(`Server started on port 5001`))
