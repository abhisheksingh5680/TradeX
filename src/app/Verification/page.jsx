import Logo from "../../../(Components)/Logo/logo"

import Image from "next/image"
const page = () => {
    return (
        <section className="overflow-hidden">
            <div className=" sm:mx-2    md:w-full ">
                <div className=" bg-[#E8F9F3] grid grid-cols-1 sm:grid-cols-2 gap-4 px-1  py-2">
                    <Logo />
                    <div class="right_div_Container" >
                        <div class="flex justify-start px-20 py-12">
                            <Image src="/assests/logo.png" width={150} alt="project logo" height={100} />
                        </div>
                        <div class="items-center flex flex-col " style={{ padding: "70px 0" }}>
                            <div class="border-gray-200 sm:border-t-0 border-t  " >
                                <div class=" font-semibold text-3xl  ">
                                    <h1 class="text-black ">OTP</h1>
                                    <h1 class="text-black">Verification</h1>
                                </div>

                                <div class="inputfield pt-4 flex gap-2">
                                    <input class="display-inline-block text-center p-3 h-12 w-8 rounded-lg border-solid border-2 border-[#e1e1e1]" type="text" maxlength="1" />
                                    <input class="display-inline-block text-center p-3 h-12 w-8 rounded-lg border-solid border-2 border-[#e1e1e1]" type="text" maxlength="1" />
                                    <input class="display-inline-block text-center p-3 h-12 w-8 rounded-lg border-solid border-2 border-[#e1e1e1]" type="text" maxlength="1" />
                                    <input class="display-inline-block text-center p-3 h-12 w-8 rounded-lg border-solid border-2 border-[#e1e1e1]" type="text" maxlength="1" />
                                    <input class="display-inline-block text-center p-3 h-12 w-8 rounded-lg border-solid border-2 border-[#e1e1e1]" type="text" maxlength="1" />
                                    <input class="display-inline-block text-center p-3 h-12 w-8 rounded-lg border-solid border-2 border-[#e1e1e1]" type="text" maxlength="1" />
                                </div>

                                <div class="text-center mt-5 mb-5 ">
                                    <h1 class="text-black">Did not get it?<a class="text-[#00CE86] underline">Resend OTP</a></h1>
                                </div>
                                <div class="items-center flex justify-center">
                                    <button class="text-white bg-[#00CE86] border-0 py-2 px-24 focus:outline-none rounded text-lg">Login</button>
                                </div>

                            </div>
                        </div>
                        <div />
                        <div class="text-center mb-5 ">
                            <h1 class="text-black">Already have an account?<a class="text-[#00CE86] underline">Login</a></h1>
                        </div>
                    </div>
                </div>
            </div>
        </section >

    )
}

export default page

