require('dotenv').config();
const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({ origin: "*" }));
app.use(express.json());

//const uri = process.env.MONGODB_URI;

const uri = process.env.MONGODB_URI;
console.log("MongoDB URI:", uri);
// if (!uri) {
//     console.error("MONGODB_URI is not set in the environment variables");
//     process.exit(1);
// }

const client = new MongoClient(uri);

async function connectToDatabase() {
    try {
        await client.connect();
        console.log("Connected to MongoDB Atlas");
        return client.db("portfolio"); // Replace "portfolio" with your actual database name
    } catch (error) {
        console.error("Error connecting to MongoDB Atlas:", error);
        process.exit(1);
    }
}

// API endpoints
app.get('/api/projects', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection('projects');
        const projects = await collection.find({}).toArray();
        console.log(projects);
        res.json(projects);
    } catch (error) {
        console.error("Error fetching projects:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.get("/api/resume", async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection('resume');
        const resume = await collection.find({}).toArray();
        res.json(resume);
    } catch (error) {
        console.error("Error fetching resume:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.get("/api/contact", async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection('contact');
        const contact = await collection.findOne({});
        res.json(contact);
    } catch (error) {
        console.error("Error fetching contact:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

process.on('SIGINT', async () => {
    await client.close();
    console.log('MongoDB connection closed');
    process.exit(0);
});