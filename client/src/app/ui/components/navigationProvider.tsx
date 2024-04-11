"use client"
import { usePathname } from "next/navigation";
import React, { createContext, useEffect, useState } from "react";
import Navbar from "./navbar/navbar";
import Footer from "./footer";
import { getLoginToken } from "@/app/lib/config";

export const NavigationContext = createContext('/')
export default function NavigationProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [token, setToken] = useState<string | null>(null)

  // useEffect(() => {
  if (pathname !== "/login" && pathname !== "/registration") {
    return (
      <>
        <NavigationContext.Provider value={pathname}>
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
        </NavigationContext.Provider>
      </>
    );
  } else {
    return (
      <>
        <NavigationContext.Provider value={pathname}>
          {children}
        </NavigationContext.Provider>
      </>
    );
  }
  // }, [pathname])
}

