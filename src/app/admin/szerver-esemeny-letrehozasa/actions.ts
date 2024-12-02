"use server";

import { revalidatePath } from "next/cache";
import prisma from "../../../../prisma/client";

export default async function createServerEvent(formData: FormData) {
  const rawFormData = {
    server: formData.get("server"),
    first_prize: formData.get("first-prize"),
    second_prize: formData.get("second-prize"),
    third_prize: formData.get("third-prize"),
    fourth_prize: formData.get("fourth-prize"),
    fifth_prize: formData.get("fifth-prize"),
    date: formData.get("date"),
  };

  await prisma.serverEvent.create({
    data: {
      server: rawFormData.server as string,
      first_prize: rawFormData.first_prize as string,
      second_prize: rawFormData.second_prize as string,
      third_prize: rawFormData.third_prize as string,
      fourth_prize: rawFormData.fourth_prize as string,
      fifth_prize: rawFormData.fifth_prize as string,
      date: new Date(
        new Date(rawFormData.date as string).getTime() + 60 * 60 * 1000
      ),
    },
  });

  revalidatePath("/admin/szerver-esemeny-letrehozasa");
  revalidatePath("/szerverek");

  return { success: "Szerver esemény létrehozva" };
}
