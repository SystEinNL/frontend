import { MongoClient } from 'mongodb';

let client;
let clientPromise;

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_DB;

if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable');
}

// Only create a client once and store it
if (process.env.NODE_ENV === 'development') {
    // In development, use a global variable to preserve the MongoClient instance across hot reloads
    if (!global._mongoClientPromise) {
        client = new MongoClient(MONGODB_URI);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    // In production, it's safe to create a new MongoClient instance
    client = new MongoClient(MONGODB_URI);
    clientPromise = client.connect();
}

export async function connectToDatabase() {
    const client = await clientPromise;
    return client.db(MONGODB_DB);
}