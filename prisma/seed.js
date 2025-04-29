const { seedCountries } = require("./seeds/countrySeed");
const { seedProductCategories } = require("./seeds/productCategorySeed");
const { seedResellPlatforms } = require("./seeds/resellPlatformSeed");

async function seed() {
  await seedCountries();
  await seedProductCategories();
  await seedResellPlatforms();
  console.log("✅ Directory DB seed completed");
}

module.exports = { seed };
