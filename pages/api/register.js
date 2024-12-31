// pages/api/register.js
import bcrypt from 'bcryptjs';  // For password hashing
import { connectToDatabase } from '../../lib/mongodb';

const MONGODB_USERS_COLLECTION = process.env.MONGODB_USERS_COLLECTION; // Collection name

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { username, email, password } = req.body;

        // Basic validation
        if (!username || !email || !password) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        try {
            // Connect to MongoDB
            const db = await connectToDatabase();
            const usersCollection = db.collection(MONGODB_USERS_COLLECTION);

            // Check if the user already exists
            const existingUser = await usersCollection.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: 'User with this email already exists.' });
            }

            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 12);

            // Insert the new user into the database
            const newUser = await usersCollection.insertOne({
                username,
                email,
                password: hashedPassword,
                createdAt: new Date(),
            });

            // Respond with success
            res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Server error, please try again later.' });
        } finally {
            // Close the database connection
            await client.close();
        }
    } else {
        // Handle any non-POST requests (method not allowed)
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}