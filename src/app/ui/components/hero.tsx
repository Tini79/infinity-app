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
      <div className="absolute w-full h-full bg-bs-fourth bg-opacity-[56%] px-10 flex items-center ">
        <div className="w-1/2 mt-[153px]">
          <div className={clsx("text-white", { "mb-12": isHomepage })}>
            <h1 className={clsx(`${crimsonText.className} !font-bold`, isHomepage ? `text-[56px] mb-4 leading-[64px]` : `text-[64px]`)}>
              {title}
            </h1>
            {!isHomepage && (
              <span className="text-lg font-medium uppercase mt-4 tracking-[6px]">{subTitle}</span>
            )}
            {isHomepage && (
              <p className="text-base">{desc}</p>
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