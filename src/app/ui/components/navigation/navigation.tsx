"use client"
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer";

export default function Navigation({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname()
console.log(pathname);

  // useEffect(() => {
    if (pathname != "/auth") {
      return (
        <>
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
        </>
      );
    } else {
      return (
        <>
          {children}
        </>
      );
    }
  // }, [pathname])
}

