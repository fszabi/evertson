import prisma from "../../../prisma/client";

export default async function getEvents() {
  const events = await prisma.event.findMany({
    orderBy: {
      deadline: "asc",
    },
  });

  return events;
}
