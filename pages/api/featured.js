import { MongoClient } from "mongodb";

const MONGO_URI = process.env.MONGO_URI;

export default async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        const client = await MongoClient.connect(MONGO_URI);
        const db = client.db("blog_posts");

        const collections = ["engage", "internships", "research", "vacancies"];

        let allPosts = [];

        for (const collectionName of collections) {
            const collection = db.collection(collectionName);

            const posts = await collection
                .find({ carousel: true })  // 🎯 only look for carousel: true
                .limit(3)                  // 🎯 limit to 3 results
                .toArray();

            // Add the collection name into each post
            const postsWithCollection = posts.map((post) => ({
                ...post,
                collection: collectionName,
            }));

            allPosts = allPosts.concat(postsWithCollection);
        }

        client.close();

        if (allPosts.length === 0) {
            return res.status(404).json({ message: `No carousel posts found.` });
        }

        return res.status(200).json(allPosts);
    } catch (error) {
        console.error("Error fetching carousel posts:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}