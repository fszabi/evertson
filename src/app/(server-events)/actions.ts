"use server";

import prisma from "../../../prisma/client";
import { ServerEventStatusType } from "../types";

export default async function updateServerEvent({
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

  return { success: "Szerver esemény módosítva" };
}
