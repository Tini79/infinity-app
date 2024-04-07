import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const categories = [
  {
    name: "Tri Hita Karana Bracelets",
    path: "imgs/tri-hita-karana-bracelets.jpg",
    href: "/category"
  },
  {
    name: "Red String Bracelets",
    path: "imgs/red-string-bracelets.jpg",
    href: ""
  },
  {
    name: "Chipstone Bracelets",
    path: "imgs/chipstone-bracelets.jpg",
    href: ""
  }
]

const popularCategories = [
  {
    name: "Tri Hita Karana Bracelets",
    path: "imgs/tri-hita-karana-bracelets.jpg",
    href: ""
  },
  {
    name: "Red String Bracelets",
    path: "imgs/red-string-bracelets.jpg",
    href: ""
  },
  {
    name: "Chipstone Bracelets",
    path: "imgs/chipstone-bracelets.jpg",
    href: ""
  }
]

const testimonials = [
  {
    custName: "Ajeng",
    productCategory: "Tri Hita Karana Bracelets",
    testi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/imgs/carousel-1.jpg",
    href: "/"
  },
  {
    custName: "Bram",
    productCategory: "Red String Bracelets",
    testi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: "/imgs/carousel-2.jpg",
    href: "/"
  },
  {
    custName: "Charlotte",
    productCategory: "Tri Hita Karana Bracelets",
    testi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/imgs/carousel-1.jpg",
    href: "/"
  },
  {
    custName: "Charlotte",
    productCategory: "Tri Hita Karana Bracelets",
    testi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/imgs/carousel-1.jpg",
    href: "/"
  }
]

const contacts = [
  {
    icon: faPhone,
    href: "+62881038440302",
    value: "+62 881-0384-40302",
    isPhone: true
  },
  {
    icon: faEnvelope,
    href: "admin@infinityprittyjewellery.com",
    value: "admin@infinityprittyjewellery.com",
    isEmail: true
  },
  {
    icon: faWhatsapp,
    href: "https://wa.me/+62881038440302"
  },
  {
    icon: faInstagram,
    href: "https://www.instagram.com/infinityprittyjewellery"
  }
]

const navMenus = [
  {
    name: "Home",
    href: "/"
  },
  {
    name: "Categories",
    href: "/#productCategoriesSection"
  },
  {
    name: "Testimonials",
    href: "/#testimonialsSection"
  },
  {
    name: "Blog",
    href: "/"
  },
]

module.exports = {
  categories,
  popularCategories,
  testimonials,
  contacts,
  navMenus
}