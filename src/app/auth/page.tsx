import clsx from "clsx";
import Button from "../ui/components/button";
import { crimsonText } from "../ui/fonts";

export default function Auth({ isRegistered = false }: { isRegistered: boolean }) {
  return (
    <>
      <section className="bg-bs-third--lighter h-screen flex justify-center items-center">
        <div className={clsx("bg-white lg:p-10 sm:p-[30px] p-5", {"xl:w-1/2 md:w-2/3 w-3/4": !isRegistered, "xl:w-[35%] lg:w-[40%] md:w-1/2 w-3/4": isRegistered})}>
          <div className="lg:mb-10 sm:mb-[30px] mb-5 text-center">
          <span className={`${crimsonText.className} lg:text-[30px] sm:text-[28px] text-[26px] font-bold`}>{isRegistered ? "Login" : "Register"}</span>
          </div>
          <form action="">
            {isRegistered ? (
              <>
                <div>
                  <div className="lg:mb-4 sm:mb-[14px] mb-2">
                    <label htmlFor="" className="block lg:text-sm sm:text-xs text-[10px]">Username</label>
                    <input type="text" className="w-full border-2 border-bs-third py-0.5 px-1" />
                  </div>
                  <div className="">
                    <label htmlFor="" className="block lg:text-sm sm:text-xs text-[10px]">Password</label>
                    <input type="password" className="w-full border-2 border-bs-third py-0.5 px-1" />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div>
                  <div className="sm:flex gap-4 w-full">
                    <div className="w-full lg:mb-4 sm:mb-[14px] mb-2">
                      <label htmlFor="" className="block lg:text-sm sm:text-xs text-[10px]">Full Name</label>
                      <input type="text" className="w-full border-2 border-bs-third py-0.5 px-1" />
                    </div>
                    <div className="w-full lg:mb-4 sm:mb-[14px] mb-2">
                      <label htmlFor="" className="block lg:text-sm sm:text-xs text-[10px]">Username</label>
                      <input type="text" className="w-full border-2 border-bs-third py-0.5 px-1" />
                    </div>
                  </div>
                  <div className="sm:flex gap-4">
                    <div className="w-full sm:mb-auto lg:mb-4 sm:mb-[14px] mb-2">
                      <label htmlFor="" className="block lg:text-sm sm:text-xs text-[10px]">Email</label>
                      <input type="email" className="w-full border-2 border-bs-third py-0.5 px-1" />
                    </div>
                    <div className="w-full sm:mb-auto lg:mb-4 sm:mb-[14px] mb-2">
                      <label htmlFor="" className="block lg:text-sm sm:text-xs text-[10px]">Password</label>
                      <input type="password" className="w-full border-2 border-bs-third py-0.5 px-1" />
                    </div>
                  </div>
                </div>
              </>
            )}
            <div className="lg:mt-10 sm:mt-[30px] mt-5">
              <Button btnType="auth-btn-group"></Button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}