'use server'

import { revalidatePath } from "next/cache";
import prisma from "./db"

export async function actionPost(formData: FormData) {
  "use server"
  const message = formData.get("entry") as string;
  //const message = entry !== null ? entry.toString() : "";

  const data = await prisma.guestbook.create({
    data: {
      message: message,
      username: "hello",
    },
  });

  revalidatePath("/guestbook")
}
