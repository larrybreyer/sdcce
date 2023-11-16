"use strict"
import express from 'express'
import { } from 'dotenv/config'
const app = express()
const router = express.Router()

app.use(express.static('public')) // This will find the CSS

router.get('/',      (req, res) => {
  res.sendFile('index.html', {root: 'public'})
})

// OR  Zak likes this better, specify route and method
//  router.route('/').get((req, res) => {
//    res.sendFile('index.html', {root: 'public'})
//  })

router.get('/about', (req, res) => {
  res.sendFile('about.html', {root: 'public'})
})

app.use(router)
const PORT = process.env.PORT || 5002

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
//  vim: ai ts=2 et nu
