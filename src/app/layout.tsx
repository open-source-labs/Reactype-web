import "./index.css";
import { Inter } from "next/font/google";
// import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Transition from "./components/Transition";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="w-full">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
