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
      <section className={clsx(customSectionCls, { "py-20": !hasCarousel, "bg-bs-primary": isBgPrimary, "bg-bs-third--darker": !isBgPrimary && !hasCarousel })}>
        <div className={clsx({ "text-bs-fourth": !isBgPrimary, "px-52": desc, "px-20": !desc, "bg-bs-third--darker": hasCarousel, "py-20": hasCarousel })}>
          <h2 className={clsx(`${crimsonText.className} text-center text-4xl !font-bold`, { "text-bs-secondary--less-darker": isBgPrimary })}>
            {title}
          </h2>
          {desc && (
            <p className={clsx("text-center mt-2", { "text-white": isBgPrimary })}>{desc}</p>
          )}
        </div>
        {children && (
          <div className={clsx(hasCarousel ? "mt-10 px-10" : "text-white mt-20")}>
            {children}
          </div>
        )}
      </section >
    </>
  )
}