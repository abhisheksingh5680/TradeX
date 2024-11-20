import Image from "next/image"
import Logo from "../../../(Components)/Logo/logo"
export default function Welcome() {
    return (
        <section className="overflow-hidden">
            <div className=" sm:mx-2    md:w-full ">
                <div className=" bg-[#E8F9F3] grid grid-cols-1 sm:grid-cols-2 gap-4 px-1  py-2">
                    <Logo />
                    <div class="right_div_Container" >
                        <div class="flex justify-start px-20 py-12">
                            <Image src="/assests/logo.png" width={150} alt="project logo" height={100} />
                        </div>
                        <div class="items-center flex flex-col " style={{ padding: "120px 0" }}>
                            <div class="border-gray-200  gap-8 " >
                                <div class=" font-semibold text-3xl  ">
                                    <h1 class="text-black ">Hey,</h1>
                                    <h1 class="text-black">Welcome</h1>
                                </div>
                                <div class="mt-5 gap-5 justify-center">
                                    <span class="inline-flex lg:ml-auto  mt-6 w-full justify-center  md:w-auto" style={{ gap: "50px" }}>
                                        <a class="text-gray-900" style={{ borderRadius: "100px", backgroundColor: "#FFFFFF", padding: "15px", width: "50px", height: "50px" }} >
                                            <Image src="/assests/google.png" width={50} alt="gog" height={50} />
                                        </a>
                                        <a class="ml-3 text-gray-500" style={{ borderRadius: "100px", backgroundColor: "#FFFFFF", padding: "15px", width: "50px", height: "50px" }}>
                                            <Image src="/assests/facebook.png" width={50} alt="gog" height={50} />
                                        </a>
                                        <a class="ml-3 text-gray-500" style={{ borderRadius: "100px", backgroundColor: "#FFFFFF", padding: "15px", width: "50px", height: "50px" }}>
                                            <Image src="/assests/apple.png" width={50} alt="gog" height={50} />
                                        </a>
                                    </span>
                                </div>
                                <div class=" flex items-center py-5 ">
                                    <span class="seprator" style={{ width: "114px", height: "2px", backgroundColor: "#fff" }}>  </span>
                                    <span className="text-black px-4">or</span>
                                    <span class="seprator" style={{ width: "114px", height: "2px", backgroundColor: "#fff" }}>  </span>
                                </div>
                                <div class="">
                                    <button class="text-black bg-white border-0 py-4 px-6 focus:outline-none rounded-lg w-full">
                                        <span className="flex items-center justify-evenly">
                                            <Image src="/assests/mail.png" class="-ml-7" alt="" width={"1000"} height={"1000"} style={{ width: "18px", height: "16px" }} />
                                            <p>Login with Email id</p>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="text-center mb-5 ">
                            <h1 class="text-black">Do not have an account?<a class="text-[#00CE86] underline">Create an Account</a></h1>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}