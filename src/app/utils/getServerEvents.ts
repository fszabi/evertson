import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getServerEvents() {
  const events = await prisma.serverEvent.findMany();

  return events;
}
