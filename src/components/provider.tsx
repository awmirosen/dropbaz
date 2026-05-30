"use client";

import { ThemeProvider } from "next-themes";
import type { ChildrenType } from "@/types/global";

const Provider = ({ children }: ChildrenType) => {
  return (
    <ThemeProvider disableTransitionOnChange enableSystem attribute="class">
      {children}
    </ThemeProvider>
  );
};

export default Provider;
