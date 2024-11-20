import { FaSearch } from "react-icons/fa";
import Image from "next/image";

const page = () => {
    return (
        <div className="grid grid-cols-3 bg-[#E8F9F3] lg:grid-cols-3 sm:grid-cols-1">
            {/* Sidebar */}
            <div className="grid bg-white w-[300px] px-5 sm:w-full">
                <div className="dash_logo pt-10 pb-0">
                    <a style={{ width: "100%" }}>
                        <Image
                            src="/assests/logo.png"
                            alt="project logo"
                            width={1000}
                            height={1000}
                            style={{ width: "150px" }}
                        />
                    </a>
                </div>
                <div className="py-3 dash_tabs_container">
                    {/* Sidebar Tabs */}
                    {[
                        { src: "/assests/Dashboard.png", title: "Dashboard", active: true },
                        { src: "/assests/Portfolio.png", title: "Portfolio", active: false },
                        { src: "/assests/Traderlist.png", title: "Trader List", active: false },
                        { src: "/assests/Invoice.png", title: "Invoice", active: false },
                        { src: "/assests/Account.png", title: "Account", active: false },
                        { src: "/assests/ab.png", title: "Setting", active: false },
                        { src: "/assests/Support.png", title: "24/7 Support", active: false },
                    ].map((tab, index) => (
                        <div
                            key={index}
                            className={`flex items-center justify-start ${tab.active ? "bg-[#E8F9F3]" : "bg-[#fff]"
                                } py-3 gap-3 rounded-lg`}
                            style={{ padding: "17px 25px" }}
                        >
                            <Image
                                src={tab.src}
                                width={10}
                                alt={tab.title}
                                height={10}
                                style={{ width: "10px", height: "10px" }}
                            />
                            <h2
                                className={`text-lg ${tab.active ? "text-gray-900" : "text-[#A1A1A1]"
                                    } font-bold title-font`}
                            >
                                {tab.title}
                            </h2>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-rows-3 mt-10 -ml-44 sm:ml-0">
                {/* Search */}
                <div className="flex items-center justify-between h-[50px] text-black bg-white rounded-lg w-[400px] px-5 sm:w-full">
                    <div className="text-lg text-gray-800 font-bold title-font">Search</div>
                    <div>
                        <FaSearch />
                    </div>
                </div>

                {/* Top Trending */}
                <div className="text-black">
                    <div className="">
                        <h1 className="font-semibold text-2xl ">Top Trending</h1>
                        <span className="text-gray-500 text-sm">
                            Lorem ipsum dolor sit amet, consectetuer.
                        </span>
                    </div>
                    <div className="flex gap-6 flex-wrap">
                        {[
                            { logo: "/assests/logo1.png", price: "$21,000", change: "-1.25%" },
                            { logo: "/assests/logo2.png", price: "$21,000", change: "-1.25%" },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="border border-gray-200 bg-white p-4 rounded-xl w-[400px] h-[150px] flex gap-3 mt-3 sm:w-full"
                            >
                                <div className="w-[50px] h-[50px] inline-flex items-center justify-center rounded-full text-green-100 mb-2">
                                    <Image src={item.logo} alt="project logo" width={1000} height={1000} />
                                </div>
                                <div>
                                    <h2 className="text-[20px] text-gray-900 font-medium title-font mt-2">
                                        Trade Company Name
                                    </h2>
                                    <div className="flex items-start gap-5">
                                        <h1 className="text-[30px] text-gray-900 font-semibold title-font">
                                            {item.price}
                                        </h1>
                                        <h6 className="text-[20px] text-gray-900 font-medium title-font mt-2">
                                            {item.change}
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Trader List */}
                <div className="text-black">
                    <h1 className="font-bold text-xl">Trader List</h1>
                </div>
            </div>

            {/* Right Sidebar */}
            <div className="grid grid-rows-3">
                <div>
                    <h1 className="text-black">user icon</h1>
                </div>
                <div>
                    <h1 className="text-black">My portfolio</h1>
                </div>
                <div>
                    <h1 className="text-black">Live</h1>
                </div>
            </div>
        </div>
    );
};

export default page;
