import Link from "next/link";
// TODO: boleh nanti tambahin props buat nampung text nih ama link and so on
export default function Button({ btnType }: { btnType?: string }) {
  return (
    <>
      {btnType == "btn-group" ? (
        <div>
          <Link href="https://wa.me/+62881038440302" className="inline-block bg-bs-secondary border-2 border-bs-secondary text-bs-primary--darker !font-bold py-4 px-16 mr-4 hover:bg-bs-secondary--darker hover:border-transparent">Order Now</Link>
          <Link href="/#productCategoriesSection" className="inline-block bg-transparent border-2 border-bs-secondary text-bs-secondary !font-bold py-4 px-16 hover:bg-bs-secondary--darker hover:text-bs-primary--darker hover:border-transparent">Explore Product</Link>
        </div>
      ) : btnType == "btn-product" ? (
        // TODO: belum isi dropdown dan harga belum hidden ini UI nya
        <button className="bg-bs-secondary text-bs-primary--darker hover:bg-bs-secondary--darker w-full py-3">Order Now</button>
      ) : (
        <Link href="https://wa.me/+62881038440302" className="inline-block bg-bs-secondary border-2 border-bs-secondary text-bs-primary--darker !font-bold py-4 px-16 mr-4 hover:bg-bs-secondary--darker hover:border-transparent">Order Now</Link>
      )}
    </>
  )
}