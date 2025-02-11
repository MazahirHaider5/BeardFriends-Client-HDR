"use client";
import { useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/redux";

export default function Layout({
  children
}: Readonly<{ children: ReactNode }>) {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user.user?.id);
  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user, router]);

  return (
    <div className="h-screen flex justify-center items-center">{children}</div>
  );
}
