"use strict"
import {MongoClient } from 'mongodb';
import {} from 'dotenv/config';
console.log('Connecting to database...');
console.log(`Connection string: ${process.env.DB}`);
MongoClient.connect(process.env.DB, (err, database) => {
  if (err) throw err;
  console.log('Connected to database...');
})

// vim: ai ts=2 et nu
