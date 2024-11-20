import Image from "next/image"
const Header = () => {
    return (
        <header className=" text-black-600  body-font p-8 md:hidden">
            <div className="container mx-auto flex flex-wrap   flex-col md:flex-row items-center" style={{ padding: "10px 0 0 10px" }}>
                <a className="flex title-font font-medium items-center text-gray-900   ">
                    <Image src="/assests/logo.png" width={150} alt="project logo" height={100} />
                </a>
                <nav className="mt-5 md:mt-0  md:ml-auto flex  items-center font-medium text-gray-900 text-base justify-center"
                >
                    <div className="flex items-center">
                        <ul style={{
                            float: "right",
                            listStyle: "none",
                            margin: "0",
                            padding: "0"

                        }}>
                            <li style={{
                                float: "left",
                            }}>
                                <a className=" hover:text-gray-900 font-medium" style={{
                                    padding: "2px 15px",
                                }}>About Us</a>
                            </li>
                            <li style={{
                                float: "left",
                            }}>
                                <a className="  hover:text-gray-900 font-medium" style={{
                                    padding: "2px 15px",
                                }}>Contact Us</a>
                            </li>
                        </ul>


                        {/* <a className="mr-12 sm:mr-8 hover:text-gray-900 font-medium">About Us</a>
                        <a className="mr-8  hover:text-gray-900 font-medium">Contact Us</a> */}
                        <button className="inline-flex items-center bg-emerald-200 text-black-600 border-0 rounded-full
                         py-2 px-8 focus:outline-none  text-base mr-8  md:mt-0">Login
                        </button>
                    </div>

                    {/* <button className="inline-flex items-center bg-green-500 text-black-600 border-0 rounded-full py-3 px-8 focus:outline-none  text-base  mr-8 md:mt-0">Register
                    </button> */}
                </nav>
            </div>
        </header>
    )
}
export default Header
