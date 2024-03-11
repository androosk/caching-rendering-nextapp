import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { classNames } from "@/functions/classnames";
import Navbar from "@/components/navBar";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Caching and Rendering - Next JS 14",
  description:
    "Caching and rendering in Client and Server side using the Pexels API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={classNames(
          montserrat.className,
          "flex flex-col min-h-screen"
        )}
      >
        <Navbar />
        <main className="flex flex-col flex-grow mt-24">{children}</main>
      </body>
    </html>
  );
}
