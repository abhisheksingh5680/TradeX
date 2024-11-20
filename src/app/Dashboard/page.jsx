import Image from "next/image"
import React from 'react';
import Sidebar from "../../../(Components)/Sidebar/sidebar"
import Details from "../../../(Components)/Details/details"
export default function Dashboard() {
    return (
        <div className="container  max-h-screen flex">
            <Sidebar />
            {/* Main Content */}
            <main className="relative mx-auto h-full p-6 bg-[#E8F9F3]">
                {/* Header */}
                <header className="flex justify-between items-center mb-8">
                    <div className="flex items-center bg-white space-x-6">
                        <input
                            type="text"
                            placeholder="Search"
                            className="border p-2 rounded"
                        />
                        <div className="bg-gray-300 w-10 h-10 rounded-full"></div>
                    </div>
                </header>
                <h1 className="text-3xl text-black font-bold">Top Trending</h1>
                <span className="text-gray-400 ">Lorem ipsum dolor sit amet,consectetuer.</span>
                <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-5 mb-6">
                    <div className=" bg-white py-5 px-6 gap-4 rounded shadow">
                        <div className="flex gap-4 items-center">
                            <Image src="/assests/logo1.png" alt="" height={50} width={50} />
                            <h1 className='text-black font-bold'>Trade Company Name</h1>
                        </div>
                        <div className="flex gap-2 items-center ">
                            <p className="text-xl text-black font-semibold -mb-20">$21,000</p>
                            <span className="text-[#E25252] -mb-20">-1.25%</span>
                            <Image src="/assests/dwnarrow.png" alt="" class="h-[10px] w-[10px] -mb-20" height={1000} width={1000} />
                            <Image src="/assests/graph2.png" alt="" class="h-[80px] w-[170px]" height={1000} width={1000} />
                        </div>
                    </div>
                    <div className=" bg-white p-6    gap-4 rounded shadow">
                        <div className="flex gap-4 items-center ">
                            <Image src="/assests/logo2.png" alt="" height={50} width={50} />
                            <h1 className='text-black font-bold'>Trade Company Name</h1>
                        </div>
                        <div className="flex gap-2 items-center ">
                            <p className="text-xl text-black -mb-20 font-semibold">$21,000</p>
                            <span className="text-green-600 -mb-20 ">-1.25%</span>
                            <Image src="/assests/upperarrow1.png" alt="" class="h-[10px] w-[10px] -mb-20" height={1000} width={1000} />
                            <Image src="/assests/graph1.png" alt="" class="h-[80px] w-[170px]" height={1000} width={1000} />
                        </div>
                    </div>
                    <div className=" bg-white p-4 gap-4 rounded shadow">
                        <div className="flex gap-4 items-center ">
                            <Image src="/assests/logo2.png" alt="" height={50} width={50} />
                            <h1 className='text-black font-bold'>Trad</h1>
                            <p className="text-xl text-black font-semibold">$21,000</p>
                        </div>

                    </div>
                </section>
                <h2 className="text-2xl text-black font-bold mb-4 ">Trader List</h2>
                {/* Trader List */}
                <section className=" p-6 rounded shadow bg-white">
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-left">
                            <thead>
                                <tr className="flex space-between items-center width-full gap-16">
                                    <th className="text-black">Company Name</th>
                                    <th className="text-black pl-16">Price/Unit</th>
                                    <th className="text-black">Title</th>
                                    <th className="text-black">Change</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr className=" flex space-between  items-center width-full gap-16">
                                    <td className=" p-2 text-black flex items-center gap-3 ">
                                        <Image src="/assests/goal.png" alt="" height={44} width={44} />
                                        Trade Company
                                    </td>
                                    <td className=" text-black">56AUD/Unit</td>
                                    <td className=" text-black"></td>
                                    <td className="pl-6 text-green-600">+2.25%</td>
                                    <td className=" flex gap-4">
                                        <button className="bg-red-500 text-white px-8 py-2 rounded-lg">Sell</button>
                                        <button className="bg-green-500 text-white px-8 py-2 ml-2XXXXX rounded-lg">Buy</button>
                                    </td>
                                </tr>
                                <tr className=" flex space-between  items-center width-full gap-16">
                                    <td className=" p-2 text-black flex items-center gap-3 ">
                                        <Image src="/assests/goalb.png" alt="" height={44} width={44} />
                                        Trade Company
                                    </td>
                                    <td className=" text-black">56AUD/Unit</td>
                                    <td className=" text-black"></td>
                                    <td className="pl-6 text-green-600">+2.25%</td>
                                    <td className=" flex gap-4">
                                        <button className="bg-red-500 text-white px-8 py-2 rounded-lg">Sell</button>
                                        <button className="bg-green-500 text-white px-8 py-2 ml-2XXXXX rounded-lg">Buy</button>
                                    </td>
                                </tr>
                                <tr className=" flex space-between  items-center width-full gap-16">
                                    <td className=" p-2 text-black flex items-center gap-3 ">
                                        <Image src="/assests/goalc.png" alt="" height={44} width={44} />
                                        Trade Company
                                    </td>
                                    <td className=" text-black">56AUD/Unit</td>
                                    <td className=" text-black"></td>
                                    <td className="pl-6 text-green-600">+2.25%</td>
                                    <td className=" flex gap-4">
                                        <button className="bg-red-500 text-white px-8 py-2 rounded-lg">Sell</button>
                                        <button className="bg-green-500 text-white px-8 py-2 ml-2XXXXX rounded-lg">Buy</button>
                                    </td>
                                </tr>
                                <tr className=" flex space-between  items-center width-full gap-16">
                                    <td className=" p-2 text-black flex items-center gap-3 ">
                                        <Image src="/assests/goald.png" alt="" height={44} width={44} />
                                        Trade Company
                                    </td>
                                    <td className=" text-black">56AUD/Unit</td>
                                    <td className=" text-black"></td>
                                    <td className="pl-6 text-green-600">+2.25%</td>
                                    <td className=" flex gap-4">
                                        <button className="bg-red-500 text-white px-8 py-2 rounded-lg">Sell</button>
                                        <button className="bg-green-500 text-white px-8 py-2 ml-2XXXXX rounded-lg">Buy</button>
                                    </td>
                                </tr>
                                <tr className=" flex space-between  items-center width-full gap-16">
                                    <td className=" p-2 text-black flex items-center gap-3 ">
                                        <Image src="/assests/goale.png" alt="" height={44} width={44} />
                                        Trade Company
                                    </td>
                                    <td className=" text-black">56AUD/Unit</td>
                                    <td className=" text-black"></td>
                                    <td className="pl-6 text-green-600">+2.25%</td>
                                    <td className=" flex gap-4">
                                        <button className="bg-red-500 text-white px-8 py-2 rounded-lg">Sell</button>
                                        <button className="bg-green-500 text-white px-8 py-2 ml-2XXXXX rounded-lg">Buy</button>
                                    </td>
                                </tr>
                                <div className="flex items-center justify-end space-x-2 mt-4 text-sm">
                                    <span className="text-gray-900 ">Showing 1 to 5 of 32 entries</span>
                                    <div className="flex space-x-1 ">
                                        <button className="px-2 py-1 rounded text-black">1</button>
                                        <button className="px-2 py-1 rounded text-black">2</button>
                                        <button className="px-2 py-1 rounded text-black bg-blue-500">3</button>
                                        <button className="px-2 py-1 rounded text-black">4</button>
                                        <button className="px-2 py-1 rounded text-black">5</button>
                                        <button className="px-2 py-1 rounded text-black">6</button>
                                        <button className="px-2 py-1 rounded text-black">7</button>
                                    </div>
                                </div>
                            </tbody>
                        </table>
                    </div>
                </section>
                <div className="h-[100px]" />
            </main>

            <Details />
        </div >
    );
}









// import Image from "next/image"
// const dash = () => {
//     return (
//         <div class="min-h-screen flex flex-row">
//             <div class="bg-white w-1/5 p-6 border-r hidden md:block">
//                 <div class="mb-6">
//                     <h1 class="text-2xl font-bold text-green-600">ENERGY TRADEX</h1>
//                 </div>
//                 <nav>
//                     <ul>
//                         <li class="mb-4">
//                             <a href="#" class="flex items-center space-x-2 text-lg text-green-600">
//                                 <span>Dashboard</span>
//                             </a>
//                         </li>

//                     </ul>
//                 </nav>
//             </div>

//             <div class="flex-1 p-6">

//                 <div class="flex justify-between items-center mb-8">
//                     <div>
//                         <input type="text" placeholder="Search" class="bg-white px-4 py-2 rounded-lg shadow-md" />
//                     </div>
//                     <div class="flex items-center space-x-4">
//                         <div>
//                             <Image src="/assests/dash.png" alt="Profile" class="w-10 h-10 rounded-full" width={100} height={100} />
//                         </div>
//                         <div>
//                             <p class="font-bold">Prageet Makreri</p>
//                         </div>
//                     </div>
//                 </div>


//                 <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">

//                     <div class="bg-white p-6 rounded-lg shadow-md">
//                         <h2 class="text-xl font-semibold">Trade Company Name</h2>
//                         <div class="mt-4">
//                             <p class="text-2xl font-bold">$21,000</p>
//                             <span class="text-red-500">-1.25%</span>
//                         </div>
//                     </div>

//                 </div>

//                 <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">

//                     <div class="bg-white p-6 rounded-lg shadow-md col-span-1 lg:col-span-1">
//                         <h2 class="text-xl font-semibold">My Portfolio</h2>
//                         <p class="text-2xl font-bold mt-4">$88,000</p>
//                         <p>Investment: $88,000</p>
//                     </div>


//                     <div class="col-span-1 lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
//                         <table class="w-full">
//                             <thead>
//                                 <tr class="text-left text-gray-600">
//                                     <th>Company Name</th>
//                                     <th>Price/Unit</th>
//                                     <th>Change</th>
//                                     <th></th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 <tr>
//                                     <td>Trade Company</td>
//                                     <td>56 AUD/Unit</td>
//                                     <td class="text-green-500">+2.25%</td>
//                                     <td>
//                                         <button class="bg-green-500 text-white px-4 py-2 rounded-md">Buy</button>
//                                         <button class="bg-red-500 text-white px-4 py-2 rounded-md ml-2">Sell</button>
//                                     </td>
//                                 </tr>

//                             </tbody>
//                         </table>
//                     </div>
//                 </div>


//                 <div>
//                     <ul class="flex space-x-4 mb-6">
//                         <li class="text-green-600 border-b-2 border-green-600 pb-2">Live</li>
//                         <li class="text-gray-500">Executed</li>
//                     </ul>
//                     <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
//                         <div class="bg-white p-6 rounded-lg shadow-md">
//                             <p>Group Name</p>
//                             <p class="text-2xl font-bold">$21,000</p>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </div>

//     )
// }
// export default dash
