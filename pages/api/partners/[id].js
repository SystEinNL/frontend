import { MongoClient, ObjectId } from "mongodb";

const MONGO_URI = process.env.MONGO_URI;

export default async function handler(req, res) {
    const { id } = req.query; // grab id from URL

    if (req.method !== "GET") {
        return res.status(405).end(); // Method Not Allowed
    }

    try {
        const client = await MongoClient.connect(MONGO_URI);
        const db = client.db("users");
        const collection = db.collection("partners");

        const partner = await collection.findOne(
            { _id: new ObjectId(id) }
        );

        client.close();

        if (!partner) {
            return res.status(404).json({ message: "Partner not found" });
        }

        res.status(200).json(partner);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}