import { MongoClient } from "mongodb";

const MONGO_URI = process.env.MONGO_URI; // from your .env

export default async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).end(); // Method Not Allowed
    }

    try {
        const client = await MongoClient.connect(MONGO_URI);
        const db = client.db("users"); // your users database
        const collection = db.collection("partners"); // partners collection

        const partners = await collection.find({}, {
        }).toArray();

        client.close();
        res.status(200).json(partners);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}