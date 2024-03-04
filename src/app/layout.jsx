import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HackTheSys",
  description: "Omran Alshehabi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />  
        {children}
        </body>
    </html>
  );
}
