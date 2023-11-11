import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LinkChar challenge",
  description: "Social app - LinkChar challenge - by Nicolas Soroka",
};

export default function RootLayout({
  children,
  upload,
}: {
  children: React.ReactNode;
  upload: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-screen bg-black`}>
        <Providers>
          {children}
          {upload}
        </Providers>
      </body>
    </html>
  );
}
