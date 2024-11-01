"use server";

import prisma from "../../../prisma/client";
import { EventStatusType } from "../types";

export default async function updateEvent({
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

  return { success: "Esemény módosítva" };
}
