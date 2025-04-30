const seedCountries = require("./seeds/countrySeed");
const seedProductCategories = require("./seeds/productCategorySeed");
const seedResellPlatforms = require("./seeds/resellPlatformSeed");

async function initializeApp(prisma) {
  try {
    await seedCountries(prisma);
    await seedProductCategories(prisma);
    await seedResellPlatforms(prisma);
    console.log("✅ Directory DB seed completed");
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
}

module.exports = initializeApp;
