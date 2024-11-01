"use server";

import { revalidatePath } from "next/cache";
import prisma from "../../../../prisma/client";

export default async function createEvent(formData: FormData) {
  const rawFormData = {
    title: formData.get("title"),
    prize_first: formData.get("prize-first"),
    prize_second: formData.get("prize-second"),
    prize_third: formData.get("prize-third"),
    deadline: formData.get("deadline"),
  };

  await prisma.event.create({
    data: {
      title: rawFormData.title! as string,
      first_prize: rawFormData.prize_first as string,
      second_prize: rawFormData.prize_second as string,
      third_prize: rawFormData.prize_third as string,
      deadline: new Date(rawFormData.deadline as string),
    },
  });

  revalidatePath("/admin/esemeny-letrehozasa");
  revalidatePath("/");

  return { success: "Esemény létrehozva" };
}
