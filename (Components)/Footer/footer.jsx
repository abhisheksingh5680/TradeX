// import Image from "next/image"
// import { FaWhatsapp } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaFacebookF } from "react-icons/fa";
// import { BsTwitterX } from "react-icons/bs";
// import { FiYoutube } from "react-icons/fi";
// import { FaLinkedinIn } from "react-icons/fa";
// const Footer = () => {
//     return (
//         <section>
//             <div className="container relative">
//                 <div class="px-14 pb-8  absolute z-40 md:w-[70px] row-span-3 w-full sm:-top-100px" style={{ top: '-100px' }} >
//                     <div className="flex justify-between md:flex-row   bg-gradient-to-r from-[#007F88] via-[#00CE86] to-[#54EDB7] border-gray-900 rounded-[50px]  " >
//                         <div style={{ padding: "60px" }}>
//                             <h1 className="text-2xl sm:text-xl text-gray-100 font-semibold sm:font-medium title-font mb-2">
//                                 Lorem Ipsum Dolor Sit Amet
//                                 <br />
//                                 Consectetuer Adipiscing
//                             </h1>
//                             <div className="flex relative" style={{
//                                 width: "450px"
//                             }}>
//                                 <input type="text"
//                                     id="hero-field"
//                                     name="hero-field"
//                                     className=" input-wrapper py-4 px-6 rounded-[50px]"
//                                     placeholder="Enter your email id"
//                                     style={{
//                                         width: "350px",
//                                         height: "60px",
//                                         background: " rgb(255 255 255 / 20%);",
//                                         float: "left",
//                                     }}
//                                 />
//                                 <button className="inline-flex text-gray-900 bg-gray-100 border-0 py-4 px-6 focus:outline-none rounded-[50px] text-lg"
//                                     style={{
//                                         overflow: "visible",
//                                         position: "absolute",
//                                         right: "100px",
//                                         border: "0",
//                                         cursor: "pointer",
//                                         width: "130px",
//                                     }}
//                                 >
//                                     Subscribe
//                                 </button>
//                             </div>
//                         </div>
//                         <div className="footer_above_Img mt-40px sm:mt-40 overflow-hidden" >
//                             <Image alt="ecommerce" className="h-auto w-auto  " src="/assests/housenew.png" width={1000} height={1000} style={{
//                                 width: "605px",
//                                 height: "253px",
//                             }} />
//                         </div>
//                     </div>
//                 </div >
//             </div>
//             <footer class="  text-gray-100 bg-[#060B1C] body-font item-center" style={{ paddingTop: "250px" }}>
//                 <div class="container px-14  mx-auto  relative   col-span-3">
//                     <div class="flex flex-wrap md:text-left text-center order-first">
//                         <div class=" md:w-1/2    ">
//                             <Image src="/assests/log.png" width={150} alt="project logo" height={100} className="mb-5 " />
//                             <nav class="max-w-2 " style={{ lineHeight: "30px" }}>
//                                 <p class="">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy <br /> nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi <br />enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis <br /> nisl ut aliquip ex ea commodo consequat.   </p>
//                             </nav>
//                         </div>
//                         <div className="md:w-1/2 flex 1  text-left pt-12 ">
//                             <div style={{ flex: 1, }}>
//                                 <nav class="list-none mb-4" style={{ lineHeight: "30px" }}>
//                                     <li>
//                                         <a class="text-gray-100 ">About us</a>
//                                     </li>
//                                     <li>
//                                         <a class="text-gray-100 ">Contact us</a>
//                                     </li>
//                                     <li>
//                                         <a class="text-gray-100 ">Login</a>
//                                     </li>
//                                     <li>
//                                         <a class="text-gray-100 ">Register</a>
//                                     </li>
//                                 </nav>
//                             </div>
//                             <div style={{ flex: 1, }}>
//                                 <nav class="list-none mb-5" style={{ lineHeight: "30px" }}>
//                                     <li>
//                                         <a class="text-gray-100 hover:text-gray-900">FAQs</a>
//                                     </li>
//                                     <li>
//                                         <a class="text-gray-100 hover:text-gray-900">Blogs</a>
//                                     </li>
//                                     <li>
//                                         <a class="text-gray-100 hover:text-gray-900">Support</a>
//                                     </li>
//                                 </nav>
//                             </div>
//                             <div style={{ flex: 1, }}>
//                                 <h1 class="title-font font-semibold text-gray-100 tracking-widest text-sm mb-3">Follow Us</h1>
//                                 <div class="grid grid-cols-3 gap-4 items-center">
//                                     <a class="rounded-full p-3" style={{ border: "1px solid #00CE86" }}>
//                                         <FaWhatsapp />
//                                     </a>
//                                     <a class="rounded-full p-3" style={{ border: "1px solid #00CE86" }}>
//                                         <FaInstagram />
//                                     </a>
//                                     <a class="rounded-full p-3" style={{ border: "1px solid #00CE86" }}>
//                                         <FaFacebookF />
//                                     </a>
//                                     <a class="rounded-full p-3" style={{ border: "1px solid #00CE86" }}>
//                                         <BsTwitterX />
//                                     </a>
//                                     <a class="rounded-full p-3" style={{ border: "1px solid #00CE86" }}>
//                                         <FiYoutube />
//                                     </a>
//                                     <a class="rounded-full p-3" style={{ border: "1px solid #00CE86" }}>
//                                         <FaLinkedinIn />
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </footer>
//         </section >
//     )
// }

// export default Footer























import Image from "next/image";
import { FaWhatsapp, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FiYoutube } from "react-icons/fi";

const Footer = () => {
    return (
        <section class="container mx-auto">
            <div className="container relative mx-auto">
                <div className=" md:px-16 absolute z-40  lg:w-[40px] sm:h-1/3 sm:w-[70px]" style={{ top: '-80px', left: '80px', right: "80px", bottom: "80px" }}>
                    <div className="flex flex-col md:flex-row justify-between bg-gradient-to-r from-[#007F88] via-[#00CE86] to-[#54EDB7] border-gray-900 rounded-[50px]  md:p-32 mx-auto">
                        <div className="text-center p-20 sm:p-20 sm:text-left flex-1">
                            <h1 className="text-3xl md:text-2xl text-gray-800 font-semibold mb-2">
                                Lorem Ipsum Dolor Sit Amet
                                <br />
                                Consectetuer Adipiscing
                            </h1>
                            <div className="flex relative mt-4 md:w-[40px] w-full">
                                <input
                                    type="text"
                                    id="hero-field"
                                    name="hero-field"
                                    className="py-4 px-6 w-[30%] rounded-[50px] 
                                     text-gray-400"
                                    placeholder="Enter your email id"
                                    style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
                                />
                                <button class="text-white bg-[#00CE86] border-0 py-2 px-36 mt-4 focus:outline-none  rounded text-lg">Subscribe</button>
                            </div>
                        </div>
                        <div className="w-full md:w-auto mt-4 md:mt-0">
                            <Image alt="ecommerce" src="/assests/housenew.png" width={605} height={253} className="w-full h-[20%] md:w-[605px] md:h-[253px]" />
                        </div>
                    </div>
                </div>
            </div>
            <footer class="  text-gray-100 bg-[#060B1C] body-font item-center" style={{ paddingTop: "300px" }}>
                <div class="container px-14  mx-auto  relative   col-span-3">
                    <div class="flex flex-wrap md:text-left text-center order-first">
                        <div class=" md:w-1/2">
                            <Image src="/assests/log.png" width={150} alt="project logo" height={100} className="mb-5 " />
                            <nav class="max-w-2 " style={{ lineHeight: "30px" }}>
                                <p class="">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy <br /> nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi <br />enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis <br /> nisl ut aliquip ex ea commodo consequat.   </p>
                            </nav>
                        </div>
                        <div className="md:w-1/2 flex 1  text-left pt-12 ">
                            <div style={{ flex: 1, }}>
                                <nav class="list-none mb-4" style={{ lineHeight: "30px" }}>
                                    <li>
                                        <a class="text-gray-100 ">About us</a>
                                    </li>
                                    <li>
                                        <a class="text-gray-100 ">Login</a>
                                    </li>
                                    <li>
                                        <a class="text-gray-100 ">Contact Us</a>
                                    </li>
                                    <li>
                                        <a class="text-gray-100 ">Register</a>
                                    </li>
                                </nav>
                            </div>
                            <div style={{ flex: 1, }}>
                                <nav class="list-none mb-5" style={{ lineHeight: "30px" }}>
                                    <li>
                                        <a class="text-gray-100 ">FAQs</a>
                                    </li>
                                    <li>
                                        <a class="text-gray-100 ">Blogs</a>
                                    </li>
                                    <li>
                                        <a class="text-gray-100 ">Support</a>
                                    </li>
                                </nav>
                            </div>
                            <div style={{ flex: 1, }}>
                                <h1 class="title-font font-semibold text-gray-100 tracking-widest text-sm mb-3">Follow Us</h1>
                                <div class="grid grid-cols-3 gap-2 items-center">
                                    <a class="rounded-full  " style={{ borderRadius: "100px", border: "1px solid #00CE86", backgroundColor: "#transparent", padding: "6px", width: "30px", height: "30px" }}>
                                        <FaWhatsapp />
                                    </a>
                                    <a class="rounded-full " style={{ borderRadius: "100px", border: "1px solid #00CE86", backgroundColor: "#transparent", padding: "6px", width: "30px", height: "30px" }}>
                                        <FaInstagram />
                                    </a>
                                    <a class="rounded-full " style={{ borderRadius: "100px", border: "1px solid #00CE86", backgroundColor: "#transparent", padding: "6px", width: "30px", height: "30px" }}>
                                        <FaFacebookF />
                                    </a>
                                    <a class="rounded-full " style={{ borderRadius: "100px", border: "1px solid #00CE86", backgroundColor: "#transparent", padding: "6px", width: "30px", height: "30px" }}>
                                        <BsTwitterX />
                                    </a>
                                    <a class="rounded-full " style={{ borderRadius: "100px", border: "1px solid #00CE86", backgroundColor: "#transparent", padding: "6px", width: "30px", height: "30px" }}>
                                        <FiYoutube />
                                    </a>
                                    <a class="rounded-full " style={{ borderRadius: "100px", border: "1px solid #00CE86", backgroundColor: "#transparent", padding: "6px", width: "30px", height: "30px" }}>
                                        <FaLinkedinIn />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </section >
    );
};

export default Footer;
