import { MongoClient } from 'mongodb'
import {} from 'dotenv/config'

const uri = process.env.DB_URI
const client = new MongoClient(uri)

async function retrieveAll() {
    try {
        await client.connect(uri)
        console.log('Connected to database...')
        
        let database = client.db('vectacorp')
        let result = await database
            .collection('employees')
            .find({})
            .toArray()
        console.log(result)
    } catch (err) {
        console.log(err)
    } finally {
        await client.close()
    }   
}   
retrieveAll()

// vim: ai ts=4 et nu
