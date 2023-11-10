import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "./redux/features/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LinkChar challenge",
  description: "Social app for LinkChar challenge - by Nicolas Soroka",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-screen bg-black flex flex-col`}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
