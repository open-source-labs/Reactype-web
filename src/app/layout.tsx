import "./index.css";
import { Inter } from "next/font/google";
// import type { Metadata } from "next";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "ReacType",
//   description: "A visual prototyping tool for React developers",
// };

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
