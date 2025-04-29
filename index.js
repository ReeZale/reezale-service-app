require("dotenv").config(); // ← must be first, before any other config

const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const DATABASE_URL = process.env.DATABASE_URL;

console.log("Database url detected", DATABASE_URL);

console.log("Creating prisma client");
const prisma = new PrismaClient();
console.log("Creating prisma client created");

const app = express();

console.log("App initialized");

app.use(cors({ origin: true, credentials: true }));
console.log("CORS initialized");

app.use(express.json());
console.log("Express.json initialized");

app.get("/", (_, res) => res.send("✅ App is running"));

const PORT = process.env.PORT;
console.log(`Starting server on port ${PORT}`);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
