const express = require("express");
const cors = require("cors");

const app = express();

// Minimal CORS config for cookies + custom headers
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("✅ Server is up and running with CORS!");
});

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
