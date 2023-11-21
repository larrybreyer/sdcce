"user strict"
import { MongoClient, ObjectId } from 'mongodb'
import {} from 'dotenv/config'

const uri = process.env.DB_URI
const client = new MongoClient(uri)

//  Names in the database:
//  Merrick Parris
//  Zak Ruvalcaba
//  Beverly Pemberton
//  Marge Summerfield
//  Jodie Bird

async function retrieveOne() {
    try {
        await client.connect(uri);
        console.log("Connected to database...");

        let query = { _id: new ObjectId('655967a82d4a82add26eacc7') };
        let database = client.db("vectacorp");
        let result = await database
            .collection("employees")
            .deleteOne(query);
        console.log(result);
    } catch (err) {
        console.log(err);
    } finally {
        await client.close();
    }   
}   
retrieveOne();

// vim: ai ts=4 et nu
