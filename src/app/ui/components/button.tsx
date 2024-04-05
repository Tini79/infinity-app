import Link from "next/link";
// TODO: boleh nanti tambahin props buat nampung text nih ama link and so on
interface ButtonProps {
  btnType?: string,
  isAuth?: boolean
}
export default function Button({ btnType, isAuth = false }: ButtonProps) {
  return (
    <>
      {btnType == "btn-group" ? (
        <>
          {/* TODO: mungkin button yg paling bawah bisa pakai yg ini saja, ambil satu lah, isi kondisi */}
          <Link href="https://wa.me/+62881038440302" className="inline-block bg-bs-secondary border-2 border-bs-secondary text-bs-primary--darker !font-bold lg:text-base sm:text-sm text-xs lg:py-4 sm:py-3 py-2 lg:px-16 sm:px-[42px] px-8 lg:mr-4 sm:mr-3 mr-2 hover:bg-bs-secondary--darker hover:border-transparent">Order Now</Link>
          <Link href="/#productCategoriesSection" className="inline-block bg-transparent border-2 border-bs-secondary text-bs-secondary !font-bold lg:text-base sm:text-sm text-xs lg:py-4 sm:py-3 py-2 lg:px-16 sm:px-[42px] px-8 hover:bg-bs-secondary--darker hover:text-bs-primary--darker hover:border-transparent">Explore Product</Link>
        </>
      ) : btnType == "auth-btn-group" ? (
        <>
        <div className="xs:flex gap-1">
          <button className="w-full border-2 border-bs-secondary bg-bs-secondary text-bs-primary--darker !font-medium lg:text-base sm:text-sm text-xs lg:py-3 sm:py-[9px] py-1.5 lg:px-16 sm:px-[42px] px-8 hover:bg-bs-secondary--darker hover:border-bs-secondary--darker xs:mb-auto mb-1">Submit</button>
          <button className="w-full border-2 border-bs-secondary text-bs-primary--darker !font-medium lg:text-base sm:text-sm text-xs lg:py-3 sm:py-[9px] py-1.5 lg:px-16 sm:px-[42px] px-8 hover:bg-bs-secondary--darker hover:border-bs-secondary--darker">Register</button>
        </div>
        </>
      ) : btnType == "btn-product" ? (
        <>
          {/* // TODO: belum isi dropdown dan harga belum hidden ini UI nya */}
          {isAuth ? (
            <button className="lg:text-base sm:text-sm text-xs bg-bs-secondary text-bs-primary--darker hover:bg-bs-secondary--darker w-full lg:py-3 sm:py-[9px] py-1.5">Order Now</button>
          ) : (
            <>
              <div className="flex lg:gap-2 sm:gap-1.5 gap-1">
                {/* <div className="lg:text-base sm:text-sm text-xs bg-transparent border border-bs-secondary text-bs-primary--darker hover:border-bs-secondary--darker hover:bg-bs-secondary--darker w-full lg:py-3 sm:py-[9px] py-1.5 text-center"> */}
                <Link href="/auth" className="lg:text-base sm:text-sm text-xs !font-medium bg-transparent border-2 border-bs-secondary text-bs-primary--darker hover:border-bs-secondary--darker hover:bg-bs-secondary--darker w-full lg:py-3 sm:py-[9px] py-1.5 text-center">Login</Link>
                {/* </div> */}
                {/* <div className="lg:text-base sm:text-sm text-xs bg-bs-secondary text-bs-primary--darker hover:bg-bs-secondary--darker w-full lg:py-3 sm:py-[9px] py-1.5 text-center"> */}
                <Link href="/auth" className="lg:text-base sm:text-sm text-xs !font-medium bg-bs-secondary text-bs-primary--darker hover:bg-bs-secondary--darker w-full lg:py-3 sm:py-[9px] py-1.5 text-center">Register</Link>
                {/* </div> */}
              </div>
            </>
          )}
        </>
      ) : (
        <Link href="https://wa.me/+62881038440302" className="bg-bs-secondary border-2 border-bs-secondary text-bs-primary--darker !font-bold lg:text-base sm:text-sm text-xs lg:py-4 sm:py-3 py-2 lg:px-16 sm:px-[42px] px-8 hover:bg-bs-secondary--darker hover:border-transparent">Order Now</Link>
      )
      }
    </>
  )
}