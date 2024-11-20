import Image from "next/image"
import Header from "../../../(Components)/Header/header"
import Footer from "../../../(Components)/Footer/footer"
export default function Trade() {
    return (
        <div class="bg-[#E8F9F3]" >
            <Header />
            {/* <section>
                <header className="text-black-600  body-font">
                    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                        <a className="flex title-font font-medium items-center text-gray-900 ml-8  ">
                            <Image src="/assests/logo.png" width={150} alt="project logo" height={100} />
                        </a>
                        <nav className="md:ml-auto flex flex-wrap items-center font-medium text-gray-900 text-base justify-center">
                            <a className="mr-12  hover:text-gray-900 font-medium">About Us</a>
                            <a className="mr-8  hover:text-gray-900 font-medium">Contact Us</a>
                            <button className="inline-flex items-center bg-emerald-200 text-black-600 border-0 rounded-full py-2 px-6 focus:outline-none  rounded text-base mr-8 mt-4 md:mt-0">Login
                            </button>
                            <button className="inline-flex items-center bg-green-500 text-black-600 border-0 rounded-full py-3 px-8 focus:outline-none  rounded text-base  mr-8 mt-4 md:mt-0">Register
                            </button>
                        </nav>
                    </div>
                </header>
            </section> */}
            <div>
                <section class="text-gray-600 body-font">
                    <div class="container px-5  mx-auto" style={{ paddingBottom: "48px", paddingTop: "96px" }}>
                        <div class="flex flex-col text-center w-full mb-2">

                            <h1 class="sm:text-6xl text-6xl font-semibold title-font mb-10 text-gray-900">About Us</h1>
                            <p class="lg:w-10/12 mx-auto leading-relaxed text-lg"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi <br /> enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in <br /> hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit <br /> praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
                        </div>
                    </div>
                    <div class="flex  flex-col items-center w-full mb-10">
                        <div class="flex items-center space-x-2 text-base">
                            <h4 class="font-semibold text-slate-900">Ratings</h4>
                            <Image src="/assests/star.png" alt="" height={20} width={20} />
                            <h4 class="font-semibold text-slate-900">5.0</h4>
                            <div class="mt-3 flex -space-x-2 overflow-hidden">
                                <Image className="inline-block  max-h-24 rounded-full ring-2 ring-white" src="/assests/b.png" alt="" height={50} width={50} />
                                <Image className="inline-block max-h-24 rounded-full ring-2 ring-white" src="/assests/c.png" alt="" height={50} width={50} />
                                <Image className="inline-block max-h-24 rounded-full ring-2 ring-white" src="/assests/d.png" alt="" height={50} width={50} />
                                <Image className="inline-block max-h-24 rounded-full ring-2 ring-white" src="/assests/e.png" alt="" height={50} width={50} />
                                <Image className="inline-block max-h-24 rounded-full ring-2 ring-white" src="/assests/f.png" alt="" height={50} width={50} />
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 py-24 mx-auto">
                    <div class="lg:w-4/5 mx-auto flex flex-wrap">
                        <Image alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-inherit object-center rounded" src="/assests/plant.png" width={799} height={827} />
                        <div class="lg:w-1/2 w-full lg:pl-10 pt-40 mt-6 lg:mt-0">
                            <div class=" flex items-center">
                                <h2 class="text-sm title-font font-large text-gray-900 tracking-widest  flex items-center"><Image src="/assests/asteric.png" alt="" height={10} width={10} />Our Story</h2>
                            </div>
                            <div>
                                <h1 class="text-gray-900 text-3xl title-font font-bold mt-4">Lorem Ipsum, Dolor <br /> Sit Amet Consectetur <br />Adipisicing</h1>
                                <p class="leading-relaxed text-gray-900  mt-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 py-24 mx-auto">
                    <div class="lg:w-4/5 mx-auto flex flex-wrap">
                        <div class="lg:w-1/2 w-full lg:pr-10 lg:py-1 mb-6 lg:mb-0">
                            <div className="flex items-start">
                                <h2 class="text-sm title-font font-large text-gray-900 tracking-widest flex items-start"><Image src="/assests/asteric.png" alt="" height={10} width={10} />We Believe</h2>
                            </div>
                            {/* <Heading /> */}
                            {/* <div> */}
                            <h1 class="text-gray-900 text-3xl title-font font-semibold mb-4">Lorem Ipsum, Dolor <br />Sit Amet Consectetur Adipisicing</h1>
                            <p class="leading-relaxed text-gray-900 mb-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci </p>
                            {/* </div> */}

                        </div>
                        <Image alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="/assests/office.png" width={799} height={827} />
                    </div>
                </div>
            </section>
            <section class="container items-center mx-auto">
                <Image alt="ecommerce" src="/assests/client.png" width={1920} height={576} />
            </section>
            <section class=" text-gray-600 body-font overflow-hidden mb-70">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20  items-center">
                        <div>
                            <h2 class="text-sm title-font font-medium text-gray-900 tracking-widest  flex items-center"> <Image src="/assests/asteric.png" alt="" height={10} width={10} /> Our Heritage</h2>
                        </div>
                        {/* <Heading /> */}
                        <div>
                            <h1 class="sm:text-6xl text-6xl font-bold title-font mb-10 text-gray-900">Lorem ipsum dolor sit amet,<br /> consectetur adipisicing</h1>
                            <p class="lg:w-2/3 mx-auto text-gray-900 leading-relaxed text-lg"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente exercitationem tenetur quis adipisci asperiores sequi dolorem voluptatum delectus itaque repellendus sint voluptas beatae nam natus a, minus commodi maiores soluta.Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            {/* <div className="relative">
                    <div class="px-14 pb-8 w-full absolute  z-40 row-span-3" style={{ top: '-100px' }} >
                        <div class="flex justify-space-around  row-span-2 bg-gradient-to-r from-[#007F88] via-[#00CE86] to-[#54EDB7] border-gray-900  rounded-[50px]">
                            <div className=" footer_above_Content " style={{ padding: '40px 200px 30px 0px', maxWidth: '700px', margin: '0 auto' }}>
                                <h1 class="text-4xl text-gray-100 font-semibold title-font -ml-16 mb-2">Lorem ipsum dolor sit amet
                                    <br />
                                    consectetuer adipiscing</h1>
                                <div class="flex w-full md:justify-start justify-center items-end">
                                    <div class="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
                                        <input type="text" id="hero-field" name="hero-field" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                    <button class="inline-flex text-gray-900 bg-gray-100 border-0 py-2 px-6 focus:outline-none rounded-[50px] text-lg">Subscribe</button>
                                </div>
                            </div>
                            <div className="footer_above_Img">
                                <Image alt="ecommerce" class="h-full w-full" src="/assests/house.png" width={380} height={300} />
                            </div>
                        </div>
                    </div >
                </div> */}
            {/* <footer class="text-gray-100 bg-indigo-950 body-font item-center">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap md:text-left text-center order-first">
                        <div class="lg:w-1/4 md:w-1/2 w-full px-20">
                            <Image src="/assests/log.png" width={150} alt="project logo" height={100} className="mb-5" />
                            <nav class="list-none ">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis voluptas obcaecati
                                    impedit ipsam dignissimos! Ipsa </p>
                            </nav>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 w-full px-24 py-20">
                            <nav class="list-none mb-10">
                                <li>
                                    <a class="text-gray-100 hover:text-gray-900">About us</a>
                                </li>
                                <li>
                                    <a class="text-gray-100 hover:text-gray-900">Contact us</a>
                                </li>
                                <li>
                                    <a class="text-gray-100 hover:text-gray-900">Login</a>
                                </li>
                                <li>
                                    <a class="text-gray-100 hover:text-gray-900">Register</a>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 w-full px-5 py-20">
                            <nav class="list-none mb-20">
                                <li>
                                    <a class="text-gray-100 hover:text-gray-900">FAQs</a>
                                </li>
                                <li>
                                    <a class="text-gray-100 hover:text-gray-900">Blogs</a>
                                </li>
                                <li>
                                    <a class="text-gray-100 hover:text-gray-900">Support</a>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 w-full px-10 py-20">
                            <h1 class="title-font font-semibold text-gray-100 tracking-widest text-sm mb-3">Follow Us</h1>
                            <span class="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
                                <a class="text-gray-100">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a class="ml-3 text-gray-100">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                                <a class="ml-3 text-gray-100">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                    </svg>
                                </a>
                                <a class="ml-3 text-gray-100">
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                                        <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                    </svg>
                                </a>
                            </span>
                        </div>
                        <div class="text-center text-gray-100 mt-4">
                            <hr />
                            <p>Copyright © 2024 FinnMonk. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </footer> */}
        </div >
    )
}
