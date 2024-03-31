import clsx from "clsx";
import { crimsonText } from "../fonts";
import Button from "./button";

interface HeroProps {
  isHomepage: boolean,
  title: string,
  subTitle?: string,
  desc?: string,
}

export default function Hero({ isHomepage, title, subTitle, desc }: HeroProps) {
  return (
    <>
      {/* <section id={id} className="relative h-screen w-full bg-center flex items-center mb-20 bg-[url('/imgs/hero.jpg')] bg-cover bg-no-repeat"> */}
      <div className="absolute w-full h-full bg-bs-fourth bg-opacity-[56%] sm:px-10 px-5 flex items-center ">
        <div className="lg:w-1/2 w-full mt-[153px]">
          <div className={clsx("text-white", { "md:mb-12 sm:mb-9 mb-6": isHomepage })}>
            <h1 className={clsx(`${crimsonText.className} !font-bold`, isHomepage ? `md:text-[56px] sm:text-[48px] text-[40px] md:mb-4 sm:mb-3 mb-2 md:leading-[64px] sm:leading-[56px] leading-[48px]` : `md:text-[64px] sm:text-[56px] text-5xl`)}>
              {title}
            </h1>
            {!isHomepage && (
              <span className="md:text-lg sm:text-sm text-xs font-medium uppercase lg:mt-4 md:mt-3 mt-2 md:tracking-[6px] tracking-[4px]">{subTitle}</span>
            )}
            {isHomepage && (
              <p className="md:text-base sm:text-sm text-xs">{desc}</p>
            )}
          </div>
          <div>
            {isHomepage && (
              <Button btnType="btn-group" />
            )}
          </div>
        </div>
      </div>
      {/* </section > */}
    </>
  )
}