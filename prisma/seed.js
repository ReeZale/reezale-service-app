const { seedCountries } = require("./seeds/countrySeed");
const { seedProductCategories } = require("./seeds/productCategorySeed");
const { seedResellPlatforms } = require("./seeds/resellPlatformSeed");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  await seedCountries(prisma);
  await seedProductCategories(prisma);
  await seedResellPlatforms(prisma);
  console.log("✅ Directory DB seed completed");
}

seed()
  .catch((err) => {
    console.error("❌ Seeding failed:", err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
