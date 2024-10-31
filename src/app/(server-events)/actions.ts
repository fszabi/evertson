"use server";

import { revalidatePath } from "next/cache";
import prisma from "../../../prisma/client";
import { StatusType } from "../types";

export async function updateServerEvent({
  status,
  id,
}: {
  status: StatusType;
  id: number;
}) {
  await prisma.serverEvent.update({
    where: { id: id },
    data: {
      status: status,
    },
  });

  revalidatePath("/admin/szerver-esemeny-letrehozasa");
  revalidatePath("/szerverek");

  return { success: "Szerver esemény módosítva" };
}
