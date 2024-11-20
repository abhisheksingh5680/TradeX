import Image from "next/image"
const Sidebar = () => {
    return (
        <section class="relative bg-[#E8F9F3] ">
            <div className=" flex gap-7 ">
                <div className="grid grid-cols-2-col  bg-white w-[300px] px-5 ">
                    <div className="dash_logo pt-10 pb-0">
                        <a style={{
                            width: "100%"
                        }}>
                            <Image src="/assests/logo.png" alt="project logo" width={1000} height={1000} style={{
                                width: "150px"
                            }} />
                        </a>
                    </div>
                    <div className="py-3  dash_tabs_container">
                        <div class="flex items-center justify-start  bg-[#E8F9F3] py-3  gap-2  rounded-lg" style={{
                            padding: "17px 25px"
                        }}>
                            <Image src="/assests/Dashboard.png" width={1000} alt="project logo" height={1000} style={{ width: "20px", height: "20px" }} />
                            <h2 class="text-lg  text-gray-900 font-bold title-font">Dashboard</h2>
                        </div>
                        <div class="flex items-center justify-start  bg-[#fff] py-3  gap-3  rounded-lg" style={{
                            padding: "17px 25px"
                        }}>
                            <Image src="/assests/Portfolio.png" width={1000} alt="project logo" height={1000} style={{ width: "20px", height: "20px" }} />
                            <h2 class="text-lg  text-[#A1A1A1] font-bold title-font">Portfolio</h2>
                        </div>
                        <div class="flex items-center justify-start  bg-[#fff] py-3  gap-3  rounded-lg" style={{
                            padding: "17px 25px"
                        }}>
                            <Image src="/assests/Traderlist.png" width={1000} alt="project logo" height={1000} style={{ width: "20px", height: "20px" }} />
                            <h2 class="text-lg  text-[#A1A1A1] font-bold title-font">Trader List</h2>
                        </div>
                        <div class="flex items-center justify-start  bg-[#fff] py-3  gap-3  rounded-lg" style={{
                            padding: "17px 25px"
                        }}>
                            <Image src="/assests/Invoice.png" width={1000} alt="project logo" height={1000} style={{ width: "20px", height: "20px" }} />
                            <h2 class="text-lg  text-[#A1A1A1] font-bold title-font">Invoice</h2>
                        </div>
                        <div class="flex items-center justify-start  bg-[#fff] py-3  gap-3  rounded-lg" style={{
                            padding: "17px 25px"
                        }}>
                            <Image src="/assests/Account.png" width={1000} alt="project logo" height={1000} style={{ width: "20px", height: "20px" }} />
                            <h2 class="text-lg  text-[#A1A1A1] font-bold title-font">Account</h2>
                        </div>
                        <div class="flex items-center justify-start  bg-[#fff] py-3  gap-3  rounded-lg" style={{
                            padding: "17px 25px"
                        }}>
                            <Image src="/assests/ab.png" width={1000} alt="project logo" height={1000} style={{ width: "20px", height: "20px" }} />
                            <h2 class="text-lg  text-[#A1A1A1] font-bold title-font">Setting</h2>
                        </div>
                        <div class="flex items-center justify-start  bg-[#fff] py-3  gap-3  rounded-lg" style={{
                            padding: "17px 25px"
                        }}>
                            <Image src="/assests/Support.png" width={1000} alt="project logo" height={1000} style={{ width: "20px", height: "20px" }} />
                            <h2 class="text-lg  text-[#A1A1A1] font-bold title-font">24/7 Support</h2>
                        </div>
                    </div>
                    <div class="relative bg-gradient-to-b from-[#051F26] to-[#00CE86]" style={{ borderRadius: "20px", padding: "20px", height: "350px", top: "50px" }}>
                        <div class=" absolute overflow-visible sm:top-24 bg-content" style={{ top: "-48px" }}>
                            <Image class="w-[200px] h-[200px]" alt="ecommerce" src="/assests/dashlogo.png" width={1000} height={1000} />
                        </div>
                        <div class=" relative mt-40" style={{ top: "140px" }}>
                            <h1 class="text-gray-100 text-2xl leading-snug tracking-wide title-font font-semibold "> Trading learning
                                tips</h1>
                            <p class="leading-relaxed text-m text-gray-100 py-4 ">You can do basic trading easily</p>
                            <button class="text-white bg-[#00CE86] w-full   focus:outline-none items-center  text-lg" style={{
                                padding: "10px 40px", borderRadius: "15px"
                            }}>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Sidebar