import express from 'express'
import {} from 'dotenv/config'
import routes from './routes/routes.js'
import connectDB from './db/connect.js'
import bodyParser from 'body-parser'

const app = express()

// Register View Engine
app.set('view engine', 'ejs')
// app.use('views','public')
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// app.use('/api/v1/employees', routes)

app.get('/', (req, res) => {
    const employees = [
        {name: 'Hadley Newham',   ext: 4995, email: 'hadley@vecatcorp.com', title: 'CEO'},
        {name: 'Eureka Garlic',   ext: 4367, email: 'eureka@vecatcorp.com', title: 'Admin'},
        {name: 'Hugo First',      ext: 1224, email: 'hugo@vecatcorp.com', title: 'QA'},
        {name: 'Jilian Here',     ext: 8867, email: 'jilian@vecatcorp.com', title: 'QA'},
        {name: 'Gladys Overwith', ext: 4367, email: 'gladys@vecatcorp.com', title: 'Sales'}
    ]
    res.render('index', { title: 'Home!', employees})

})

app.get('/add', (req, res) => res.render('add', { title: 'Add Employee!' }))
app.use((req, res) => res.status(404).render('404', { title: 'Page Not Found!' }))

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
// vim: ai ts=4 et nu
