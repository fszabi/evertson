import prisma from "../../../prisma/client";

export async function getServerEvents() {
  const events = await prisma.serverEvent.findMany({
    orderBy: {
      date: "asc",
    },
  });

  return events;
}
