"use server";

import { revalidatePath } from "next/cache";
import prisma from "../../../prisma/client";
import { StatusType } from "../types";

export default async function updateEvent({
  status,
  id,
}: {
  status: StatusType;
  id: number;
}) {
  await prisma.event.update({
    where: { id: id },
    data: {
      status: status,
    },
  });

  return { success: "Esemény módosítva" };
}
