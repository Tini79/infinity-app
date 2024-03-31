import Image from "next/image";
import { crimsonText } from "./ui/fonts";
import Carousel from "./ui/components/carousel";
import Description from "./ui/components/description";
import Link from "next/link";
import Button from "./ui/components/button";
import Hero from "./ui/components/hero";
export default function Home() {
  const categories = [
    { name: "Tri Hita Karana Bracelets", image: "/imgs/carousel-1.jpg", href: "/category" },
    { name: "Red String Bracelets", image: "/imgs/carousel-2.jpg", href: "/" }
  ]

  const testimonials = [
    { custName: "Ajeng", productCategory: "Tri Hita Karana Bracelets", testi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", image: "/imgs/carousel-1.jpg", href: "/" },
    { custName: "Bram", productCategory: "Red String Bracelets", testi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", image: "/imgs/carousel-2.jpg", href: "/" },
    { custName: "Charlotte", productCategory: "Tri Hita Karana Bracelets", testi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", image: "/imgs/carousel-1.jpg", href: "/" }
  ]

  return (
    <>
      <section id="homepageHero" className="relative h-screen w-full bg-center flex items-center mb-20 bg-[url('/imgs/hero.jpg')] bg-cover bg-no-repeat">
        <Hero isHomepage title="Discover Vibrant Jewelry for Every Soul" desc="Immerse yourself in the rich cultural heritage and spiritual essence of Bali with our authentic jewelry. Shop now and bring a piece of Bali home!" />
      </section >
      <section className="bg-bs-primary p-20 flex">
        <div className="flex-1">
          <Image src="/imgs/brand-logo.png" alt="Infinity Pritty Jewellery Logo" width={368} height={176} />
        </div>
        <div className="flex-1 flex items-center">
          <p className="text-sm leading-6 text-white text-justify">Founded in 2021, Infinity Pretty Wear strives to introduce the world to the beauty of Balinese culture through our unique jewelry. We bridge the gap between traditional Balinese culture and modern fashion, allowing everyone to experience the "goodness of Bali" through our vibrant and spiritually inspired designs.</p>
        </div>
      </section>
      <section className="px-10 py-[100px]">
        <Carousel title="Popular Category" isCategory />
      </section>
      <Description isBgPrimary={false} title="Beyond the Beaches: Discover Bali’s Exquisite Jewelry" desc="Beyond its stunning beaches and vibrant culture, Bali, the captivating Indonesian island, boasts a rich tradition of handcrafted jewelry making that incorporates elements of Hinduism, local folklore, and nature. Balinese authentic jewelry is known for its intricate craftsmanship, unique designs, and deep cultural significance." />
      <section className="px-10 py-20 flex items-center">
        <div className="flex-1">
          <Image src="/imgs/design-introduction.jpg" alt="Bracelets Collections" width={550} height={618} className="w-[550px] h-[618px]" />
        </div>
        <div className="ml-10 flex-1">
          <h2 className={`${crimsonText.className} text-4xl mb-4 !font-bold`}>Introduce About Our Design</h2>
          <p>
            Our jewelry transcends mere fashion and style; it's a path to achieving life's balance. Infinity Pritty Jewellery offers a vast collection featuring diverse stones and charms, each imbued with unique meanings, strengths, and values. Inspired by various Balinese cultures, our collection invites you to embark on a journey of Balinese life.
          </p>
        </div>
      </section>
      {/* TODO: coba bikin setiap section yg dituju pas scroll tampil di tengah" page */}
      <section id="productCategoriesSection" className="px-10 py-20 bg-bs-third--darker">
        <span className={`${crimsonText.className} text-[32px] !font-bold`}>Product Categories</span>
        <div className="flex gap-5 mt-10">
          {categories.map((category, index) => (
            <>
              <div className="w-full h-[338px] relative">
                <Link key={index} href={category.href}>
                  <span className="absolute w-full h-full bg-bs-fourth top-0 bg-opacity-[56%]"></span>
                  <Image src={category.image} alt={category.image} width={590} height={338} className="w-full h-full object-cover"></Image>
                  <span className={`${crimsonText.className} absolute left-8 inset-y-1/2 text-white hover:text-bs-secondary !font-bold text-2xl`}>{category.name}</span>
                </Link>
              </div>
            </>
          ))}
        </div>
      </section >
      <section id="testimonialsSection" className="px-10 pt-[100px] pb-[52px]">
        <div className="mb-[52px] text-center">
          <h2 className="mb-2 uppercase text-sm tracking-[4px]">Testimonials</h2>
          <span className={`${crimsonText.className} text-4xl !font-bold`}>What Our Client Say</span>
        </div>
        <div className="flex gap-[30px]">
          {testimonials.map((testi, index) => (
            <>
              <article className="px-4 pt-4 pb-6 hover:shadow-[0_0_4px_0_rgba(51,44,17,0.16)]">
                <section>
                  <Image key={index} src={testi.image} alt={testi.productCategory} width={348} height={313} className="mb-2" />
                  <div className="text-center">
                    {/* or here? */}
                    <span className="text-sm text-bs-third">{testi.custName}</span>
                    <h3 className={`${crimsonText.className} mb-2 text-xl !font-bold`}>{testi.productCategory}</h3>
                    <p className="mb-10 text-sm font-light">{testi.testi}</p>
                    {/* TODO: stars here */}
                    {/* TODO: aku ragu mau ubah ini ke text-sm atau biarin aja 16px ukurannya yah? coba tambahin underlinenya deh biar bisa mutusin */}
                    <Link key={index} href={testi.href} className="text-bs-fourth text-sm font-medium hover:text-bs-third">View Product</Link>
                  </div>
                </section>
              </article>
            </>
          ))}
        </div>
      </section>
      <section className="bg-bs-primary--darker pr-10 flex">
        <div className="flex-initial w-[45%]">
          <Image src="/imgs/footer-cta.jpg" alt="CTA Image" width={542} height={379} className="h-full w-full object-cover" />
        </div>
        <div className="ml-10 py-24 flex-initial w-[55%]">
          <div className="text-white mb-10">
            <h2 className={`${crimsonText.className} text-4xl mb-2 !font-bold`}>Embrace Bali's Essence Today!</h2>
            <p className="leading-6 font-light">Carry the spirit of Bali with you through our intricately crafted bracelets. Explore our collection and let the magic of Bali adorn your wrist!</p>
          </div>
          <Button />
        </div>
      </section >
    </>
  );
}
