import Button from "../ui/components/button";
import Carousel from "../ui/components/carousel";
import Description from "../ui/components/description";
import Hero from "../ui/components/hero";
import { crimsonText } from "../ui/fonts";
import Image from "next/image"

export default function Category() {
  const triHitaKarana = [
    { name: "Parahyangan", desc: "Harmony between humans and the divine" },
    { name: "Pawongan", desc: "Harmony between humans and other humans" },
    { name: "Palemahan", desc: "Harmony between humans and nature" },
  ]
  const images = [
    { name: "Sandalwood", path: "/imgs/carousel-1.jpg", desc: "We choose sandalwood because it has become a spiritual wood in Bali. In some ceremonies, sandalwood is used to symbolize the relationship between humans, nature, and the environment (balance of nature).", href: "/category" },
    { name: "The Balinese Charm", path: "/imgs/carousel-1.jpg", desc: "This charm embodies various Balinese values, such as strength, acceptance, reincarnation, balance, faith, appreciation, love, beauty, and wisdom.", href: "/category" },
    { name: "Color Beads, Gemnstones, Glass and Crystals", path: "/imgs/carousel-1.jpg", desc: "These materials are inspired by the relationship between humans. They represent the creative expressions and shared emotions that bring people together, creating something captivating to the eye.", href: "/category" },
  ]

  return (
    <>
      <section id="categoryHero" className="relative h-screen w-full bg-center flex items-center mb-20 bg-[url('/imgs/carousel-1.jpg')] bg-cover bg-no-repeat">
        <Hero isHomepage={false} title="Tri Hita Karana" subTitle="bracelets" />
      </section>
      <section className="px-10 mb-20">
        <Carousel title="New Arrivals" isProduct productCardCls="bg-bs-fourth bg-opacity-[2%] p-2" />
      </section>
      <Description isBgPrimary title="Cultivate Harmony Within & Around You" desc={`Inspired by the ancient Balinese philosophy \"Tri Hita Karana\" (meaning \"three causes of well-being\" or \"three paths to prosperity\"), the Tri Hita Karana bracelet emphasizes harmonious balance among three fundamental elements.`}>
        <div className="flex justify-center items-center flex-3 gap-x-8">
          {triHitaKarana.map((concept, index) => (
            <>
              <div key={index} className="text-center">
                <span className={`${crimsonText.className} block !font-bold text-lg`}>{concept.name}</span>
                <span className="block font-light text-sm">{concept.desc}</span>
              </div>
              {index < 2 && (
                <span className="h-10 border"></span>
              )}
            </>
          ))}
        </div>
      </Description>
      <section className="py-20">
        <div className="flex items-center">
          <Image src="/imgs/tri-hita-karana-collections.jpg" alt="Tri Hita Karana Bracelet Collections" width={630} height={450} />
          <div className="ml-10">
            <h2 className={`${crimsonText.className} text-4xl mb-4 !font-bold`}>Harmony in Every Bead</h2>
            <p>The Tri Hita Karana bracelet typically incorporates symbols or designs representing the three elements of harmony between divinity, humanity, and nature. This serves as a constant reminder of the philosophy's core message. It's often worn not just as a fashion accessory but also as a spiritual and cultural symbol.</p>
          </div>
        </div>
      </section>
      <Description customSectionCls="mb-20" isBgPrimary={false} hasCarousel title="The Tri Hita Karana bracelets is crafted with mindful attention to the Balinese philosophy, reflected in the materials we  choose.">
        <Carousel />
      </Description>
      <section className="px-10 py-20 bg-bs-fourth bg-opacity-[2%]">
        <Carousel title="Most Popular" isProduct />
      </section>
      <section className="px-10 py-20">
        <div className="mb-6">
          <span className={`${crimsonText.className} text-[32px] !font-bold`}>All Products</span>
        </div>
        <div className="mb-7 flex">
          {/* {images.map((image, index) => ( */}
          <article>
            <section>
              <div className="flex gap-8 items-center">
                <div className="flex-initial w-1/2">
                  <Image src="/imgs/carousel-1.jpg" alt="" width={550} height={464} className="w-full h-[524px] object-cover" />
                </div>
                <div className="flex-initial w-1/2">
                  <div>
                    <span className="text-sm font-medium text-bs-fourth tracking-[1px] opacity-50">
                      BBA-1
                    </span>
                    <h3 className={`${crimsonText.className} !font-bold text-3xl leading-9 mb-2`}>
                      {images[0].name}
                    </h3>
                    <p className="font-light text-justify mb-10 w-3/4">{images[0].desc}</p>
                  </div>
                  <Button />
                </div>
              </div>
            </section>
          </article>
        </div>
        <div className="flex gap-3">
          <Carousel isAllProducts />
        </div>
      </section >
      <section className="px-10 py-20 bg-bs-fourth bg-opacity-[2%]">
        <Carousel title="See Also" isCategory />
      </section>
    </>
  )
}