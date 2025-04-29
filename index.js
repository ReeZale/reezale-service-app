require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app.get("/", (_, res) => res.send("✅ App is running"));

const PORT = process.env.PORT || 8080;
console.log(`Starting server on port ${PORT}`);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

const prisma = require("./config/prisma");
