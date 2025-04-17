"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export const saveSnippet = async (id: number, code: string) => {
  await prisma.snippets.update({
    where: {
      id,
    },
    data: {
      code: code,
    },
  });

  redirect(`/snippets/${id}`);
};

export const deleteSnippet = async (id: number) => {
  await prisma.snippets.delete({
    where: {
      id,
    },
  });

  redirect(`/`);
};

export async function createSnippet(
  prevData: { message: string },
  formData: FormData
) {
  const title = formData?.get("title");
  const description = formData?.get("description");
  const code = formData?.get("code");

  if (typeof title !== "string" || title.length < 4)
    return { message: "title is required" };
  if (typeof description !== "string" || description.length < 5)
    return { message: "description is required" };
  if (typeof code !== "string" || code.length < 7)
    return { message: "code is required" };

  const snippets = await prisma.snippets.create({
    data: {
      title,
      description,
      code,
    },
  });

  console.log("snippet generated", snippets);

  redirect("/");
}
