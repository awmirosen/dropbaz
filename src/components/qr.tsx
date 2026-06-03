"use client";

import QRCodeStyling from "qr-code-styling";
import { useEffect, useRef } from "react";

type Props = {
  url: string;
};

export default function QR({ url }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const qrRef = useRef<QRCodeStyling | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    if (!qrRef.current) {
      qrRef.current = new QRCodeStyling({
        width: 100,
        height: 100,
        data: url,

        image: "/logo.svg",

        qrOptions: {
          errorCorrectionLevel: "H",
        },

        backgroundOptions: {
          color: "#e7e5e4",
          round: 0.2,
        },

        dotsOptions: {
          type: "square",
          color: "#111827",
        },

        cornersSquareOptions: {
          type: "square",
          color: "#111827",
        },

        cornersDotOptions: {
          type: "square",
          color: "#111827",
        },

        imageOptions: {
          margin: 1,
          imageSize: 0.5,
          hideBackgroundDots: true,
        },
      });

      qrRef.current.append(containerRef.current);
      return;
    }

    qrRef.current.update({
      data: url,
    });
  }, [url]);

  return (
    <div
      ref={containerRef}
      className="mb-2 border-2 border-stone-800/80 rounded-xl"
    />
  );
}
