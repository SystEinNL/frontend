import { MongoClient } from "mongodb";

const MONGO_URI = process.env.MONGO_URI; // Make sure you have this in your .env!

export default async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).end(); // Method Not Allowed
    }

    try {
        const client = await MongoClient.connect(MONGO_URI);
        const db = client.db("blog_posts"); // your database name
        const collection = db.collection("internships"); // your collection name

        const internships = await collection.find({}, {
        }).toArray();

        client.close();
        res.status(200).json(internships);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}