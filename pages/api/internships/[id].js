import { MongoClient, ObjectId } from "mongodb";

const MONGO_URI = process.env.MONGO_URI;

export default async function handler(req, res) {
    const { id } = req.query;

    if (req.method !== 'GET') {
        return res.status(405).end(); // Method Not Allowed
    }

    try {
        const client = await MongoClient.connect(MONGO_URI);
        const db = client.db("blog_posts");
        const collection = db.collection("internships");

        const post = await collection.findOne({ _id: new ObjectId(id) });

        client.close();

        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        return res.status(200).json(post);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}