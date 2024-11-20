"use client";
import React, { useState } from "react"; // Import useState
import TradeDetailsCard from "../../../(Components)/Details/details";
import Sidebar from "../../../(Components)/Sidebar/sidebar";
import Adddetails from "../../../(Components)/Adddetatils/details"
import Avtar from "../../../(Components)/avtar/avtar";
import Image from "next/image";
import { Search, Bell } from 'lucide-react';

const traderData = [...Array(10)].map((_, index) => ({
    id: index + 1,
    companyName: "Trade Company  ",
    price: "56 AUD/Unit",
    amount: "$21,000",
    percentage: "+2.25%",
}));
const TraderList = () => {
    const [selectedTrader, setSelectedTrader] = useState(null);
    return (
        <div class="container flex mx-auto bg-[#E8F9F3]">
            <Sidebar />

            <div className="p-6 bg-gray-100 min-h-screen">
                <div className="flex   relative  justify-between mb-6">
                    <div className="relative md:w-1/2">
                        <input
                            type="text"
                            placeholder="Search"
                            className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 w-64 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                        <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="p-2 rounded-full hover:bg-gray-100">
                            <Bell size={20} className="text-gray-600" />
                        </button>
                        <div className="flex items-center text-black gap-3">
                            <Image
                                src="/assests/prageet.png"
                                alt="Profile"
                                className="w-8 h-8 rounded-full"
                                width={32}
                                height={32}
                            />
                            <div>
                                <div className="text-sm text-gray-500">@prageetdecoded</div>
                                <div className="font-medium">Prageet Makreri</div>
                            </div>
                        </div>
                    </div>
                </div>

                <h1 className=" text-gray-950 text-2xl font-bold mb-2">Trader List</h1>
                <p className="text-gray-500 mb-6">
                    Lorem ipsum dolor sit amet, consectetuer.
                </p>
                <div className="bg-white rounded-xl shadow">
                    <tr className="grid grid-cols-1 md:grid-cols-7 p-4 font-medium text-gray-500">
                        <tr className="">Company Name  </tr>
                        <tr className="ml-10">Price/Unit</tr>
                        <tr className="ml-10">Amount</tr>
                        <tr className="ml-10">Percentage</tr>
                        <tr className="col-span-2"></tr>
                    </tr>
                    {traderData.map((trader) => (
                        <table
                            key={trader.id}
                            className="grid grid-cols-1 md:grid-cols-7 items-center p-4 border-t border-gray-100 cursor-pointer"
                            onClick={() => setSelectedTrader(trader)}>
                            <Avtar>
                                <Image src="/assests/LOGOO.png" alt="sale" width={30} height={30} className=" items-center rounded-full" /></Avtar>
                            <tr className=" flex-center text-black ">{trader.companyName}
                                <span className="text-gray-500 text-xs"> $200/100U US</span>
                            </tr>
                            <tr className="text-black">{trader.price}</tr>
                            <tr className="text-black">{trader.amount}</tr>
                            <tr className="text-green-500">{trader.percentage}</tr>
                            <tr className="col-span-2 flex justify-end gap-8">
                                <button className="px-10 py-2 rounded-lg bg-red-500 text-white">
                                    Sell
                                </button>
                                <button className="px-10 py-2 rounded-lg bg-green-500 text-white">
                                    Buy
                                </button>
                            </tr>
                        </table>
                    ))}
                    <div className="p-4 border-t border-gray-100 flex justify-between items-center">
                        <div className="text-sm text-gray-500">
                            Showing 1 to 5 of 32 entries
                        </div>
                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5, 6, 7].map((page) => (
                                <button
                                    key={page}
                                    className={`w-8 h-8 flex items-center justify-center rounded ${page === 1 ? "bg-blue-500 text-white" : "text-gray-500"
                                        }`}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Render TradeDetailsCard only if a trader is selected */}
                {selectedTrader && (
                    <div className="mt-6 w-full md:w-3/4 p-6 bg-gray-100">
                        {" "}
                        {/* Responsive width for details */}
                        <TradeDetailsCard trader={selectedTrader} />{" "}
                        {/* Pass selected trader to TradeDetailsCard */}
                    </div>
                )}
            </div>

            <Adddetails />
        </div>
    );
};

export default TraderList;
