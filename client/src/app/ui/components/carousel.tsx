"use client"
import Image from "next/image"
import { crimsonText } from "../fonts"
import Link from "next/link"
import { useContext, useEffect, useState } from "react"
import clsx from "clsx"
import Button from "./button"
import { NavigationContext } from "./navigationProvider"
import { getLoginToken } from "@/app/lib/config"

interface CarouselProps {
  // TODO: data jangan dikasih null nanti
  title?: string,
  data?: any,
  isCategory?: boolean,
  isProduct?: boolean,
  isAllProducts?: boolean,
  isAllCategories?: boolean,
  productCardCls?: string,
  isAuth?: boolean,
  token?: any
}

export default function Carousel({ title, data, isCategory = false, isProduct = false, isAllProducts = false, isAllCategories = false, productCardCls = "", isAuth = false, token = null }: CarouselProps) {
  // TODO nanti untuk desc dan href boleh null DAN MUNGKIN UNTUK TIPE DATANYA BISA DIBIKININI INTERFACE  
  const displays: any = []
  // TODO: coba pelajari cara pakai life cycle
  for (let i = 0; i < data.length; i++) {
    displays.push("hidden")
  }
  const [currDisplays, setCurrDisplays]: any = useState(displays)
  function handleHover(index?: any) {
    displays[index] = "flex"
    setCurrDisplays(displays)
  }

  return (
    // TODO: ada moment ketika load page lagi, malah dibawa ke footer
    <>
      <div className="lg:mb-6 sm:mb-[18px] mb-3">
        <span className={`${crimsonText.className} lg:text-[32px] sm:text-[30px] text-[28px] !font-bold`}>{title}</span>
      </div>
      {/* TODO nah tambahin nih */}
      <div className={clsx("mx-auto", { " overflow-x-hidden": isCategory || isProduct || isAllProducts, "overflow-x-scroll": isAllCategories, "carousel-container relative": isCategory || isProduct || isAllProducts || isAllCategories, "xl:h-[274px] lg:h-[284px] md:h-[220px] xs:h-[324px] h-[214px]": isCategory, "xl:h-[368px] lg:h-[368px] md:h-[308px] sm:h-[344px] xs:h-[274px] h-[254px]": isProduct, "xl:h-[137px] md:h-[142px] xs:h-[162px] h-[117px]": isAllProducts, "xl:h-[338px] lg:h-[300px] md:h-[250px] sm:h-[188px] xs:h-[316px] h-[200px] lg:mt-10 sm:mt-[30px] mt-5": isAllCategories })}>
        <div className={clsx({ "absolute flex h-full": isCategory || isProduct || isAllProducts || isAllCategories, "md:gap-4 gap-2": isCategory || isProduct, "grid lg:gap-[50px] sm:gap-[30px] xs:gap-[25px] gap-5 lg:grid-cols-3 grid-cols-2": !isCategory && !isProduct && !isAllProducts && !isAllCategories, "flex lg:gap-x-3 gap-x-1.5": isAllProducts, "md:gap-5 gap-2.5": isAllCategories })}>
          {data.map((image: any, i: number) => isCategory ? (
            <div key={i} id={`image${i}`} className="relative xl:w-[calc((100vw-112px)/3)] lg:w-[calc((100vw-96px)/2)] md:w-[calc((100vw-76px)/2)] sm:w-[calc((100vw-60px))] w-[calc((100vw-40px))] mx-auto" onMouseEnter={() => handleHover(i)} onMouseLeave={() => handleHover(null)}>
              <Link href={`category/${image.href}`}>
                <Image src={`/${image.path}`} alt={image.name} width={388} height={274} className="w-full h-full object-cover" />
                <span className={clsx(`${crimsonText.className} absolute top-0 w-full h-full hover:bg-bs-fourth hover:bg-opacity-[56%] justify-center items-center !font-bold lg:text-lg sm:text-base text-sm text-white`, currDisplays[i])}>{image.name}</span>
              </Link>
            </div>
          ) : (isAllProducts ? (
            <div key={i} className="relative xl:w-[calc((100vw-128px)/5)] lg:w-[calc((100vw-116px)/4)] md:w-[calc((100vw-72px)/3)] xs:w-[calc((100vw-52px)/2)] w-[calc((100vw-46px)/2)]">
              <Link key={i} href={image.href}>
                <Image src={`/${image.path}`} alt={image.name} width={272} height={248} className="w-full h-full object-cover" />
              </Link>
            </div>
          ) : (isProduct ? (
            <article key={i} className={clsx("xl:w-[calc((100vw-128px)/4)] lg:w-[calc((100vw-112px)/3)] md:w-[calc((100vw-92px)/3)] sm:w-[calc((100vw-66px)/2)] w-[calc((100vw-48px)/2)] lg:p-2 sm:p-1.5 p-1", productCardCls)}>
              <section className="relative h-full">
                {/* TODO: mungkin nanti untuk width dan height (semua image yg sifatnya statis) bisa disesuaikan lagi biar foto yg dihasilkan mak nyuss, atau pakai svg aja? */}
                <div className="md:h-1/2 xs:h-[55%] h-[48%] lg:mb-2 sm:mb-1.5 mb-1">
                  <Image src={`/${image.path}`} alt={image.name} width={388} height={274} className="w-full h-full object-cover" />
                </div>
                <div className="lg:mb-4 sm:mb-3 mb-2">
                  <h4 className={`${crimsonText.className} lg:text-lg sm:text-base text-sm !leading-tight !font-bold lg:mb-2 sm:mb-1.5 mb-1`}>{image.name}</h4>
                  {token && (
                    // TODO: incase ada diskon: yg atas untuk harga normal, yg bawah harga diskon
                    // {/* <s className="lg:text-[14px] sm:text-[12px] text-[10px] text-bs-fourth tracking-[1px] opacity-50">$222&nbsp;</s> */}
                    // TODO: mata uang ($) masih statis
                    <span className="lg:text-[16px] sm:text-[14px] text-[12px] text-bs-fourth tracking-[1px]">${image.price}</span>
                  )}
                </div>
                <div className="absolute w-full bottom-0">
                  {/* TODO: mungkin ini nanti jadiin config kayak sistem cakra, kan di localstorage itu diubah */}
                  {token ? (
                    <Button btnType="btn-product" isAuth />
                  ) : (
                    <Button btnType="btn-product" />
                  )}
                </div>
              </section>
            </article>
          ) : (isAllCategories ? (
            <div key={i} className="relative md:w-[calc((100vw-100px)/2)] sm:w-[calc((100vw-50px)/2)] w-[calc(100vw-40px)] h-full" onMouseEnter={() => handleHover(i)} onMouseLeave={() => { handleHover(null) }}>
              <Link href={`category/${image.href}`}>
                <span className={clsx("absolute w-full h-full bg-bs-fourth top-0 bg-opacity-[56%]", currDisplays[i])}></span>
                <Image src={`/${image.path}`} alt={image.name} width={590} height={338} className="w-full h-full object-cover"></Image>
                {/* TODO: kalau di design underlinenya cuman ngambil 3 letters di depan saja, kalau mau bikin kayak gitu ya go on */}
                <span className={clsx(`${crimsonText.className} absolute lg:left-8 sm:left-6 left-4 inset-y-1/2 text-white hover:text-bs-secondary underline lg:underline-offset-8 sm:underline-offset-[6px] underline-offset-4 !font-bold lg:text-2xl sm:text[22px] text-xl`, currDisplays[i])}>{image.name}</span>
              </Link>
            </div>
          ) : (
            <div key={i} className="w-full mx-auto">
              <article>
                <section>
                  <Image src={`/${image.path}`} alt={image.name} width={340} height={300} className="lg:mb-2 sm:mb-1.5 mb-1 w-full h-full" />
                  <div className="text-center">
                    <h4 className={`${crimsonText.className} lg:mb-2 sm:mb-1.5 mb-1`}>{image.name}</h4>
                    <p className="font-light lg:text-sm sm:text-xs text-[10px]">{image.desc}</p>
                  </div>
                </section>
              </article>
            </div>
          )))))}
        </div>
      </div>
    </>
  )
}