import { seedCountries } from "../prisma/seeds/countrySeed";
import { seedProductCategories } from "../prisma/seeds/productCategorySeed";
import { seedResellPlatforms } from "../prisma/seeds/resellPlatformSeed";

export async function initializeApp(prisma) {
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
