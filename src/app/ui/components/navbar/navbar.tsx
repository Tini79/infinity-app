import Link from "next/link";
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

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
        {/* TODO: di laptop gw py-2 bagusnya */}
        <div className="bg-bs-primary--darker py-4 px-10 flex">
          <div className="flex flex-1">
            {contacts.map((contact, index) => index <= 1 && (
              <Link
                key={index}
                href={`${contact.isPhone && "tel:" + contact.href || contact.isEmail && "mailto:" + contact.href
                  || contact.href}`}
                className="text-sm text-bs-secondary--lighter flex me-10  hover:text-bs-secondary--darker">
                <FontAwesomeIcon icon={contact.icon} className="me-2 w-3.5"></FontAwesomeIcon>
                <span>{contact.value && contact.value}</span>
              </Link>
            ))}
          </div>
          <div className="flex flex-1 justify-end">
            {/* <div className="flex"> */}
            {contacts.map((contact, index) => index > 1 && (
              <Link
                key={index}
                href={contact.href}
                className="text-sm text-bs-secondary--lighter me-10 hover:text-bs-secondary--darker">
                <FontAwesomeIcon icon={contact.icon} className="w-3.5"></FontAwesomeIcon>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex px-10 py-2 bg-white">
          <div className="flex items-center flex-1 gap-10">
            {navMenus.map((menu, index) => index <= 1 && (
              <Link
                key={index}
                href={menu.href}
                className="text-bs-fourth hover:text-bs-third uppercase font-medium"
              >
                {menu.name}
              </Link>
            ))}
          </div>
          <Link href={navMenus[0].href}>
            {/* TODO: mungkin ini logo bisa dibikinkyk web visesa */}
            {/* width={191} height={91} */}
            {/* TODO: bagusnya di laptoku: width={131} height={31} */}
            <Image src="/imgs/logo.png" alt="Infinity Pritty Jewellery Logo" width={191} height={91} />
          </Link>
          <div className="flex flex-1 justify-end items-center gap-10">
            {navMenus.map((menu, index) => index > 1 && (
              <Link
                key={index}
                href={menu.href}
                className="text-bs-fourth hover:text-bs-third uppercase font-medium"
              >
                {menu.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}