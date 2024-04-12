"use client"
import Link from "next/link";
import Image from "next/image"
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import NavLinks from "./navlinks";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { contacts, navMenus } = require("@/app/lib/placeholder-data")
  const [logoSize, setLogoSize] = useState("lg:w-[191px] md:w-full w-3/4")

  function handleLogoSize() {
    if (window.scrollY > 0) {
      setLogoSize("md:w-3/5 w-[97px]")
    } else {
      setLogoSize("lg:w-[191px] md:w-full w-3/4")
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleLogoSize)

    return () => {
      window.removeEventListener("scroll", handleLogoSize)
    }
  }, [handleLogoSize])

  const toggleSideMenu = (() => {
    const aside = document.getElementById("aside")
    aside?.classList.toggle("-left-full")
    aside?.classList.toggle("left-0")
  })

  return (
    <>
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
              <button onClick={toggleSideMenu}>
                <FontAwesomeIcon icon={faBars} className="w-3.5 text-bs-fourth hover:text-bs-third"></FontAwesomeIcon>
              </button>
            </div>
          </div>
        </nav>
      </header>
      <aside id="aside" className="bg-bs-primary--darker p-5 w-full h-full fixed overflow-hidden z-10 sm:hidden -left-full">
        <div className="flex justify-end">
          <button onClick={toggleSideMenu}>
            <FontAwesomeIcon icon={faClose} className="w-3.5 text-bs-secondary--lighter hover:text-bs-secondary--darker" />
          </button>
        </div>
        <div>
          <Image onClick={toggleSideMenu} id="sidebarLogo" src="/imgs/brand-logo.png" alt="Infinity Pritty Jewellery Logo" width={199} height={99} className="mx-auto mt-10 mb-16 w-[199px]" />
          <div>
            <ul className="text-center">
              {navMenus.map((menu: any, i: number) => (
                <li key={i} className="mb-7">
                  <Link onClick={toggleSideMenu}
                  key={i}
                  href={menu.href}
                  className="text-2xl text-bs-secondary--lighter hover:text-bs-secondary--darker uppercase font-medium"
                  >
                  {menu.name}
                </Link>
                </li>
              ))}
          </ul>
        </div>
        <div className="absolute inset-x-5 flex justify-center bottom-5">
          <div>
            <ul className="flex justify-center gap-5">
              {contacts.map((contact: any, i: number) => (
                <li key={i}>
                  {/* // <NavLinks key={i} icon={contact.icon} href={contact.href} customCls={clsx("text-sm text-bs-secondary--lighter hover:text-bs-secondary--darker flex items-center", { "me-10": i != 3 })} /> */}
                  <Link onClick={toggleSideMenu} key={i} href={contact.href}>
                    <FontAwesomeIcon icon={contact.icon} className="text-bs-secondary--lighter hover:text-bs-secondary--darker w-5 h-5"></FontAwesomeIcon>
                  </Link>
                </li>
              ))}
            </ul>
            <span className="font-light text-[10px] text-bs-secondary--lighter">&copy; 2024️ <Link onClick={toggleSideMenu} href="/" className="hover:text-bs-secondary--darker">Infinity Pritty Jewellery</Link>. All rights reserved</span>
          </div>
        </div>
      </div>
    </aside >
    </>
  )
}