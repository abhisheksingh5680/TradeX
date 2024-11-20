import Logo from "../../../(Components)/Logo/logo"
import Image from "next/image"
const page = () => {
    return (
        <section className="overflow-hidden" >
            <div className="container sm:mx-2    md:w-full">
                <div className="bg-[#E8F9F3] grid grid-cols-1 sm:grid-cols-2 gap-4 px-1  py-2">
                    <Logo />
                    <div class="right_div_Container" >
                        <div class="flex justify-start px-20 py-12">
                            <Image src="/assests/logo.png" width={150} alt="project logo" height={100} />
                        </div>
                        <div class="items-center flex flex-col " style={{ padding: "180px 0" }}>
                            <div class="border-gray-200 gap-8 " >
                                <div class=" font-semibold text-3xl  ">
                                    <h1 class="text-black ">Forgot</h1>
                                    <h1 class="text-black">Password</h1>
                                </div>
                                <div class="relative mt-4 mb-4">
                                    <input type="email" placeholder="Email" id="email" name="email" class="w-full bg-white rounded-lg border  focus:border-green-600 focus:ring-2 focus:ring-green-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <button class="text-white bg-[#00CE86] border-0 py-2 px-24 focus:outline-none  rounded text-lg">Next</button>
                            </div>
                        </div>
                        <div class="text-center mb-5 ">
                            <h1 class="text-black">Remember the password?<a class="text-[#00CE86] underline">Login</a></h1>
                        </div>
                    </div>
                </div>

            </div>
        </section >

    )
}

export default page
