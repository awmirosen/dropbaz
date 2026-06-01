"use server";

import { prisma } from "@/lib/prisma";
import { maxChar } from "@/components/form/add-form";
import { redirect } from "next/navigation";

export const AddToClipboard = async (formData: FormData) => {
  const content = await formData.get("content")?.toString();

  if (!content || content?.length > maxChar) return;
  if (!prisma.clipboard) return;

  // Generateunique code
  const generateCode = async (): Promise<number> => {
    const code = Math.floor(10000 + Math.random() * 90000);

    const found = await prisma.clipboard.findUnique({
      where: { code },
    });
    if (!found) return code;

    return generateCode();
  };

  const code: number = await generateCode();

  await prisma.clipboard.create({
    data: {
      content,
      code,
    },
  });

  redirect(`/${code}`);
};
