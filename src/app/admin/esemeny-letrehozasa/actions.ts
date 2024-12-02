"use server";

import { revalidatePath } from "next/cache";
import prisma from "../../../../prisma/client";

export default async function createEvent(formData: FormData) {
  const rawFormData = {
    title: formData.get("title"),
    first_prize: formData.get("first-prize"),
    second_prize: formData.get("second-prize"),
    third_prize: formData.get("third-prize"),
    fourth_prize: formData.get("fourth-prize"),
    fifth_prize: formData.get("fifth-prize"),
    deadline: formData.get("deadline"),
  };

  await prisma.event.create({
    data: {
      title: rawFormData.title as string,
      first_prize: rawFormData.first_prize as string,
      second_prize: rawFormData.second_prize as string,
      third_prize: rawFormData.third_prize as string,
      fourth_prize: rawFormData.fourth_prize as string,
      fifth_prize: rawFormData.fifth_prize as string,
      deadline: new Date(rawFormData.deadline as string),
    },
  });

  revalidatePath("/admin/esemeny-letrehozasa");
  revalidatePath("/");

  return { success: "Esemény létrehozva" };
}
