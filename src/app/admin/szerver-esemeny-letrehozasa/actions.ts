"use server";

import { revalidatePath } from "next/cache";
import prisma from "../../../../prisma/client";

export async function createServerEvent(formData: FormData) {
  const rawFormData = {
    server: formData.get("server"),
    prize_first: formData.get("prize-first"),
    prize_second: formData.get("prize-second"),
    prize_third: formData.get("prize-third"),
    date: formData.get("date"),
  };

  await prisma.serverEvent.create({
    data: {
      server: rawFormData.server! as string,
      first_prize: rawFormData.prize_first as string,
      second_prize: rawFormData.prize_second as string,
      third_prize: rawFormData.prize_third as string,
      date: new Date(rawFormData.date as string),
    },
  });

  revalidatePath("/admin/szerver-esemeny-letrehozasa");
  revalidatePath("/szerverek");

  return { success: "Szerver esemény létrehozva" };
}
