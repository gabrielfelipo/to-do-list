import { prisma } from "prisma/client";


async function main() {
  const members = await prisma.member.findMany();
  console.log(members);
}

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
