// pages/api/logout.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        // Clear the token by setting an expired cookie
        res.setHeader('Set-Cookie', 'token=; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=0');
  
        // Send a response indicating successful logout
        return res.status(200).json({ message: 'Logout successful' });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
      }
    } else {
      return res.status(405).json({ message: 'Method not allowed' });
    }
  }