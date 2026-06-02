import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import Provider from "@/components/provider";
import Dock from "@/components/dock/dock";
import Header from "@/components/header";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Dropbaz",
  description: "online simple clipboard app",
};

const vazir = Vazirmatn({ subsets: ["arabic", "latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={vazir.className} suppressHydrationWarning>
      <body className="w-full h-full bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100">
        <Provider>
          <main className="max-w-3xl p-2 max-md:max-w-sm max-md:px-0.5 mx-auto">
            <Header />
            {children}
            <Dock />
          </main>
        </Provider>
      </body>
    </html>
  );
}
