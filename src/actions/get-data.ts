import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

export const GetClipboardData = async (code: string) => {
  try {
    const numCode = Number(code);

    if (!numCode) return notFound();

    const data = await prisma.clipboard.findUnique({
      where: { code: numCode },
    });

    if (!data) return notFound();

    return data;
  } catch (err) {
    console.log(err);
    return notFound();
  }
};
