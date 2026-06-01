"use client";

import { useTheme } from "next-themes";
import { ChildrenType } from "@/types/global";

const ThemeBtn = ({ children }: ChildrenType) => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="cursor-pointer"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {children}
    </button>
  );
};

export default ThemeBtn;
