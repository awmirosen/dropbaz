"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { LuHouse, LuArrowLeft } from "react-icons/lu";
import { RiGithubLine } from "react-icons/ri";
import { VscColorMode } from "react-icons/vsc";
import ThemeBtn from "./themeBtn";
import "@/styles/dock.css";

const Dock = () => {
  const path = usePathname();
  const router = useRouter();

  const github = "https://github.com/awmirosen";

  const itemStyle =
    "item relative p-1.5 cursor-pointer hover:bg-stone-300/70 dark:hover:bg-stone-800/50 rounded-full transition-all duration-300";

  const labelStyle =
    "label text-sm absolute bottom-14 left-1/2 -translate-x-1/2 z-0";

  return (
    <nav className="absolute bottom-8 left-1/2 -translate-x-1/2 w-54 h-12 rounded-full flex items-center justify-around px-1 z-50 bg-stone-300/10 dark:bg-stone-900/40 border border-stone-400/60 dark:border-stone-800/60 transition-all duration-300">
      {/* Back */}
      {path !== "/" && (
        <div onClick={() => router.back()} className={itemStyle}>
          <LuArrowLeft size={22} />
          <label className={labelStyle}>Back</label>
        </div>
      )}

      {/* Home */}
      <Link href="/" className={itemStyle}>
        <LuHouse size={22} />
        <label className={labelStyle}>Home</label>
      </Link>

      {/* Border */}
      <div className="h-3/5 w-[0.1rem] bg-stone-800/30 dark:bg-stone-400/60 block" />
      {/* Border */}

      {/* Github */}
      <a href={github} target="_blank" className={itemStyle}>
        <RiGithubLine size={22} />
        <label className={labelStyle}>Github</label>
      </a>

      {/* Github */}
      <div className={`${itemStyle} flex items-center`}>
        <ThemeBtn>
          <VscColorMode size={20} />
        </ThemeBtn>
        <label className={labelStyle}>Theme</label>
      </div>
    </nav>
  );
};

export default Dock;
