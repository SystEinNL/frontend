// pages/api/saveAuthor.js
import { connectToDatabase } from '../../lib/mongodb';

const MONGODB_USERS_COLLECTION = process.env.MONGODB_USERS_COLLECTION; // Collection name

async function handler(req, res) {
  if (req.method === 'POST') {
    const { userId, title, desc } = req.body;

    if (!userId || !title || !desc) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    try {
      const db = await connectToDatabase();

      const result = await db.collection(MONGODB_USERS_COLLECTION).updateOne(
        { _id: userId },
        { $set: { title, desc } }
      );

      client.close();

      res.status(200).json({ message: "Author details updated" });
    } catch (error) {
      res.status(500).json({ message: "Failed to update author details" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}

export default handler;