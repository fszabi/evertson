"use server";

import { revalidatePath } from "next/cache";
import prisma from "../../../../prisma/client";

export async function replaceInventoryImage({
  imageUrl,
}: {
  imageUrl: string | null | undefined;
}) {
  await prisma.inventoryImage.upsert({
    where: {
      id: 1,
    },
    update: {
      imageUrl: imageUrl,
    },
    create: {
      id: 1,
      imageUrl: imageUrl,
    },
  });

  revalidatePath("/");

  return { success: "Raktár kép kicserélve" };
}
