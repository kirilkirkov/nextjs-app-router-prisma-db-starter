import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  await prisma.posts.deleteMany({});

  await prisma.posts.createMany({
    data: [
      {
        title: "Example Post 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
  });
}

seed()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    console.log("Seed DONE!");
  });
