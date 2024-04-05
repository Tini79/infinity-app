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
    { name: "The Balinese Charm", path: "/imgs/carousel-2.jpg", desc: "This charm embodies various Balinese values, such as strength, acceptance, reincarnation, balance, faith, appreciation, love, beauty, and wisdom.", href: "/category" },
    { name: "Color Beads, Gemnstones, Glass and Crystals", path: "/imgs/carousel-1.jpg", desc: "These materials are inspired by the relationship between humans. They represent the creative expressions and shared emotions that bring people together, creating something captivating to the eye.", href: "/category" },
    { name: "Color Beads, Gemnstones, Glass and Crystals", path: "/imgs/carousel-1.jpg", desc: "These materials are inspired by the relationship between humans. They represent the creative expressions and shared emotions that bring people together, creating something captivating to the eye.", href: "/category" },
    { name: "Color Beads, Gemnstones, Glass and Crystals", path: "/imgs/carousel-1.jpg", desc: "These materials are inspired by the relationship between humans. They represent the creative expressions and shared emotions that bring people together, creating something captivating to the eye.", href: "/category" }
  ]
  const [hidden, setHidden] = useState(true)
  // const [swipeTo, setSwipeTo]: any = useState(0)
  const displays: any = []
  // const imgWidth = document.getElementById("image0")?.offsetWidth

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
    // TODO: ada moment ketika load page lagi, malah dibawa ke footer
    <>
      <div className="lg:mb-6 sm:mb-[18px] mb-3">
        <span className={`${crimsonText.className} lg:text-[32px] sm:text-[30px] text-[28px] !font-bold`}>{title}</span>
      </div>
      <div className={clsx("mx-auto", { "carousel-container relative overflow-y-hidden": isCategory || isProduct || isAllProducts, "xl:h-[274px] lg:h-[284px] md:h-[220px] xs:h-[324px] h-[214px]": isCategory, "xl:h-[368px] lg:h-[368px] md:h-[308px] sm:h-[344px] xs:h-[274px] h-[254px]": isProduct, "xl:h-[137px] md:h-[142px] xs:h-[162px] h-[117px]": isAllProducts })}>
        <div className={clsx({ "absolute flex h-full": isCategory || isProduct || isAllProducts, "md:gap-4 gap-2": isCategory || isProduct, "grid lg:gap-[50px] sm:gap-[30px] xs:gap-[25px] gap-5 lg:grid-cols-3 grid-cols-2": !isCategory && !isProduct && !isAllProducts, "flex lg:gap-x-3 gap-x-1.5": isAllProducts })}>
          {images.map((image, i) => isCategory ? (
            <div key={i} id={`image${i}`} className="relative xl:w-[calc((100vw-112px)/3)] lg:w-[calc((100vw-96px)/2)] md:w-[calc((100vw-76px)/2)] sm:w-[calc((100vw-60px))] w-[calc((100vw-40px))] mx-auto" onMouseEnter={() => handleHover(i)} onMouseLeave={() => handleHover(null)}>
              <Link href={image.href}>
                <Image src={image.path} alt={image.path} width={388} height={274} className="w-full h-full object-cover" />
                <span className={clsx(`${crimsonText.className} absolute top-0 w-full h-full hover:bg-bs-fourth hover:bg-opacity-[56%] justify-center items-center !font-bold lg:text-lg sm:text-base text-sm text-white`, currDisplays[i])}>{image.name}</span>
              </Link>
            </div>
          ) : (isAllProducts ? (
            <div key={i} className="relative xl:w-[calc((100vw-128px)/5)] lg:w-[calc((100vw-116px)/4)] md:w-[calc((100vw-72px)/3)] xs:w-[calc((100vw-52px)/2)] w-[calc((100vw-46px)/2)]">
              <Link key={i} href={image.href}>
                <Image src={image.path} alt={image.path} width={272} height={248} className="w-full h-full object-cover" />
              </Link>
            </div>
          ) : (isProduct ? (
            <article key={i} className={clsx("xl:w-[calc((100vw-128px)/4)] lg:w-[calc((100vw-112px)/3)] md:w-[calc((100vw-92px)/3)] sm:w-[calc((100vw-66px)/2)] w-[calc((100vw-48px)/2)] lg:p-2 sm:p-1.5 p-1", productCardCls)}>
              <section className="relative h-full">
                {/* TODO: mungkin nanti untuk width dan height (semua image yg sifatnya statis) bisa disesuaikan lagi biar foto yg dihasilkan mak nyuss, atau pakai svg aja? */}
                <div className="md:h-1/2 xs:h-[55%] h-[48%] lg:mb-2 sm:mb-1.5 mb-1">
                  <Image src={image.path} alt={image.path} width={388} height={274} className="w-full h-full object-cover" />
                </div>
                <div className="lg:mb-4 sm:mb-3 mb-2">
                  <h4 className={`${crimsonText.className} lg:text-lg sm:text-base text-sm !leading-tight !font-bold lg:mb-3 sm:mb-[9px] mb-1.5`}>{image.name}</h4>
                  {/* TODO:  JANGAN DIHAPUS INI SPAN! nanti kondisikan jika ada diskon */}
                  {/* <s className="lg:text-[14px] sm:text-[12px] text-[10px] text-bs-fourth tracking-[1px] opacity-50">$222&nbsp;</s> */}
                  <span className="lg:text-[16px] sm:text-[14px] text-[12px] text-bs-fourth tracking-[1px]">$220</span>
                </div>
                <div className="absolute w-full bottom-0">
                  <Button btnType="btn-product" />
                </div>
              </section>
            </article>
          ) : (
            <div key={i} className="w-full mx-auto">
              <article>
                <section>
                  <Image src={image.path} alt={image.name} width={340} height={300} className="lg:mb-2 sm:mb-1.5 mb-1 w-full h-full" />
                  <div className="text-center">
                    <h4 className={`${crimsonText.className} lg:mb-2 sm:mb-1.5 mb-1`}>{image.name}</h4>
                    <p className="font-light lg:text-sm sm:text-xs text-[10px]">{image.desc}</p>
                  </div>
                </section>
              </article>
            </div>
          ))))}
        </div>
      </div>
      {/* <button type="button" onClick={() => slideTo(0)}>prev</button>
      <button type="button" onClick={() => slideTo(1)}>next</button> */}
    </>
  )
}