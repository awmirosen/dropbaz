"use client";

import Button from "@/components/ui/Button";
import { LuCopy, LuCheck } from "react-icons/lu";
import { useState } from "react";

type CopyButtonType = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  content: string;
  title?: string;
  doneTitle?: string;
  icon?: React.ReactNode;
  size?: "sm" | "md" | "lg" | "full";
};

const CopyButton = ({
  content,
  size = "md",
  title,
  doneTitle,
  icon = null,
}: CopyButtonType) => {
  const [copy, setCopy] = useState(false);

  const copyToClipboard = (content: string) => {
    navigator.clipboard.writeText(content.toString());
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 1000);
  };

  return (
    <Button
      onClick={() => copyToClipboard(content.toString())}
      disabled={copy}
      size={size}
    >
      {copy ? <LuCheck /> : icon}
      {title && copy ? doneTitle : title}
    </Button>
  );
};

export default CopyButton;
