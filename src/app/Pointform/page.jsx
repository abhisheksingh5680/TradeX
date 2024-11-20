import Logo from "../../../(Components)/Logo/logo"

import Image from "next/image"
const page = () => {
    return (
        <section className="overflow-hidden" >
            <div className="container sm:mx-2    md:w-full">
                <div className="bg-[#E8F9F3] grid grid-cols-1 sm:grid-cols-2 gap-4 px-1  py-2">
                    <Logo />
                    <div className="right_div_Container">
                        <div className="flex justify-center sm:justify-start sm:px-20 sm:py-12 py-4">
                            <Image src="/assests/logo.png" width={150} alt="project logo" height={100} />
                        </div>
                        <div className="flex justify-center ml-[12px] sm:justify-start ">
                            <div className="circle_separtor flex items-center">
                                <div className="bg_circle bg-[#00CE86] rounded-full p-5">
                                    <span className="text-[#fff]">1</span>
                                </div>
                                <span className="seprator sm:w-14" style={{ width: "60px", height: "2px", backgroundColor: "#fff" }}>  </span>
                            </div>
                            <div className="circle_separtor flex items-center">
                                <div className="bg_circle bg-[#fff] rounded-full p-5">
                                    <span className="text-[#00CE86]">2</span>
                                </div>
                                <span className="seprator" style={{ width: "60px", height: "2px", backgroundColor: "#fff" }}>  </span>
                            </div>
                            <div className="circle_separtor flex items-center">
                                <div className="bg_circle bg-[#fff] rounded-full p-5">
                                    <span className="text-[#00CE86]">3</span>
                                </div>
                            </div>
                            <div className="circle_separtor flex items-center">
                                <span className="seprator" style={{ width: "60px", height: "2px", backgroundColor: "#fff" }}>  </span>
                                <div className="bg_circle bg-[#fff] rounded-full p-5">
                                    <span className="text-[#00CE86]">4</span>
                                </div>

                            </div>

                        </div>
                        <div className="justify-center sm:justify-start sm:px-10 pt-6 sm:pt-10">
                            <div className="border-gray-200">
                                <div className="font-semibold text-2xl sm:text-3xl pb-6 sm:pb-8">
                                    <h1 class="text-black ">100 Point Form</h1>
                                    <label class="form-check-label text-black text-lg " for="flexCheckDefault">
                                        Section 1 : Australian company identification  procedure
                                    </label>
                                    <h1 class="text-black ">General Information</h1>

                                </div>
                                <div class="grid grid-cols-2 gap-4">
                                    <div class="relative mt-4 ">
                                        <input type="name" placeholder="Name registered by ASIC" id="name" name="name" class="w-full bg-white rounded-lg focus:ring-2 focus:ring-green-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                    <div class="relative mt-4 ">
                                        <input type="text" placeholder="Trading name" id="name" name="name" class="w-full bg-white rounded-lg focus:ring-2 focus:ring-green-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                    <div class="relative mt-4 mb-4">
                                        <input type="text" placeholder="ACN" id="name" name="name" class="w-full bg-white rounded-lg focus:ring-2 focus:ring-green-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                    <div class="relative mt-4 mb-4">
                                        <input type="text" placeholder="ABN" id="name" name="name" class="w-full bg-white rounded-lg focus:ring-2 focus:ring-green-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                    <button class="text-black    py-2 px-24 focus:outline-none rounded-lg border border-green-300  text-lg">Skip</button>

                                    <button class="text-white bg-[#00CE86] border-0 py-2 px-24 focus:outline-none  rounded text-lg">Next</button>

                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-24 ">
                            <h1 class="text-black">Do not have an account?<a class="text-[#00CE86] underline">Create an Account</a></h1>
                        </div>
                    </div>
                </div>

            </div>
        </section >

    )
}

export default page
