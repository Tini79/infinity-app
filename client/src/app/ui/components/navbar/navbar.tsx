"use client"
import Link from "next/link";
import Image from "next/image"
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavLinks from "./navlinks";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { contacts, navMenus } = require("@/app/lib/placeholder-data")
  const [logoSize, setLogoSize] = useState("md:w-full w-3/4")

  function handleLogoSize() {
    if (window.scrollY > 0) {
      setLogoSize("md:w-3/5 w-[97px]")
    } else {
      setLogoSize("md:w-full w-3/4")
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleLogoSize)

    return () => {
      window.removeEventListener("scroll", handleLogoSize)
    }
  }, [handleLogoSize])
  return (
    <header className="fixed w-full shadow-[0_1px_8px_2px_rgba(0,0,0,0.25)] z-10">
      <nav>
        <div className="bg-bs-primary--darker lg:py-3 sm:py-2 py-1.5 lg:px-10 sm:px-[30px] px-5 flex">
          {/* desktop, laptop, tablet */}
          <div className="hidden xl:flex flex-1">
            {contacts.map((contact: any, i: number) => i <= 1 && (
              <NavLinks key={i} icon={contact.icon} href={contact.href} isPhone={contact.isPhone} isEmail={contact.isEmail} val={contact.value} customCls="text-sm text-bs-secondary--lighter flex me-10  hover:text-bs-secondary--darker flex items-center" />
            ))}
          </div>
          <div className="hidden xl:flex flex-1 justify-end">
            {contacts.map((contact: any, i: number) => i > 1 && (
              <NavLinks key={i} icon={contact.icon} href={contact.href} customCls={clsx("text-sm text-bs-secondary--lighter hover:text-bs-secondary--darker flex items-center", { "me-10": i != 3 })} />
            ))}
          </div>
          {/* mobile */}
          <div className="xl:hidden flex flex-initial sm:w-1/2 w-2/3">
            {contacts.map((contact: any, i: number) => i < 1 && (
              <NavLinks key={i} icon={contact.icon} href={contact.href} isPhone={contact.isPhone} isEmail={contact.isEmail} val={contact.value} customCls="lg:text-sm sm:text-xs text-[10px] text-bs-secondary--lighter flex me-10  hover:text-bs-secondary--darker flex items-center" />
            ))}
          </div>
          <div className="xl:hidden flex flex-initial sm:w-1/2 w-1/3 justify-end">
            {contacts.map((contact: any, i: number) => i > 0 && (
              <NavLinks key={i} icon={contact.icon} href={contact.href} customCls={clsx("lg:text-sm sm:text-xs text-[10px] text-bs-secondary--lighter hover:text-bs-secondary--darker flex items-center", { "me-5": i != 3 })} />
            ))}
          </div>
        </div>
        {/* main navigation */}
        <div className="flex items-center lg:px-10 sm:px-[30px] px-5 lg:py-2 py-1 bg-white relative">
          {/* desktop, laptop, tablet */}
          <div className="hidden sm:flex items-center flex-1 lg:gap-10 gap-5">
            {navMenus.map((menu: any, i: number) => i <= 1 && (
              <Link
                key={i}
                href={menu.href}
                className="lg:text-base sm:text-sm text-bs-fourth hover:text-bs-third uppercase font-medium"
              >
                {menu.name}
              </Link>
            ))}
          </div>
          <Link href={navMenus[0].href} className="flex justify-center mx-auto">
            {/* TODO: mungkin ini logo bisa dibikinkyk web visesa */}
            {/* width={191} height={91} */}
            {/* TODO: bagusnya di laptoku: width={131} height={31} */}
            <Image id="navbarLogo" src="/imgs/brand-logo-darker.png" alt="Infinity Pritty Jewellery Logo" width={191} height={91} className={logoSize} />
          </Link>
          <div className="hidden sm:flex flex-1 justify-end items-center lg:gap-10 gap-5">
            {navMenus.map((menu: any, i: number) => i > 1 && (
              <Link
                key={i}
                href={menu.href}
                className="lg:text-base sm:text-sm text-bs-fourth hover:text-bs-third uppercase font-medium"
              >
                {menu.name}
              </Link>
            ))}
          </div>
          <div className="sm:hidden absolute right-5 ">
            <button>
              <FontAwesomeIcon icon={faBars} className="w-3.5 text-bs-fourth hover:text-bs-third"></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}