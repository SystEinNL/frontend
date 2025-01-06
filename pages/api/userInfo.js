// Example: pages/api/userInfo.js
import jwt from "jsonwebtoken";
import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../lib/mongodb"; // Assume this connects to your database

const JWT_SECRET = process.env.JWT_SECRET;

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: "Not authenticated" });
    }

    try {
        // Verify the JWT token
        const decoded = jwt.verify(token, JWT_SECRET);

        // Connect to the database
        const db = await connectToDatabase();
        const collection = db.collection("users");

        // Extract requested fields from the body
        const { fields } = req.body; // Example: { fields: ["email", "username"] }
        if (!fields || !Array.isArray(fields)) {
            return res.status(400).json({ message: "Invalid fields format" });
        }

        const userId = new ObjectId(decoded.userId);

        // Fetch only the requested fields from the database
        const user = await collection.findOne(
            { _id: userId }, // Match the user based on the token's userId
            { projection: fields.reduce((proj, field) => ({ ...proj, [field]: 1 }), {}) }
        );

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json(user); // Return the requested user fields
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
}