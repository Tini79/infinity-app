import Image from "next/image";
import { crimsonText } from "./ui/fonts";
import Carousel from "./ui/components/carousel";
import Description from "./ui/components/description";
import Link from "next/link";
import Button from "./ui/components/button";
import Hero from "./ui/components/hero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";
export default function Home() {
  const categories = [
    { name: "Tri Hita Karana Bracelets", image: "/imgs/carousel-1.jpg", href: "/category" },
    { name: "Red String Bracelets", image: "/imgs/carousel-2.jpg", href: "/" },
    { name: "Red String Bracelets", image: "/imgs/carousel-2.jpg", href: "/" }
  ]

  const testimonials = [
    { custName: "Ajeng", productCategory: "Tri Hita Karana Bracelets", testi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", image: "/imgs/carousel-1.jpg", href: "/" },
    { custName: "Bram", productCategory: "Red String Bracelets", testi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", image: "/imgs/carousel-2.jpg", href: "/" },
    { custName: "Charlotte", productCategory: "Tri Hita Karana Bracelets", testi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", image: "/imgs/carousel-1.jpg", href: "/" },
    { custName: "Charlotte", productCategory: "Tri Hita Karana Bracelets", testi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", image: "/imgs/carousel-1.jpg", href: "/" }
  ]

  return (
    <>
      {/* hero */}
      <section id="homepageHero" className="relative h-screen w-full bg-center flex items-center lg:mb-20 sm:mb-[60px] mb-10  bg-[url('/imgs/hero.jpg')] bg-cover bg-no-repeat">
        <Hero isHomepage title="Discover Vibrant Jewelry for Every Soul" desc="Immerse yourself in the rich cultural heritage and spiritual essence of Bali with our authentic jewelry. Shop now and bring a piece of Bali home!" />
      </section >
      <section className="bg-bs-primary sm:p-20 p-10 lg:flex">
        <div className="flex-1">
          <Image src="/imgs/brand-logo.png" alt="Infinity Pritty Jewellery Logo" width={368} height={176} className="xl:w-[368px] md:w-[318px] w-[245px] xl:h-[176px] md:h-[152px] h-[117px] lg:m-0 mx-auto lg:mb-0 mb-6" />
        </div>
        <div className="flex-1 flex items-center">
          <p className="lg:text-sm sm:text-xs text-[10px] lg:leading-6 sm:leading-5 leading-4 text-white text-justify">Founded in 2021, Infinity Pretty Wear strives to introduce the world to the beauty of Balinese culture through our unique jewelry. We bridge the gap between traditional Balinese culture and modern fashion, allowing everyone to experience the "goodness of Bali" through our vibrant and spiritually inspired designs.</p>
        </div>
      </section>
      {/* lg:px-20 px-10 lg:py-[100px] sm:py-[75px] py-[50px] */}
      <section className="lg:px-10 sm:px-[30px] px-5 lg:py-[100px] sm:py-[75px] py-[50px]">
        {/* <div className="w-full h-full"> */}
        <Carousel title="Popular This Week" isCategory />
        {/* </div> */}
      </section>
      <Description isBgPrimary={false} title="Beyond the Beaches: Discover Bali’s Exquisite Jewelry" desc="Beyond its stunning beaches and vibrant culture, Bali, the captivating Indonesian island, boasts a rich tradition of handcrafted jewelry making that incorporates elements of Hinduism, local folklore, and nature. Balinese authentic jewelry is known for its intricate craftsmanship, unique designs, and deep cultural significance." />
      {/* design introduction */}
      <section className="lg:px-10 sm:px-[30px] px-5 lg:py-20 sm:py-[60px] py-10 md:flex items-center">
        <div className="flex-1 flex justify-center md:mb-0 sm:mb-10 mb-5">
          <Image src="/imgs/design-introduction.jpg" alt="Bracelets Collections" width={550} height={618} className="md:w-[550px] w-[376px] h-full" />
        </div>
        <div className="lg:ml-10 md:ml-5 flex-1">
          <h2 className={`${crimsonText.className} lg:text-[36px] sm:text-[34px] text-[32px] lg:mb-4 sm:mb-3 mb-2 !font-bold`}>Introduce About Our Design</h2>
          <p className="text-justify lg:text-base sm:text-sm text-xs">
            Our jewelry transcends mere fashion and style; it's a path to achieving life's balance. Infinity Pritty Jewellery offers a vast collection featuring diverse stones and charms, each imbued with unique meanings, strengths, and values. Inspired by various Balinese cultures, our collection invites you to embark on a journey of Balinese life.
          </p>
        </div>
      </section>
      {/* TODO: coba bikin setiap section yg dituju pas scroll tampil di tengah" page */}
      <section id="productCategoriesSection" className="lg:px-10 sm:px-[30px] px-5 lg:py-20 sm:py-[60px] py-10 bg-bs-third--darker">
        <span className={`${crimsonText.className} lg:text-[32px] sm:text-[30px] text-[28px] !font-bold`}>Product Categories</span>
        <div className="relative overflow-y-hidden carousel-container xl:h-[338px] lg:h-[300px] md:h-[250px] sm:h-[188px] xs:h-[316px] h-[200px] lg:mt-10 sm:mt-[30px] mt-5">
          <div className="absolute flex md:gap-5 gap-2.5 h-full">
            {categories.map((category, index) => (
              <>
                <div key={index} className="relative md:w-[calc((100vw-100px)/2)] sm:w-[calc((100vw-50px)/2)] w-[calc(100vw-40px)] h-full">
                  <Link href={category.href}>
                    <span className="absolute w-full h-full bg-bs-fourth top-0 bg-opacity-[56%]"></span>
                    <Image src={category.image} alt={category.image} width={590} height={338} className="w-full h-full object-cover"></Image>
                    <span className={`${crimsonText.className} absolute lg:left-8 sm:left-6 left-4 inset-y-1/2 text-white hover:text-bs-secondary !font-bold lg:text-2xl sm:text[22px] text-xl`}>{category.name}</span>
                  </Link>
                </div>
              </>
            ))}
          </div>
        </div>
      </section >
      <section id="testimonialsSection" className="lg:px-10 sm:px-[30px] px-5 lg:pt-[100px] sm:pt-[75px] pt-[50px] lg:pb-[52px] sm:pb-[39px] pb-[26px]">
        <div className="lg:mb-[52px] sm:mb-[39px] mb-[26px] text-center">
          <h2 className="lg:mb-2 sm:mb-1.5 mb-1 uppercase lg:text-sm sm:text-xs text-[10px] lg:tracking-[4px] tracking-[2px]">Testimonials</h2>
          <span className={`${crimsonText.className} lg:text-[36px] sm:text-[34px] text-[32px] !font-bold`}>What Our Client Say</span>
        </div>
        {/* TODO: slider */}
        <div className="relative carousel-container overflow-y-hidden xl:h-[480px] md:h-[440px] sm:h-[380px] h-[400px] xs:h-[338px]">
          <div className="absolute flex h-full lg:gap-x-[30px] gap-x-[15px] py-1 pl-1">
            {testimonials.map((testi, index) => (
              <>
                <article key={index} className="lg:w-[calc((100vw-148px)/3)] sm:w-[calc((100vw-83px)/2)] xs:w-[calc((100vw-63px)/2)] w-[calc((100vw-48px))] lg:px-4 sm:px-3 px-2 lg:pt-4 sm:pt-3 pt-2 lg:pb-6 sm:pb-[18px] pb-3 mx-auto hover:shadow-[0_0_4px_0_rgba(51,44,17,0.16)]">
                  <section className="h-full relative">
                    <div className="h-1/2 lg:mb-2 sm:mb-1.5 mb-1">
                      <Image src={testi.image} alt={testi.productCategory} width={348} height={313} className="w-full h-full object-cover" />
                    </div>
                    <div className="text-center">
                      {/* or here? */}
                      <span className="lg:text-sm sm:text-xs text-[10px] text-bs-third">{testi.custName}</span>
                      <h3 className={`${crimsonText.className}  md:mb-1 mb-0.5 lg:text-xl sm:text-lg text-base !font-bold`}>{testi.productCategory}</h3>
                      {/* TODO: nanti data jumlah star diambil dari testi user */}
                      <div className="flex justify-center lg:mb-2 sm:mb-1.5 mb-1">
                        <FontAwesomeIcon icon={faStar} className="lg:w-3.5 sm:w-3 w-2.5 text-bs-third opacity-50 hover:text-bs-third"></FontAwesomeIcon>
                      </div>
                      {/* lg:mb-10 sm:mb-[30px] mb-5  */}
                      <p className="lg:text-sm sm:text-xs text-[10px] font-light">{testi.testi}</p>
                      {/* TODO: aku ragu mau ubah ini ke text-sm atau biarin aja 16px ukurannya yah? coba tambahin underlinenya deh biar bisa mutusin */}
                    </div>
                    <div className="absolute w-full bottom-0 flex justify-center">
                      <Link key={index} href={testi.href} className="text-bs-fourth lg:text-sm sm:text-xs text-[10px] font-medium hover:text-bs-third">View Product</Link>
                    </div>
                  </section>
                </article>
              </>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-bs-primary--darker lg:pr-10 lg:flex lg:pb-0 pb-10">
        <div className="flex-initial lg:w-[45%]">
          <Image src="/imgs/footer-cta.jpg" alt="CTA Image" width={542} height={379} className="h-full w-full object-cover" />
        </div>
        <div className="lg:ml-10 lg:py-24 flex-initial lg:w-[55%] lg:px-10 sm:px-[30px] px-5 lg:mt-0 sm:mt-10 mt-5">
          <div className="text-white lg:mb-10 mb-5">
            <h2 className={`${crimsonText.className} lg:text-[36px] sm:text-[34px] text-[32px] lg:mb-2 sm:mb-1.5 mb-1 !font-bold`}>Embrace Bali's Essence Today!</h2>
            <p className="lg:text-base sm:text-sm text-xs font-light">Carry the spirit of Bali with you through our intricately crafted bracelets. Explore our collection and let the magic of Bali adorn your wrist!</p>
          </div>
          <Button />
        </div>
      </section >
    </>
  );
}
