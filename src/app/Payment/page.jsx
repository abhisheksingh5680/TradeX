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
                        <div className="flex justify-center ml-1 sm:justify-start ">
                            <div className="circle_separtor flex items-center">
                                <div className="bg_circle bg-[#00CE86] rounded-full p-5">
                                    <span className="text-[#fff]">1</span>
                                </div>
                                <span className="seprator" style={{ width: "80px", height: "2px", backgroundColor: "#fff" }}>  </span>
                            </div>
                            <div className="circle_separtor flex items-center">
                                <div className="bg_circle bg-[#fff] rounded-full p-5">
                                    <span className="text-[#00CE86]">2</span>
                                </div>
                                <span className="seprator" style={{ width: "80px", height: "2px", backgroundColor: "#fff" }}>  </span>
                            </div>
                            <div className="circle_separtor flex items-center">
                                <div className="bg_circle bg-[#fff] rounded-full p-5">
                                    <span className="text-[#00CE86]">3</span>
                                </div>
                            </div>
                        </div>
                        <div class="container justify-start px-12 pt-8">
                            <div class="border-gray-200 ">
                                <div class=" font-bold text-3xl pb-4">
                                    <h1 class="text-black ">Payment Terms</h1>
                                    <label class="form-check-label text-gray-400 text-sm " for="flexCheckDefault">
                                        (PO Box is NOT Acceptable)
                                    </label>
                                </div>
                                <div class="dropdown inline-block  relative w-full">
                                    <button class="bg-[#fff] text-gray-700 font-semibold  rounded-lg flex justify-between items-center px-6  py-3 w-full">
                                        <div class="flex">
                                            <input type="checkbox" name="check" class=" accent-green-400" />
                                            <span class="px-4">Advance payment is mandatory</span>
                                        </div>

                                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                                    </button>
                                </div>
                                <div class=" font-bold text-3xl pt-8 pb-4  ">
                                    <h1 class="text-black ">Delivery Terms</h1>
                                    <label class="form-check-label text-gray-400 text-sm " for="flexCheckDefault">
                                        Lorem ipsum dolor sit amet consectetuer adipiscing elit.<span className="b text-black">TRADER LIST</span>
                                    </label>
                                </div>
                                <div class="dropdown inline-block relative w-full">
                                    <button class="bg-[#fff] text-gray-700 font-semibold  rounded-lg flex justify-between items-center px-6  py-3 w-full">
                                        <div class="flex">
                                            <span class="px-2">Select your delivery terms</span>
                                        </div>

                                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                                    </button>
                                </div>

                            </div>

                            <div class="flex gap-4 py-10">
                                <button class="text-black focus:outline-none rounded-lg border border-green-300 w-80 h-10  text-lg">Skip</button>
                                <button class="text-white focus:outline-none rounded-lg border bg-[#00CE86]     w-80 h-10 text-lg">Done</button>
                            </div>
                        </div>
                        <div class="text-center mt-8  ">
                            <h1 class="text-black">Do not have an account?<a class="text-[#00CE86] underline">Create an Account</a></h1>

                        </div>
                    </div>
                </div>

            </div>
        </section >

    )
}

export default page
