import { MongoClient } from "mongodb";

const MONGO_URI = process.env.MONGO_URI;

export default async function handler(req, res) {
    const { username } = req.query;

    if (req.method !== 'GET') {
        return res.status(405).end(); // Method Not Allowed
    }

    try {
        const client = await MongoClient.connect(MONGO_URI);
        const db = client.db("users"); // Your users database
        const collection = db.collection("agents"); // agents collection inside users db

        // Only select specific fields
        const author = await collection.findOne(
            { username: username },
            {
                projection: {
                    _id: 0 // Optional: exclude _id if you don't want it
                }
            }
        );

        client.close();

        if (!author) {
            return res.status(404).json({ message: "Author not found" });
        }

        return res.status(200).json(author);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}