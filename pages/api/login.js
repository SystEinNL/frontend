// pages/api/login.js
import bcrypt from 'bcryptjs';
import { connectToDatabase } from '../../lib/mongodb';
import jwt from 'jsonwebtoken';

const MONGODB_USERS_COLLECTION = process.env.MONGODB_USERS_COLLECTION; // Collection name
const JWT_SECRET = process.env.JWT_SECRET; // Your secret key for JWT generation

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not defined');
}

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    try {
      // Connect to the MongoDB database
      const db = await connectToDatabase();

      // Find user by email
      const user = await db.collection(MONGODB_USERS_COLLECTION).findOne({ email: email });

      // If user doesn't exist, return an error
      if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      // Compare the password with the hashed password in the database
      const isValid = await bcrypt.compare(password, user.password);

      if (!isValid) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      // Generate a JWT token
      const token = jwt.sign(
        { userId: user._id, email: user.email },
        JWT_SECRET,
        { expiresIn: '1h' }  // Expiry time for the token
      );

      // Set token in an HTTP-only cookie
      res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=3600`);

      // Send response
      return res.status(200).json({ message: 'Login successful' });

    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}

export default handler;