"use server";

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
}
