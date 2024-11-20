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
                        <div class="justify-start  pt-10">
                            <div class="border-gray-200" >
                                <div class=" font-semibold text-3xl pb-8 ">
                                    <h1 class="text-black ">Registered Office address</h1>
                                    <label class="form-check-label text-gray-400 text-lg py-2 px-2" for="flexCheckDefault">
                                        (PO Box is NOT Acceptable)
                                    </label>
                                </div>
                                <div class="grid grid-cols-2 gap-4">
                                    <div class="relative ">
                                        <input type="text" placeholder="Street" id="street" name="street" class="w-full bg-white rounded-lg  focus:ring-2 focus:ring-green-600 text-base outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                    <div class="relative ">
                                        <input type="text" placeholder="Suburb" id="suburb" name="suburb" class="w-full bg-white rounded-lg  focus:ring-2 focus:ring-green-600 text-base outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                    <div class="relative ">
                                        <input type="text" placeholder="State" id="street" name="street" class="w-full bg-white rounded-lg  focus:ring-2 focus:ring-green-600 text-base outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                    <div class="relative ">
                                        <input type="text" placeholder="Postcode" id="street" name="street" class="w-full bg-white rounded-lg  focus:ring-2 focus:ring-green-600 text-base outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                    <div class="relative ">
                                        <select name="America" id="subject" class="w-full bg-white rounded-lg focus:ring-green-600 text-base outline-none  py-3  px-3 leading-8 transition-colors duration-200 ease-in-out">
                                            <option value="" selected="selected" >America</option>
                                        </select>
                                    </div>
                                    <div class="relative ">
                                        <input type="number" placeholder="Mobile Number" id="pswd" name="numb" class="w-full bg-white rounded-lg  focus:ring-2 focus:ring-green-600 text-base outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                    <div class="relative ">
                                        <input type="number" placeholder="Fax number" id="fax" name="fax" class="w-full bg-white rounded-lg  focus:ring-2 focus:ring-green-600 text-base outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                    <div class="relative ">
                                        <input type="email" placeholder="Email" id="mail" name="email" class="w-full bg-white rounded-lg  focus:ring-2 focus:ring-green-600 text-base outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                    <div class="relative ">
                                        <input type="number" placeholder="Alternate number" id="street" name="street" class="w-full bg-white rounded-lg  focus:ring-2 focus:ring-green-600 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                    <div class="relative ">
                                        <input type="upload" placeholder="Document Upload" id="street" name="street" class="w-full bg-white rounded-lg  focus:ring-2 focus:ring-green-600 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div class="form-check mt-2 mb-4">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label text-black text-sm py-2 px-4" for="flexCheckDefault">
                                        Proprietary (companies whose name ends with proprietary Ltd or pty Ltd; also known as private companies), proceed to 1.3
                                    </label>
                                </div>
                                <div class="form-check mb-4">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label text-black text-sm py-2 px-4" for="flexCheckDefault">
                                        Proprietary (companies whose name ends with proprietary Ltd or pty Ltd; also known as private companies), proceed to 1.3
                                    </label>
                                </div>
                                <div class="flex gap-4 py-10">
                                    <button class="text-black focus:outline-none rounded-lg border border-green-300 w-80 h-10  text-lg">Skip</button>
                                    <button class="text-white focus:outline-none rounded-lg border bg-[#00CE86]     w-80 h-10 text-lg">Done</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
export default page
