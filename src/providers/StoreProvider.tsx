"use client";
import { Provider } from "react-redux";
import store from "@/redux";
import { useState, useEffect } from "react";

export function StoreProvider({
  children
}: Readonly<{ children: React.ReactNode }>) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <Provider store={store}>{children}</Provider>;
}
