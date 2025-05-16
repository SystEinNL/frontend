import { MongoClient } from "mongodb";

const MONGO_URI = process.env.MONGO_URI;

export default async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).end(); // Method Not Allowed
    }
    if (!process.env.MONGO_URI) {
        throw new Error('⚠️ Please define the MONGO_URI environment variable inside .env.local');
    }

    try {
        const client = await MongoClient.connect(MONGO_URI);
        const db = client.db("blog_posts");
        const collection = db.collection("engage");

        const posts = await collection.find(
            { carousel: true }, // 👈 Only posts where carousel: true
        ).toArray();

        client.close();
        res.status(200).json(posts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}