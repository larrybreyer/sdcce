"user strict"
import { MongoClient } from 'mongodb'
import {} from 'dotenv/config'

const uri = process.env.DB_URI
const client = new MongoClient(uri)

//  Names in the database:
//  Merrick Parris
//  Kenny Beck
//  Beverly Pemberton
//  Marge Summerfield
//  Jodie Bird

async function retrieveOne() {
    try {
        await client.connect(uri);
        console.log("Connected to database...");

        let query = { name: "ZakRuvalcaba" };
        let queryUpdate = 
            {$set: {name: 'Zak Ruvalcaba', email:'zak@vectacorp.com'}};

        let database = client.db("vectacorp");
        let result = await database
            .collection("employees")
            .updateOne(query, queryUpdate);
        console.log(result);
    } catch (err) {
        console.log(err);
    } finally {
        await client.close();
    }   
}   
retrieveOne();

// vim: ai ts=4 et nu
