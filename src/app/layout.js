import clsx from "clsx";
import { Livvic } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";

const livvic = Livvic({ subsets: ["latin"], weight: ["500", "600", "700"] });

export const metadata = {
  title: "myteam",
  description: "myteam multi-page website build with Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          livvic.className,
          "flex flex-col items-center bg-secondary-green-darkest",
        )}
      >
        <div className="w-full max-w-[180rem] bg-secondary-green-dark">
          <div className="w-full bg-primary-teal px-[2.4rem] pb-[8rem] pt-[4.8rem] sm:px-[3rem] sm:pb-[12rem]">
            <Header />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
