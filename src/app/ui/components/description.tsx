import clsx from "clsx"
import { crimsonText } from "../fonts"
import Carousel from "./carousel"

interface DescProps {
  children?: React.ReactNode,
  title: string,
  desc?: string,
  isBgPrimary: boolean,
  hasCarousel?: boolean,
  customSectionCls?: string
}
export default function Description({ children, isBgPrimary, title, desc, hasCarousel, customSectionCls }: DescProps) {
  return (
    <>
      <section className={clsx(customSectionCls, { "lg:py-20 py-10": !hasCarousel, "bg-bs-primary": isBgPrimary, "bg-bs-third--darker": !isBgPrimary && !hasCarousel })}>
        <div className={clsx({ "text-bs-fourth": !isBgPrimary, "lg:px-52 md:px-20 px-[27px]": desc, "lg:px-10 px-5": !desc, "bg-bs-third--darker": hasCarousel, "sm:py-20 py-10": hasCarousel })}>
          <h2 className={clsx(`${crimsonText.className} text-center md:text-[32px] sm:text-[30px] text-[28px] !font-bold`, { "text-bs-secondary--less-darker": isBgPrimary })}>
            {title}
          </h2>
          {desc && (
            <p className={clsx("md:text-base sm:text-sm text-xs text-center md:mt-2 sm:mt-1.5 mt-1", { "text-white": isBgPrimary })}>{desc}</p>
          )}
        </div>
        {children && (
          <div className={clsx(hasCarousel ? "md:mt-10 sm:mt-5 mt-[30px] md:px-10 sm:px-[30px] px-5" : "text-white md:mt-20 sm:mt-[30px] mt-10")}>
            {children}
          </div>
        )}
      </section >
    </>
  )
}