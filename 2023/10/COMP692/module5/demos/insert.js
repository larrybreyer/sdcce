import {MongoClient } from 'mongodb';
import {} from 'dotenv/config';
const uri = process.env.DB_URI;
const client = new MongoClient(uri);

async function main() {

let employee = {
    name: 'Jodie Bird',
    extension: 1115,
    email: 'Jodie@vectacorp.com',
    title: 'CEO',
    dateHired: Date.now(),
    currentlyEmployed: true
};

  try {
    await client.connect();
    console.log('Connected successfully to server');

    let database = client.db('vectacorp');
    let result = await database
                .collection('employees')
                .insertOne(employee);
    console.log('1 document inserted.');
    console.log(result);

  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
}

main();

// vim: ai ts=2 et nu
