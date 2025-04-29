require("dotenv").config();

const express = require("express");
const cors = require("cors");
const router = require("./router");
const prisma = require("./config/prisma");

console.log("Initializing app");

const app = express();

console.log("Initializing cors");

app.use(cors({ origin: true, credentials: true }));

console.log("Initializing json");

app.use(express.json());

console.log("Initializing routes");

app.get("/health", (_, res) => res.send("✅ Healthy"));
app.get("/", (_, res) => res.send("✅ App is running"));

app.use("/api/v1", router);

const PORT = process.env.WEBSITES_URL || 8080;

console.log("Port from .env", PORT);
console.log(`Starting server on port ${PORT}`);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
