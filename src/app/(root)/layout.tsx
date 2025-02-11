"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ReactNode } from "react";

export default function Layout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
