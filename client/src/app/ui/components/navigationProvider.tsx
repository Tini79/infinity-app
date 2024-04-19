"use client"
import { usePathname } from "next/navigation";
import React, { createContext, useEffect, useState } from "react";
import Navbar from "./navbar/navbar";
import Footer from "./footer";
import { getLoginToken } from "@/app/lib/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

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
          <div className="sticky flex items-center justify-center bg-white lg:bottom-4 sm:bottom-3 bottom-2 p-2 box-content lg:left-4 sm:left-3 left-2  w-10 h-10 rounded-full z-10 shadow-[0_1px_8px_1px_rgba(0,0,0,0.25)]">
            <Link href="https://wa.me/+62881038440302" className="">
              <FontAwesomeIcon icon={faWhatsapp} className="text-4xl text-bs-fourth hover:text-bs-third"></FontAwesomeIcon>
            </Link>
          </div>
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

