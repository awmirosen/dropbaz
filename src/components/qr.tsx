"use client";

import QRCodeStyling from "qr-code-styling";
import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

type Props = {
  url: string;
};

export default function QR({ url }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const qrRef = useRef<QRCodeStyling | null>(null);

  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!containerRef.current) return;

    const isDark = resolvedTheme === "dark";

    if (!qrRef.current) {
      qrRef.current = new QRCodeStyling({
        width: 100,
        height: 100,
        data: url,

        image: isDark ? "/logo-dark.svg" : "/logo-light.svg",

        qrOptions: {
          errorCorrectionLevel: "H",
        },

        backgroundOptions: {
          color: "transparent",
        },

        dotsOptions: {
          type: "square",
          color: isDark ? "#ffffff" : "#231F20",
        },

        cornersSquareOptions: {
          type: "square",
          color: isDark ? "#ffffff" : "#231F20",
        },

        cornersDotOptions: {
          type: "square",
          color: isDark ? "#ffffff" : "#231F20",
        },

        imageOptions: {
          margin: 6,
          imageSize: 0.5,
          hideBackgroundDots: true,
        },
      });

      qrRef.current.append(containerRef.current);
    } else {
      qrRef.current.update({
        data: url,
        image: isDark ? "/logo-dark.svg" : "/logo-light.svg",

        dotsOptions: {
          color: isDark ? "#ffffff" : "#111827",
        },

        cornersSquareOptions: {
          color: isDark ? "#ffffff" : "#111827",
        },

        cornersDotOptions: {
          color: isDark ? "#ffffff" : "#111827",
        },
      });
    }
  }, [url, resolvedTheme]);

  return (
    <div
      ref={containerRef}
      className="mb-2 bg-background border-2 border-stone-800/80 dark:border-stone-200/80 rounded-xl"
    />
  );
}
