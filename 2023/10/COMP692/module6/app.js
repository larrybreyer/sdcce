"use strict"
import express from 'express'
import {} from 'dotenv/config'
import routes from './routes/routes.js'
import connectDB from './db/connect.js'

const app = express()

app.use('/api/v1/employees', routes)

const PORT = process.env.PORT || 5000


const init = async () => {
  try {
    await connectDB(process.env.DB_URI)
    console.log('Conencted to MongoDB')
    app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
  } catch (err) {
    console.log(err)
  }
}

init()
// vim: ai ts=2 et nu
