import prisma from "../../../prisma/client";

export default async function getInventoryImage() {
  const inventoryImage = await prisma.inventoryImage.findUnique({
    where: {
      id: 1,
    },
  });

  return inventoryImage;
}
