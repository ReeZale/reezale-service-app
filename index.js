require("dotenv").config();

const express = require("express");
const cors = require("cors");
const router = require("./router");

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app.get("/health", (_, res) => res.send("✅ Healthy"));
app.get("/", (_, res) => res.send("✅ App is running"));

app.use("/api/v1", router);

const PORT = process.env.PORT;
console.log(`Starting server on port ${PORT}`);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
