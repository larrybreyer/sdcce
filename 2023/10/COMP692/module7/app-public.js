import express from 'express'
import {} from 'dotenv/config'
import routes from './routes/routes.js'
import connectDB from './db/connect.js'
import bodyParser from 'body-parser'

const app = express()

// Load Static Files -- Here
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname  = path.dirname(__filename)

app.get('/', (req, res) => {
  res.sendFile('/public/index.html', { root: __dirname })
})
// Load Static Files -- Done

app.use(bodyParser.json());
app.use('/api/v1/employees', routes)

const PORT = process.env.PORT || 5000


const init = async () => {
  try {
    await connectDB(process.env.DB_URI)
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
  } catch (err) {
    console.log(err)
  }
}

init()
// vim: ai ts=2 et nu
