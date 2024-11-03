"use server";

import { revalidatePath } from "next/cache";
import prisma from "../../../prisma/client";
import { EventStatusType } from "../types";

export async function updateEvent({
  status,
  id,
}: {
  status: EventStatusType;
  id: number;
}) {
  await prisma.event.update({
    where: { id: id },
    data: {
      status: status,
    },
  });

  revalidatePath("/admin/esemeny-letrehozasa");
  revalidatePath("/");

  return { success: "Esemény módosítva" };
}

export async function deleteEvent(id: number) {
  await prisma.event.delete({
    where: { id: id },
  });

  revalidatePath("/admin/esemeny-letrehozasa");
  revalidatePath("/");

  return { success: "Esemény törölve" };
}
