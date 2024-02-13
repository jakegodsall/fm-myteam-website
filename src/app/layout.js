import { Livvic } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const livvic = Livvic({ subsets: ["latin"], weight: ["500", "600", "700"] });

export const metadata = {
  title: "myteam",
  description: "myteam multi-page website build with Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={livvic.className}>
        <div className="mx-[2.4rem] mb-[8rem] mt-[4.8rem] sm:mb-[12rem]">
          <Header />
        </div>
        {children}
      </body>
    </html>
  );
}
