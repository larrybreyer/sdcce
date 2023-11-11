"use strict"
import express from 'express'
import {} from 'dotenv/config'
import routes from './routes/routes.js'

const app = express()

app.use('/api/v1/employees', routes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
// vim: ai ts=2 et nu
