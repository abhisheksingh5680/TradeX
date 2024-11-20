import Header from "../../../(Components)/Header/header"
import Footer from "../../../(Components)/Footer/footer"
import Learnmore from "../../../(Components)/Learnmore/learnmore"
import Template from "../../../(Components)/Template/template"
import Image from "next/image"
export default function Home() {
    return (
        <div className="overflow-hidden">
            <div class="bg-[#E8F9F3]" style={{ display: "table" }}>
                <Header />
                <div className="relative">
                    <div className="px-4 md:px-12 pb-8 w-full z-40">
                        <div className=" md:flex md:justify-between md:flex-row  bg-[#060B1C] border-gray-900 rounded-[50px]">
                            <div className="footer_above_Content max-w-3xl p-9 md:p-12">
                                <h1 className="text-3xl md:text-5xl text-gray-100 font-semibold  leading-snug">
                                    Lorem Ipsum Dolor Sit Amet
                                    Consectetuer Adipiscing
                                </h1>
                                <p className="leading-relaxed text-gray-100 py-3">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                                </p>
                                <div className="flex w-full pt-4 items-end">
                                    <button className="inline-flex text-gray-900 font-semibold  bg-[#00CE86] border-0 py-2 px-8 focus:outline-none rounded-[50px] text-m">
                                        Talk To Us
                                    </button>
                                </div>
                            </div>
                            <div className="footer_above_Img ">
                                <Image alt="ecommerce" className="h-auto w-auto " src="/assests/house.png" width={1000} height={1000}
                                    style={{
                                        width: "390px", height: "390px"
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <section class="relative text-gray-100 body-font flex items-center md:mt-0" >
                    <Template />
                </section>
                <section className="relative pt-24">
                    <div className="container mx-auto px-4 md:px-0">
                        <div class="md:flex md:justify-center md:items-center gap-8">
                            <div class="" style={{ maxWidth: "650px", marginTop: "80px" }}>
                                <h2 class="leading-4 text-sm title-font font-bold text-gray-900 tracking-widest  flex items-center">
                                    <Image src="/assests/asteric.png" alt="" height={10} width={10} />Its a Global Problem</h2>
                                <h1 class="leading-snug text-gray-900 text-4xl title-font font-semibold mt-4">Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing</h1>
                                <p class="leading-relaxed text-gray-900 text-sm mt-8">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
                            </div>
                            <div class="flex pt-4 md:pt-0 ">
                                <div className="left_Circle_Img relative">
                                    <Image alt="ecommerce" className="h-[100px] w-[100px]  sm:h-[150px] sm:w-[150px]"
                                        src="/assests/tech1.png" width={100} height={100} />
                                    <div class="absolute text-white inset-14 flex items-start justify-center">Technology</div>
                                </div>
                                <div className="center_Circle_Img relative">
                                    <Image alt="ecommerce" className=" h-[200px] w-[200px] sm:h-[300px] sm:w-[300px]" src="/assests/tech2.png" width={1000} height={1000} />
                                    <div class="absolute text-white inset-0 flex items-center justify-center">Nature</div>
                                </div>
                                <div className="right_Circle_Img flex items-end relative">
                                    <Image alt="ecommerce" className="h-[100px] w-[100px] sm:h-[150px] sm:w-[150px]" src="/assests/tech3.png" width={100} height={100} />
                                    <div class="absolute text-white inset-14 flex items-end justify-center">Finance</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="text-gray-600 body-font overflow-hidden items-center pt-40 pb-20">
                    <div class="container px-6  mx-auto  items-center">
                        <div class=" flex-col text-center  flex items-center">
                            <div class=" pb-7">
                                <h2 class="text-sm title-font font-large  text-gray-900 tracking-widest  flex items-center"><Image src="/assests/asteric.png" alt="" height={10} width={10} />Its a Global Problem</h2>
                            </div>
                            <div class="  text-center">
                                <h1 class="text-3xl title-font text-gray-900 font-semibold max-w-[500px] mx-auto pb-4">Lorem Ipsum Dolor Sit Amet
                                    Consectetuer Adipiscing</h1>
                                <p class="leading-relaxed max-w-[1160px] mx-auto  pt-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore.</p>
                            </div >
                        </div>
                        <div class=" pt-12 flex-wrap justify-center  flex items-center">
                            <div class="p-4 xl:w-1/4 md:w-1/2 w-full  flex items-center">
                                <div class="flex rounded-lg bg-white">
                                    <div class=" p-8 ">
                                        <Image alt="ecommerce" class="pb-4" src="/assests/group161.png" style={{ backgroundColor: "#E8F9F3", padding: "15px 20px", borderRadius: "15px" }} width={100} height={100} />
                                        <h2 class="text-gray-900 text-lg title-font font-semibold pt-4">Sustainability Leaders</h2>
                                        <h4 class="text-gray-900 text-lg title-font font-large pt-2">Own your path to net zero.</h4>
                                        <p class="leading-relaxed text-base font-normal">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
                                        <Learnmore />
                                    </div>
                                </div>
                            </div>
                            <div class="p-4 xl:w-1/4 md:w-1/2 w-full  flex items-center">
                                <div class="flex rounded-lg bg-white">
                                    <div class=" p-8 ">
                                        <Image alt="ecommerce" class=" pb-4" src="/assests/group162.png" style={{ backgroundColor: "#E8F9F3", padding: "15px 20px", borderRadius: "15px" }} width={100} height={100} />
                                        <h2 class="text-gray-900 text-lg title-font font-semibold pt-4">Project Developers</h2>
                                        <h4 class="text-gray-900 text-lg title-font font-large pt-2">Drive value and impact.</h4>
                                        <p class="leading-relaxed text-base font-normal">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
                                        <Learnmore />
                                    </div>
                                </div>
                            </div>
                            <div class="p-4 xl:w-1/4 md:w-1/2 w-full  flex items-center">
                                <div class="flex rounded-lg bg-white">
                                    <div class=" p-8 ">
                                        <Image alt="ecommerce" class=" pb-4" src="/assests/group163.png" style={{ backgroundColor: "#E8F9F3", padding: "15px 20px", borderRadius: "15px" }} width={100} height={100} />
                                        <h2 class="text-gray-900 text-lg title-font font-semibold pt-4">Wholesale Markets</h2>
                                        <h4 class="text-gray-900 text-lg title-font font-large pt-2">Be in the heart of the market</h4>
                                        <p class="leading-relaxed text-base font-normal">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
                                        <Learnmore />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
                <section className="bg-[#07D08B] relative  py-24 md:py-32">
                    <div className="container mx-auto px-8">
                        <div className="flex flex-col md:flex-row items-center justify-around">
                            <div className="w-full md:max-w-[650px] p-11">
                                <h2 className="text-sm title-font font-large text-gray-900 tracking-widest flex items-center">
                                    <Image src="/assests/asterik.png" alt="" height={10} width={10} />The Technology
                                </h2>
                                <h1 className="leading-snug text-gray-900 text-3xl title-font font-semibold mt-4 mb-5">
                                    Lorem Ipsum, Dolor Sit Amet
                                    <br />Consectetur Adipisicing
                                </h1>
                                <p className="leading-relaxed text-gray-900 text-lg ">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. </p>
                            </div>
                            <div className="bg-[#051F26]  relative mt-10 md:mt-0 rounded-[50px] w-[100%] sm:w-[40%] " >
                                <div className="flex  md:flex-row items-center justify-between p-5 gap-2">
                                    <div className="w-[50%] sm:w-[100%]">
                                        <Image className="relative h-[250px]" src="/assests/bar.png" alt="ecommerce" width={1000} height={1000} />
                                    </div>
                                    <div className="bg-white rounded-lg p-5 w-[50%] sm:w-[40%]" >
                                        <div className="border-b border-[#C8F4E5] pb-1">
                                            <p className="text-[#060B1C] font-semibold text-base">Gross Emission</p>
                                            <h1 className="text-[#00CE86] font-semibold text-xl">1200</h1>
                                        </div>
                                        <div className="border-b border-[#C8F4E5] pb-1">
                                            <p className="text-[#060B1C] font-semibold text-base">Net Emission</p>
                                            <h1 className="text-[#00CE86] font-semibold text-xl">825</h1>
                                        </div>
                                        <div className="pb-1">
                                            <p className="text-[#060B1C] font-semibold text-base">Target</p>
                                            <h1 className="text-[#00CE86] font-semibold text-xl">825</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="top_Bar_div py-8 px-5 md:px-12">
                                    <h1 className="text-white font-semibold text-3xl leading-10">Emissions Manager</h1>
                                    <h3 className="font-bold text-medium leading-10">Run your climate program in one place.</h3>
                                    <ul className="list-disc pl-5 leading-8">
                                        <li className="text-small">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</li>
                                        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</li>
                                        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</li>
                                        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</li>
                                    </ul>
                                    <div className="flex pt-7 items-center">
                                        <Image alt="ecommerce" className="bg-[#00CE86] rounded-full p-3" src="/assests/arrow.png" width={50} height={50} />
                                        <h2 className="text-gray-100 text-sm title-font font-small pl-2">Learn More</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div >
        </div>
    )
}