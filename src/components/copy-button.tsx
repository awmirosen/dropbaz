"use client";

import Button from "@/components/ui/Button";
import { LuCopy, LuCopyCheck } from "react-icons/lu";
import { useState } from "react";

type CopyButtonType = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  content: string;
  title?: string;
  doneTitle?: string;
  size?: "sm" | "md" | "lg" | "full";
};

const CopyButton = ({
  content,
  size = "md",
  title,
  doneTitle,
}: CopyButtonType) => {
  const [copy, setCopy] = useState(false);

  const copyToClipboard = (content: string) => {
    navigator.clipboard.writeText(content.toString());
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 2000);
  };

  return (
    <Button
      onClick={() => copyToClipboard(content.toString())}
      disabled={copy}
      variant="secondary"
      size={size}
    >
      {copy ? <LuCopyCheck /> : <LuCopy />}
      {title && copy ? doneTitle : title}
    </Button>
  );
};

export default CopyButton;
