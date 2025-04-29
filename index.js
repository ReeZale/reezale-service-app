require("dotenv").config();

let express, cors, router, prisma, initializeApp;

try {
  express = require("express");
  console.log("✅ Loaded express");
} catch (err) {
  console.error("❌ Failed to load express:", err);
  process.exit(1);
}

try {
  cors = require("cors");
  console.log("✅ Loaded cors");
} catch (err) {
  console.error("❌ Failed to load cors:", err);
  process.exit(1);
}

try {
  router = require("./router");
  console.log("✅ Loaded router");
} catch (err) {
  console.error("❌ Failed to load router:", err);
  process.exit(1);
}

try {
  prisma = require("./config/prisma");
  console.log("✅ Loaded prisma");
} catch (err) {
  console.error("❌ Failed to load prisma:", err);
  process.exit(1);
}

try {
  initializeApp = require("./utils/initializeApp").initializeApp;
  console.log("✅ Loaded initializeApp");
} catch (err) {
  console.error("❌ Failed to load initializeApp:", err);
  process.exit(1);
}

// Then continue normal
console.log("Initializing app data");

(async () => {
  try {
    await initializeApp(prisma);
  } catch (err) {
    console.error("❌ Failed to initialize app:", err);
    process.exit(1);
  }
})();

const app = express();

console.log("Initializing cors");

app.use(cors({ origin: true, credentials: true }));

console.log("Initializing json");

app.use(express.json());

console.log("Initializing routes");

app.get("/health", (_, res) => res.send("✅ Healthy"));
app.get("/", (_, res) => res.send("✅ App is running"));

app.use("/api/v1", router);

const PORT = process.env.PORT || 8080;

console.log("Port from .env", PORT);
console.log(`Starting server on port ${PORT}`);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
