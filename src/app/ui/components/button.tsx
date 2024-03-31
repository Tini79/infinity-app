import Link from "next/link";
// TODO: boleh nanti tambahin props buat nampung text nih ama link and so on
export default function Button({ btnType }: { btnType?: string }) {
  return (
    <>
      {btnType == "btn-group" ? (
        <div>
          {/* TODO: mungkin button yg paling bawah bisa pakai yg ini saja, ambil satu lah, isi kondisi */}
          <Link href="https://wa.me/+62881038440302" className="inline-block bg-bs-secondary border-2 border-bs-secondary text-bs-primary--darker !font-bold md:text-base sm:text-sm text-xs md:py-4 sm:py-3 py-2 md:px-16 sm:px-[42px] px-8 md:mr-4 sm:mr-3 mr-2 hover:bg-bs-secondary--darker hover:border-transparent">Order Now</Link>
          <Link href="/#productCategoriesSection" className="inline-block bg-transparent border-2 border-bs-secondary text-bs-secondary !font-bold md:text-base sm:text-sm text-xs md:py-4 sm:py-3 py-2 md:px-16 sm:px-[42px] px-8 hover:bg-bs-secondary--darker hover:text-bs-primary--darker hover:border-transparent">Explore Product</Link>
        </div>
      ) : btnType == "btn-product" ? (
        // TODO: belum isi dropdown dan harga belum hidden ini UI nya
        <button className="md:text-base sm:text-sm text-[10px] bg-bs-secondary text-bs-primary--darker hover:bg-bs-secondary--darker w-full md:py-3 sm:py-[9px] py-1.5">Order Now</button>
      ) : (
        <Link href="https://wa.me/+62881038440302" className="inline-block bg-bs-secondary border-2 border-bs-secondary text-bs-primary--darker !font-bold md:text-base sm:text-sm text-xs md:py-4 sm:py-3 py-2 md:px-16 sm:px-[42px] px-8 hover:bg-bs-secondary--darker hover:border-transparent">Order Now</Link>
      )}
    </>
  )
}