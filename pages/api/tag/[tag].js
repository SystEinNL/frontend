import { MongoClient } from "mongodb";

const MONGO_URI = process.env.MONGO_URI;

export default async function handler(req, res) {
    const { tag } = req.query;

    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    if (!tag) {
        return res.status(400).json({ message: "Tag is required" });
    }

    try {
        const client = await MongoClient.connect(MONGO_URI);
        const db = client.db("blog_posts");

        const collections = ["engage", "internships", "research", "vacancies"];

        let allPosts = [];

        for (const collectionName of collections) {
            const collection = db.collection(collectionName);

            const posts = await collection
                .find({ tags: { $in: [tag] } })
                .limit(3)
                .toArray(); // you can adjust limit if needed

            allPosts = allPosts.concat(posts);
        }

        client.close();

        if (allPosts.length === 0) {
            return res.status(404).json({ message: `No posts found for tag: ${tag}` });
        }

        return res.status(200).json(allPosts);
    } catch (error) {
        console.error("Error fetching posts by tag:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}