import express from 'express'
import {} from 'dotenv/config'
import routes from './routes/routes.js'
import connectDB from './db/connect.js'
import bodyParser from 'body-parser'

const app = express()

// Register View Engine
app.set('view engine', 'ejs')
// app.use('views','public')
app.use(bodyParser.json());
// app.use('/api/v1/employees', routes)

app.get('/', (req, res) => res.render('index', { title: 'Home' }))
app.get('/add', (req, res) => res.render('add', { title: 'Add Employee' }))
app.use((req, res) => res.status(404).render('404', { title: 'Page Not Found' }))

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
