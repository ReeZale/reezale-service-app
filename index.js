require("dotenv").config(); // ← must be first, before any other config

const express = require("express");
const cors = require("cors");

const app = express();

console.log("App initialized");

app.use(cors({ origin: true, credentials: true }));
console.log("CORS initialized");

app.use(express.json());
console.log("Express.json initialized");

app.get("/", (_, res) => res.send("✅ App is running"));

const PORT = process.env.PORT || 8080;
console.log(`Starting server on port ${PORT}`);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
