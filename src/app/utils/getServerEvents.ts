import prisma from "../../../prisma/client";

export async function getServerEvents() {
  const serverEvents = await prisma.serverEvent.findMany({
    orderBy: {
      date: "asc",
    },
  });

  return serverEvents;
}
