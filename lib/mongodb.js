import { MongoClient } from 'mongodb';

let client;
let clientPromise;

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_DB;

if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable');
}

if (!global._mongoClientPromise) {
    client = new MongoClient(MONGODB_URI);
    global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export async function connectToDatabase() {
    const client = await clientPromise;
    return client.db(MONGODB_DB);
}