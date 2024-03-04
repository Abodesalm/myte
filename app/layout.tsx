import type { Metadata } from "next";
import "../public/css/globals.css";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import ToUp from "@/components/ToUp";

export const metadata: Metadata = {
  title: "Myte Team",
  description: "مؤسسة إلكترونية تقدم العديد من الخدمات المتنوعة على الإنترنت من قبل العديد من المختصين",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <body className="text-black dark:text-white bg-[url('../images/darkbg.jpg')] transition-bg duration-300">
        <Navbar/>
        {children}
        <Footer/>
        <ToUp/>
      </body>
    </html>
  );
}

