import clsx from "clsx";
import Button from "../../ui/components/button";
import { crimsonText } from "../../ui/fonts";
import { registerUser } from "@/app/lib/actions";

export default function Registration() {

  return (
    <>
      <section className="bg-bs-third--lighter h-screen flex justify-center items-center">
        <div className="bg-white lg:p-10 sm:p-[30px] p-5 xl:w-1/2 md:w-2/3 w-3/4">
          <div className="lg:mb-10 sm:mb-[30px] mb-5 text-center">
            <span className={`${crimsonText.className} lg:text-[30px] sm:text-[28px] text-[26px] font-bold`}>Registration Form</span>
          </div>
          <form action={registerUser}>
            <>
            {/* TODO: ukuran dari para input kagak sama nih lebarnya */}
              <div>
                <div className="sm:flex gap-4 w-full">
                  <div className="w-full lg:mb-4 sm:mb-[14px] mb-2">
                    <label htmlFor="fullName" className="block lg:text-sm sm:text-xs text-[10px]">Full Name</label>
                    <input type="text" id="fullName" name="full_name" className="w-full border-2 border-bs-third py-0.5 px-1" />
                  </div>
                  <div className="w-full lg:mb-4 sm:mb-[14px] mb-2">
                    <label htmlFor="username" className="block lg:text-sm sm:text-xs text-[10px]">Username</label>
                    <input type="text" id="username" name="username" className="w-full border-2 border-bs-third py-0.5 px-1" />
                  </div>
                </div>
                <div className="sm:flex gap-4">
                  <div className="w-full lg:mb-4 sm:mb-[14px] mb-2">
                    <label htmlFor="country" className="block lg:text-sm sm:text-xs text-[10px]">Country</label>
                    {/* TODO: nanti cari api gratis yakk */}
                    <select name="country" id="country" className="w-full border-2 border-bs-third py-0.5 px-1" >
                      <option value=""></option>
                      <option value="ID">Indonesia</option>
                    </select>
                  </div>
                  <div className="w-full lg:mb-4 sm:mb-[14px] mb-2">
                    <label htmlFor="birthday" className="block lg:text-sm sm:text-xs text-[10px]">Birthday</label>
                    <input type="date" id="birthday" name="birthday" className="w-full border-2 border-bs-third py-0.5 px-1" />
                  </div>
                </div>
                <div className="sm:flex gap-4">
                  <div className="w-full lg:mb-4 sm:mb-[14px] mb-2">
                    <label htmlFor="email" className="block lg:text-sm sm:text-xs text-[10px]">Email</label>
                    <input type="email" id="email" name="email" className="w-full border-2 border-bs-third py-0.5 px-1" />
                  </div>
                  <div className="w-full lg:mb-4 sm:mb-[14px] mb-2">
                    <label htmlFor="password" className="block lg:text-sm sm:text-xs text-[10px]">Password</label>
                    <input type="password" id="password" name="password" className="w-full border-2 border-bs-third py-0.5 px-1" />
                  </div>
                </div>
              </div>
            </>
            <div className="lg:mt-10 sm:mt-[30px] mt-5">
              <Button btnType="auth-btn-group"></Button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}