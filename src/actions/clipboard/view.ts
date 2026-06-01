"use server";

import { prisma } from "@/lib/prisma";
import { notFound, redirect } from "next/navigation";

export const ViewClipboard = async (code: string) => {
  if (!code) return;

  const numCode = Number(code);

  const data = await prisma.clipboard.findUnique({
    where: { code: numCode },
  });

  if (!data) return notFound();

  redirect(`/${code}`);
};
