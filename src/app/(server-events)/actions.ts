"use server";

import { revalidatePath } from "next/cache";
import prisma from "../../../prisma/client";
import { ServerEventStatusType } from "../types";

export async function updateServerEvent({
  status,
  id,
}: {
  status: ServerEventStatusType;
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

export async function deleteServerEvent(id: number) {
  await prisma.serverEvent.delete({
    where: { id: id },
  });

  revalidatePath("/admin/szerver-esemeny-letrehozasa");
  revalidatePath("/szerverek");

  return { success: "Szerver esemény törölve" };
}
