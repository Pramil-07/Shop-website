import type { Metadata } from "next";
import "./globals.css";
import {Jost} from "next/font/google";

const jost = Jost({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Sweet and Namkin shop",
  description: "Sweet  tasty and namkin desearts ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={jost.className}
      >
        {children}
      </body>
    </html>
  );
}
