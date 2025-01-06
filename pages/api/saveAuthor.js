import { connectToDatabase } from "../../lib/mongodb"; // Utility to connect to your database
import jwt from "jsonwebtoken"; // Library to handle JWT
import multer from "multer"; // Library to handle file uploads
import fs from "fs"; // For checking and creating directories

const MONGODB_USERS_COLLECTION = process.env.MONGODB_USERS_COLLECTION; // Collection name
const JWT_SECRET = process.env.JWT_SECRET; // Secret used to sign your JWTs

// Set up multer storage and limits
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Set the folder where images will be stored
        const dir = "./public/assets/imgs/authors"; // Store images in 'public/assets/imgs/authors'
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true }); // Create directory if it doesn't exist
        }
        cb(null, dir);
    },
    filename: function (req, file, cb) {
        const username = req.user.username; // Extract username from JWT
        if (!username) {
            return cb(new Error("Username is required for the file upload"));
        }
        // Save image as username.jpg
        cb(null, `${username}.jpg`);
    },
});

// Initialize multer with file size limit (1MB)
const upload = multer({
    storage,
    limits: { fileSize: 1 * 1024 * 1024 }, // 1MB
}).single("image"); // Accept only a single image with key 'image'

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const token = req.cookies.token; // Extract the token directly from cookies

    if (!token) {
        return res.status(401).json({ error: "Authentication token is missing." });
    }

    let decoded;
    try {
        // Verify the JWT token
        decoded = jwt.verify(token, JWT_SECRET);
    } catch (error) {
        console.error("JWT verification failed:", error);
        return res.status(401).json({ error: "Invalid or expired token." });
    }

    req.user = decoded; // Store the decoded JWT user information

    const { ...fields } = req.body; // Extract other fields from the request body

    // Handle image upload (if an image is sent)
    upload(req, res, async (err) => {
        if (err instanceof multer.MulterError) {
            return res.status(400).json({ error: `Multer error: ${err.message}` });
        } else if (err) {
            return res.status(500).json({ error: `Unknown error: ${err.message}` });
        }

        try {
            // Connect to the database
            const db = await connectToDatabase();
            const collection = db.collection(MONGODB_USERS_COLLECTION);

            const username = req.user.username; // Extract username from JWT

            // Update user data in the database
            const result = await collection.updateOne(
                { username }, // Find user by username
                { $set: { ...fields, img: `/assets/imgs/authors/${username}.jpg` } }, // Update fields and image path
                { upsert: false } // Ensure no new document is created if user does not exist
            );

            if (result.matchedCount > 0) {
                if (result.modifiedCount > 0) {
                    res.status(200).json({ message: "Author data updated successfully." });
                } else {
                    res.status(200).json({ message: "No changes were made. Fields already have the same values." });
                }
            } else {
                res.status(404).json({ error: "User not found." });
            }
        } catch (error) {
            console.error("Error updating data:", error);
            res.status(500).json({ error: "Internal server error." });
        }
    });
}