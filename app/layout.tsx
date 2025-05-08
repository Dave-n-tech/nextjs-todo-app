import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import TopBar from "./components/Topbar";
import "./globals.css";
import Image from "next/image";
import circles from "../public/assets/shape.svg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Todo App",
  description: "Simple Todo app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-300`}
      >
        <main className="relative bg-color h-screen w-full md:w-96 mx-auto pt-12 md:pt-20 pb-14 md:pb-2 flex flex-col items-center justify-end">
          <div className="absolute top-0 left-0 z-20 md:-top-14"> 
            {/* w-full button-color pb-16 */}
            <Image
              src={circles}
              alt=""
              className=""
            />
          </div>
          <TopBar />
          {children}
        </main>
      </body>
    </html>
  );
}
