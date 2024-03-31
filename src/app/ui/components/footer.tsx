import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const categories = [
    { name: "Tri Hita Karana Bracelets", href: "/" },
  ]

  const navMenus = [
    { name: "About Us", href: "/#aboutUs" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Blog", href: "/" },
  ]

  const contacts = [
    { icon: faEnvelope, href: "admin@infinityprittyjewellery.com", value: "admin@infinityprittyjewellery.com", isEmail: true },
    { icon: faInstagram, href: "https://www.instagram.com/infinityprittyjewellery", value: "infinityprittyjewellery" },
    { icon: faWhatsapp, href: "https://wa.me/+62881038440302", value: "+62 881-0384-40302" },
    { icon: faPhone, href: "+62881038440302", value: "+62 881-0384-40302", isPhone: true }
  ]

  return (
    <>
      {/* TODO: inget tambahkan garis bawah pada setiap span di sini, klo bisa pakai underline untuk atur mb biar sesuai design, that's good! */}
      <footer className="text-bs-secondary--lighter mt-10">
        <nav className="bg-bs-primary flex py-[120px] px-10">
          <div className="flex-initial w-2/6">
            {/* TODO: di laptop gw:  width={232} height={83} */}
            <Image src="/imgs/brand-logo.png" alt="Infinity Pritty Jewellery Logo" width={282} height={133}></Image>
          </div>
          <div className="flex-initial w-4/6 flex gap-10">
            <div className="flex-initial w-2/5">
              <span className="!font-bold uppercase">Categories</span>
              <ul>
                {categories.map((category, index) => (
                  <li><Link key={index} href={category.href} className="mb-2 hover:text-bs-secondary--darker">{category.name}</Link></li>
                ))
                }
              </ul>
            </div>
            <div className="flex-initial w-1/5">
              <span className="!font-bold uppercase">Navigation</span>
              <ul>
                {navMenus.map((menu, index) => (
                  <li><Link key={index} href={menu.href} className="mb-2 hover:text-bs-secondary--darker">{menu.name}</Link></li>
                ))}
              </ul>
            </div>
            <div className="flex-initial w-2/5">
              <span className="!font-bold uppercase">Contacts</span>
              <ul>
                {contacts.map((contact, index) => (
                  <li>
                    <Link key={index} href={`${contact.isEmail ? "mailto:" + contact.href : contact.isPhone ? "tel:" + contact.href : contact.href}`} className="flex mb-2 hover:text-bs-secondary--darker">
                      <FontAwesomeIcon icon={contact.icon} className="me-2 w-3.5"></FontAwesomeIcon>
                      {contact.value}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
        <div className="bg-bs-primary--darker text-center py-1">
          <span className="text-sm">&copy; 2024️ <Link href="/" className="hover:text-bs-secondary--darker">Infinity Pritty Jewellery</Link>. All rights reserved</span>
        </div>
      </footer>
    </>
  )
}