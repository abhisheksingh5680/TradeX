import Logo from "../../../(Components)/Logo/logo"
import Image from "next/image"
const page = () => {
    return (
        <section className="overflow-hidden">
            <div className=" sm:mx-2 md:w-full ">
                <div className=" bg-[#E8F9F3] grid grid-cols-1 sm:grid-cols-2 gap-4 px-1  py-2">
                    <div>
                        <Logo />
                    </div>
                    <div class="right_div_Container" >
                        <div class="flex justify-start px-20 py-12">
                            <Image src="/assests/logo.png" width={150} alt="project logo" height={100} />
                        </div>
                        <div class="items-center flex flex-col" style={{ padding: "120px 0" }}>
                            <div class="border-gray-200 gap-8">
                                <div class=" font-semibold text-3xl mb-5">
                                    <h1 class="text-black ">Change New</h1>
                                    <h1 class="text-black">Password</h1>
                                </div>

                                <div class="relative mb-5">
                                    <input type="password" placeholder="Enter New Password" id="pswd" name="pswd" class="w-full bg-white rounded-lg border border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <div class="inputfield pt-4 flex gap-4 mb-5">
                                    <input class="display-inline-block text-center p-1 h-1 w-14 rounded-lg border-solid border-2 bg-[#00CE86] border-[#e1e1e1]" type="text" maxlength="1" />
                                    <input class="display-inline-block text-center p-1 h-1 w-14 rounded-lg border-solid border-2 bg-[#00CE86] border-[#e1e1e1]" type="text" maxlength="1" />
                                    <input class="display-inline-block text-center p-1 h-1 w-14 rounded-lg border-solid border-2 bg-[#00CE86] border-[#e1e1e1]" type="text" maxlength="1" />
                                    <input type="text" maxlength="1" class="display-inline-block rounded-lg text-center p-1 h-1 w-14 border-solid border-2 border-[#e1e1e1]" />
                                    <input type="text" maxlength="1" class="display-inline-block rounded-lg text-center p-1 h-1 w-14 border-solid border-2 border-[#e1e1e1]" />
                                </div>
                                <div class=" mb-5 ">
                                    <h1 class="text-black">Strong password! Dont ever share it</h1>
                                </div>
                                <div class="relative mb-5">
                                    <input type="password" placeholder="Confirm new Password" id="pswd" name="pswd" class="w-full bg-white rounded-lg border border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <button class="text-white bg-[#00CE86] border-0 py-2 px-36 mt-4 focus:outline-none  rounded text-lg">Update</button>

                            </div>
                        </div>
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
