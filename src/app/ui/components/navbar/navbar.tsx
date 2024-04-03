import Link from "next/link";
import Image from "next/image"
import { faBars, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import NavLinks from "./navlinks";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  const contacts = [
    { icon: faPhone, href: "+62881038440302", value: "+62 881-0384-40302", isPhone: true },
    { icon: faEnvelope, href: "admin@infinityprittyjewellery.com", value: "admin@infinityprittyjewellery.com", isEmail: true },
    { icon: faWhatsapp, href: "https://wa.me/+62881038440302" },
    { icon: faInstagram, href: "https://www.instagram.com/infinityprittyjewellery" }
  ]

  const navMenus = [
    { name: "Home", href: "/" },
    { name: "Categories", href: "/#productCategoriesSection" },
    { name: "Testimonials", href: "/#testimonialsSection" },
    { name: "Blog", href: "/" },
  ]

  return (
    <header className="fixed w-full shadow-[0_1px_8px_2px_rgba(0,0,0,0.25)] z-10">
      <nav>
        <div className="bg-bs-primary--darker lg:py-3 sm:py-2 py-1.5 lg:px-10 sm:px-[30px] px-5 flex">
          {/* desktop, laptop, tablet */}
          <div className="hidden xl:flex flex-1">
            {contacts.map((contact, index) => index <= 1 && (
              <NavLinks key={index} icon={contact.icon} href={contact.href} isPhone={contact.isPhone} isEmail={contact.isEmail} val={contact.value} customCls="text-sm text-bs-secondary--lighter flex me-10  hover:text-bs-secondary--darker flex items-center" />
            ))}
          </div>
          <div className="hidden xl:flex flex-1 justify-end">
            {contacts.map((contact, index) => index > 1 && (
              <NavLinks key={index} icon={contact.icon} href={contact.href} customCls={clsx("text-sm text-bs-secondary--lighter hover:text-bs-secondary--darker flex items-center", { "me-10": index != 3 })} />
            ))}
          </div>
          {/* mobile */}
          <div className="xl:hidden flex flex-initial sm:w-1/2 w-2/3">
            {contacts.map((contact, index) => index < 1 && (
              <NavLinks key={index} icon={contact.icon} href={contact.href} isPhone={contact.isPhone} isEmail={contact.isEmail} val={contact.value} customCls="lg:text-sm sm:text-xs text-[10px] text-bs-secondary--lighter flex me-10  hover:text-bs-secondary--darker flex items-center" />
            ))}
          </div>
          <div className="xl:hidden flex flex-initial sm:w-1/2 w-1/3 justify-end">
            {contacts.map((contact, index) => index > 0 && (
              <NavLinks key={index} icon={contact.icon} href={contact.href} customCls={clsx("lg:text-sm sm:text-xs text-[10px] text-bs-secondary--lighter hover:text-bs-secondary--darker flex items-center", { "me-5": index != 3 })} />
            ))}
          </div>
        </div>
        {/* main navigation */}
        <div className="flex lg:px-10 sm:px-[30px] px-5 lg:py-2 py-1 bg-white">
          {/* desktop, laptop, tablet */}
          <div className="hidden sm:flex items-center flex-1 lg:gap-10 gap-5">
            {navMenus.map((menu, index) => index <= 1 && (
              <Link
                key={index}
                href={menu.href}
                className="lg:text-base sm:text-sm text-bs-fourth hover:text-bs-third uppercase font-medium"
              >
                {menu.name}
              </Link>
            ))}
          </div>
          <Link href={navMenus[0].href} className="mx-auto">
            {/* TODO: mungkin ini logo bisa dibikinkyk web visesa */}
            {/* width={191} height={91} */}
            {/* TODO: bagusnya di laptoku: width={131} height={31} */}
            <Image src="/imgs/logo.png" alt="Infinity Pritty Jewellery Logo" width={191} height={91} className="xl:w-[191px] sm:w-[141px] w-[97px] xl:h-[91px] sm:h-[67px] h-[46px]" />
          </Link>
          <div className="hidden sm:flex flex-1 justify-end items-center lg:gap-10 gap-5">
            {navMenus.map((menu, index) => index > 1 && (
              <Link
                key={index}
                href={menu.href}
                className="lg:text-base sm:text-sm text-bs-fourth hover:text-bs-third uppercase font-medium"
              >
                {menu.name}
              </Link>
            ))}
          </div>
          <div className="sm:hidden flex justify-end">
            <button>
              <FontAwesomeIcon icon={faBars} className="w-3.5 text-bs-fourth hover:text-bs-third"></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}