import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import "animate.css";
import { StoreProvider } from "@/providers/StoreProvider";
import LangProvider from "@/providers/LangProvider";
import { Toaster } from "react-hot-toast";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "700"]
});

export const metadata: Metadata = {
  title: "Beard Friends",
  description: "Beard Friends"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} antialiased text-white font-nunito`}>
        <StoreProvider>
          <LangProvider>{children}</LangProvider>
        </StoreProvider>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
