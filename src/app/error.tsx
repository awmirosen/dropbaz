"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
import { LuHouse } from "react-icons/lu";

export default function Error() {
  return (
    <section className="flex flex-col justify-center items-center mx-8">
      <h2 className="text-2xl my-1 select-none ">Something went wrong</h2>

      <Link href="/" className="text-lg">
        <Button size="lg">
          <LuHouse />
          Back Home
        </Button>
      </Link>
    </section>
  );
}
