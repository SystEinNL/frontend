import { connectToDatabase } from '../../../lib/mongodb';

const MONGODB_USERS_COLLECTION = process.env.MONGODB_USERS_COLLECTION;

export default async function handler(req, res) {
    const { id } = req.query;

    if (!id) {
        return res.status(400).json({ message: 'Missing user ID in request query' });
    }

    if (req.method === 'GET') {
        try {
            const db = await connectToDatabase();
            // Fetch user by username with limited fields
            const user = await db.collection(MONGODB_USERS_COLLECTION).findOne(
                { username: id },
                { projection: { name: 1, img: 1, rewards: 1, bio: 1 } }
            );

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            res.status(200).json(user);
        } catch (error) {
            console.error(`Error fetching user with ID: ${id}`, error);
            res.status(500).json({ message: 'Internal server error', error });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}