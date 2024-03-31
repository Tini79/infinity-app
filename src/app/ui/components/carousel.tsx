"use client"
import Image from "next/image"
import { crimsonText } from "../fonts"
import Link from "next/link"
import { useState } from "react"
import clsx from "clsx"
import Button from "./button"

interface CarouselProps {
  title?: string,
  isCategory?: boolean,
  isProduct?: boolean,
  isAllProducts?: boolean,
  productCardCls?: string
}

export default function Carousel({ title, isCategory = false, isProduct = false, isAllProducts = false, productCardCls = "" }: CarouselProps) {
  // TODO nanti untuk desc dan href boleh null DAN MUNGKIN UNTUK TIPE DATANYA BISA DIBIKININI INTERFACE
  const images = [
    { name: "Sandalwood", path: "/imgs/carousel-1.jpg", desc: "We choose sandalwood because it has become a spiritual wood in Bali. In some ceremonies, sandalwood is used to symbolize the relationship between humans, nature, and the environment (balance of nature).", href: "/category" },
    { name: "The Balinese Charm", path: "/imgs/carousel-1.jpg", desc: "This charm embodies various Balinese values, such as strength, acceptance, reincarnation, balance, faith, appreciation, love, beauty, and wisdom.", href: "/category" },
    { name: "Color Beads, Gemnstones, Glass and Crystals", path: "/imgs/carousel-1.jpg", desc: "These materials are inspired by the relationship between humans. They represent the creative expressions and shared emotions that bring people together, creating something captivating to the eye.", href: "/category" },
  ]
  const [hidden, setHidden] = useState(true)
  const displays: any = []
  // TODO: coba pelajari cara pakai life cycle
  for (let i = 0; i < images.length; i++) {
    displays.push("hidden")
  }
  const [currDisplays, setCurrDisplays]: any = useState(displays)

  function handleHover(index?: any) {
    setHidden(!hidden)
    displays[index] = "flex"
    setCurrDisplays(displays)
  }

  return (
    <>
        <div className="mb-6">
          <span className={`${crimsonText.className} text-[32px] !font-bold`}>{title}</span>
        </div>
      <div className={clsx("flex", { "gap-4": isCategory, "gap-[26px]": isProduct, "gap-[50px]": !isCategory && !isProduct, "gap-3": isAllProducts })}>
        {images.map((image, i) => isCategory ? (
          <div className="relative" onMouseEnter={() => handleHover(i)} onMouseLeave={() => handleHover(null)}>
            <Link key={i} href={image.href}>
              {/* TODO: width={388} height={327} */}
              <Image src={image.path} alt={image.path} width={388} height={274} className="w-[388px] h-[274px] object-cover" />
              <span className={clsx(`${crimsonText.className} absolute top-0 w-full h-full hover:bg-bs-fourth hover:bg-opacity-[56%] justify-center items-center !font-bold text-lg text-white`, currDisplays[i])}>{image.name}</span>
            </Link>
          </div>
        ) : (isAllProducts ? (
          <div>
            <Link key={i} href={image.href}>
              {/*  width={272} height={248}  */}
              <Image src={image.path} alt={image.path} width={272} height={248} className="w-[272px] h-[248px] object-cover" />
            </Link>
          </div>
        ) : (isProduct ? (
          // TODO: liat di atas btn-product
          <div className={clsx(productCardCls)}>
            <article key={i}>
              <section>
                <Image src={image.path} alt={image.path} width={100} height={329} className="w-full h-[329px] object-cover mb-2" />
                <div className="mb-4">
                  <h4 className={`${crimsonText.className} text-2xl !font-bold mb-4`}>{image.name}</h4>
                  <span>$222</span>
                </div>
                {/* TODO: bikin biar button paling bawah diam */}
                <Button btnType="btn-product" />
              </section>
            </article>
          </div>
        ) : (
          <div className="flex-1">
            <article key={i}>
              <section>
                <Image src={image.path} alt={image.name} width={340} height={300} className="mb-2 w-full h-full" />
                <div className="text-center">
                  <h4 className={`${crimsonText.className} mb-2`}>{image.name}</h4>
                  <p className="font-light text-sm">{image.desc}</p>
                </div>
              </section>
            </article>
          </div>
        ))))}
      </div >
    </>
  )
}