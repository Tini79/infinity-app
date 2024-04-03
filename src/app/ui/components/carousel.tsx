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

  // function slideTo(imgIndex: number) {
  //   console.log('kkkkk');

  //   if (imgWidth) {
  //     console.log(imgWidth, 'hah');

  //     setSwipeTo(imgIndex == 1 ? swipeTo - imgWidth : swipeTo + imgWidth)
  //   }
  // }

  return (
    <>
      <div className="lg:mb-6 sm:mb-[18px] mb-3">
        <span className={`${crimsonText.className} lg:text-[32px] sm:text-[30px] text-[28px] !font-bold`}>{title}</span>
      </div>
      {/* lg:grid-cols-3 xs:grid-cols-2 */}
      {/* lg:px-20 px-10 */}
      <div className="carousel-container relative overflow-y-hidden mx-auto xl:h-[274px] md:h-[284px] xs:h-[324px] h-[234px]">
        {/* <div className={`absolute w-[300px]`}> */}
        {/*  lg:gap-4 gap-2: isCategory || isProduct */}
        <div className={clsx("absolute flex", { "md:gap-4 gap-2": isCategory || isProduct, "xs:grid lg:gap-[50px] sm:gap-[30px] gap-[25px] lg:grid-cols-3 xs:grid-cols-2": !isCategory && !isProduct && !isAllProducts, "grid lg:gap-x-3 gap-x-1.5 lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-4 grid-cols-2": isAllProducts })}>
          {/* relative xs:w-full w-5/6 mx-auto */}
          {images.map((image, i) => isCategory ? (
            <div key={i} id={`image${i}`} className="relative flex-1 xl:w-[calc((100vw-112px)/3)] lg:w-[calc((100vw-96px)/2)] md:w-[calc((100vw-76px)/2)] sm:w-[calc((100vw-60px))] w-[calc((100vw-40px))] mx-auto" onMouseEnter={() => handleHover(i)} onMouseLeave={() => handleHover(null)}>
              <Link href={image.href}>
                {/* TODO: width={388} height={327} */}
                <Image src={image.path} alt={image.path} width={388} height={274} className="w-full h-full object-cover" />
                <span className={clsx(`${crimsonText.className} absolute top-0 w-full h-full hover:bg-bs-fourth hover:bg-opacity-[56%] justify-center items-center !font-bold lg:text-lg sm:text-base text-sm text-white`, currDisplays[i])}>{image.name}</span>
              </Link>
            </div>
          ) : (isAllProducts ? (
            <div>
              <Link key={i} href={image.href}>
                {/*  width={272} height={248}  */}
                <Image src={image.path} alt={image.path} width={272} height={248} className="w-full h-full object-cover" />
              </Link>
            </div>
          ) : (isProduct ? (
            // TODO: liat di a\tas btn-product
            <div className={clsx("xs:w-full w-5/6 mx-auto lg:p-2 sm:p-1.5 p-1", productCardCls)}>
              <article key={i}>
                <section>
                  <Image src={image.path} alt={image.path} width={100} height={329} className="w-full h-4/5 object-cover lg:mb-2 sm:mb-1.5 mb-1" />
                  <div className="lg:mb-4 sm:mb-3 mb-2">
                    <h4 className={`${crimsonText.className} lg:text-[24px] sm:text-[22px] text-[20px] !font-bold lg:mb-4 sm:mb-3 mb-2`}>{image.name}</h4>
                    <span>$222</span>
                  </div>
                  {/* TODO: bikin biar button paling bawah diam */}
                  <Button btnType="btn-product" />
                </section>
              </article>
            </div>
          ) : (
            <div className="xs:w-full w-5/6 mx-auto">
              <article key={i}>
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
        {/* </div> */}
      </div>
      {/* <button type="button" onClick={() => slideTo(0)}>prev</button>
      <button type="button" onClick={() => slideTo(1)}>next</button> */}
    </>
  )
}