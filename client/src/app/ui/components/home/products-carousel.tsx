"use client"
import { useState } from "react";
import { getLoginToken } from "@/app/lib/config";
import Carousel from "../carousel";
import clsx from "clsx";

interface ProductCarouselProps {
  title: string,
  data: any,
  isProduct: boolean,
  productCardCls?: string,
  custCls: string
}

export default function ProductsCarousel({
  title,
  data,
  isProduct,
  productCardCls,
  custCls, }: ProductCarouselProps) {
  let token = getLoginToken()  

  return (
    <>
      <section className={clsx("lg:px-10 sm:px-[30px] px-5", custCls)}>
        <Carousel title={title} data={data} isProduct={isProduct} productCardCls={productCardCls} token={token} />
      </section>
    </>
  )
}