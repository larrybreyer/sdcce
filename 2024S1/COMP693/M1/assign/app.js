import express from 'express'

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: 'public'})
})
// My computer is an Apple Mac which has an app named ControlCentral on port 5000
// Port 5001 is unused on the Mac.
app.listen(5001, () => console.log(`Server started on port 5001`))
