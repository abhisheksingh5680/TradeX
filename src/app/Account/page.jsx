"use client";

import Sidebar from "../../../(Components)/Sidebar/sidebar";
import { Search, Bell } from 'lucide-react';
import Image from "next/image";
export default function Home() {
    const files = [
        { name: "Contract 01.DOC", size: "88kb", status: "success" },
        { name: "Contract 02.DOC", size: "88kb", status: "success" },
        { name: "Contract 03.DOC", size: "88kb", status: "success" },
        { name: "Contract 04.DOC", size: "88kb", status: "error" },
        { name: "Contract 05.DOC", size: "88kb", status: "success" },
        { name: "Contract 06.DOC", size: "88kb", status: "success" },
    ];
    const invoices = [
        { id: "INV00001", company: "Trade Company", date: "08 Sep 2024", amount: "$2400", status: "Paid" },
        { id: "INV00002", company: "Trade Company", date: "08 Sep 2024", amount: "$2400", status: "Draft" },
        { id: "INV00003", company: "Trade Company", date: "08 Sep 2024", amount: "$2400", status: "Pending" },
        { id: "INV00004", company: "Trade Company", date: "08 Sep 2024", amount: "$2400", status: "Due" },
        { id: "INV00005", company: "Trade Company", date: "08 Sep 2024", amount: "$2400", status: "Paid" },
    ];

    const statusColor = {
        Paid: "text-green-500",
        Draft: "text-gray-400",
        Pending: "text-yellow-500",
        Due: "text-red-500",
    };
    return (
        <div className="flex w-full  ">
            <Sidebar />
            <div className=" md:w-full p-10 bg-[#E8F9F3]">

                <div className="flex   relative  justify-between mb-6">
                    <div className="relative md:w-1/2">
                        <input
                            type="text"
                            placeholder="Search"
                            className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 w-64 text-black focus:outline-none focus:ring-2 focus:ring-emerald-500"
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
                <div className="flex  gap-4 max-w-8xl">
                    <div className="flex p-6 mx-auto bg-white items-center rounded-xl shadow-md">
                        <div className="p-6  flex flex-col  text-black items-center">
                            <Image
                                src="/assests/profile.png"
                                alt="Profile"
                                width={100}
                                height={100}
                                className="w-16 h-16 rounded-full mb-4"
                            />
                            <h3 className="text-xl font-semibold">Prageet Makeri</h3>
                            <p className="text-blue-500">User ID 80008</p>
                            <p className="text-gray-600">prageet@digipanda.co.in</p>

                            <div className="flex mt-4 gap-6">
                                <div className="text-center">
                                    <p className="text-red-500 text-2xl font-bold">8</p>
                                    <p>Sell</p>
                                </div>
                                <div className="border-b border-gray-300 h-full bg-green-300 w-0.5 items-center"></div>
                                <div className="text-center">
                                    <p className="text-green-500 text-2xl font-bold">88</p>
                                    <p>Buy</p>
                                </div>
                            </div>
                            <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
                                Update Profile
                            </button>
                        </div>
                        <div className="border-b border-gray-300 h-full bg-gray-300 w-0.5 items-center">1</div>

                        <div className="space-y-2 ml-5">
                            <div className="flex justify-between text-black">
                                <div className="flex flex-col">
                                    <span className="text-gray-500">Phone Number</span>
                                    <span className="text-gray-800">+91 9415599134</span>
                                </div>
                            </div>
                            <div className="border-b border-gray-300 h-0.1 bg-gray-300 w-full"></div>

                            <div className="flex justify-between text-black">
                                <div className="flex flex-col">
                                    <span className="text-gray-500">Email</span>
                                    <span className="text-gray-800">abhishek@digipanda.com</span>
                                </div>
                            </div>
                            <div className="border-b border-gray-300 h-0.1 bg-gray-300 w-full"></div>

                            <div className="flex justify-between text-black">
                                <div className="flex flex-col">
                                    <span className="text-gray-500">Company Name</span>
                                    <span className="text-gray-800">Digipanda</span>
                                </div>

                            </div>
                            <div className="border-b border-gray-300 h-0.1 bg-gray-300 w-full"></div>

                            <div className="flex justify-between text-black">
                                <div className="flex flex-col">
                                    <span className="text-gray-500">Address</span>
                                    <span className="text-gray-800">D-111 Sector-63 Noida</span>
                                </div>

                            </div>
                            <div className="border-b border-gray-300 h-0.1 bg-gray-300 w-full"></div>

                            <div className="flex justify-between text-black">
                                <div className="flex flex-col">
                                    <span className="text-gray-500">City</span>
                                    <span className="text-gray-800">Noida</span>
                                </div>

                            </div>
                            <div className="border-b border-gray-300 h-0.1 bg-gray-300 w-full"></div>

                            <div className="flex justify-between text-black">
                                <div className="flex flex-col">
                                    <span className="text-gray-500">Zip Code</span>
                                    <span className="text-gray-800">201301</span>
                                </div>

                            </div>

                        </div>


                    </div>
                    <div className="p-5 rounded-xl bg-white shadow-md">
                        <div className="flex justify-between space-y-3 gap-28">
                            <h3 className="text-lg text-black font-semibold mb-4 items-start">Bank Details</h3>
                            <h3 className="text-sm text-green-400 font-semibold mb-4 items-end">Add Account</h3>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between text-black">
                                <div className="flex flex-col">
                                    <span className="text-gray-500">Bank Name</span>
                                    <span className="text-gray-800">Digi Bank</span>
                                </div>
                                <div>
                                    <p className="text-sm text-green-500">Edit</p>
                                </div>
                            </div>
                            <div className="border-b border-gray-300 h-0.1 bg-gray-300 w-full"></div>

                            <div className="flex justify-between text-black">
                                <div className="flex flex-col">
                                    <span className="text-gray-500">Account Number</span>
                                    <span className="text-gray-800">165515564656</span>
                                </div>
                                <div>
                                    <p className="text-sm text-green-500">Edit</p>
                                </div>
                            </div>
                            <div className="border-b border-gray-300 h-0.1 bg-gray-300 w-full"></div>

                            <div className="flex justify-between text-black">
                                <div className="flex flex-col">
                                    <span className="text-gray-500">Account Status</span>
                                    <span className="text-gray-800">Active</span>
                                </div>
                                <div>
                                    <p className="text-sm text-green-500">Edit</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className=" p-6 rounded-xl bg-white shadow-md">
                        <div className="flex justify-between space-y-3 gap-28">
                            <h3 className="text-lg text-black  font-semibold mb-4">Files / Documents</h3>
                            <h3 className="text-sm text-green-400  font-semibold mb-4">Add Files</h3>
                        </div>
                        <ul className="space-y-2 text-black">
                            {files.map((file, index) => (
                                <li
                                    key={index}
                                    className={`flex justify-between p-2 rounded-md ${file.status === "error" ? "bg-red-100" : "bg-[#E8F9F3]"
                                        }`}
                                >
                                    <span>{file.name}</span>
                                    <span>{file.size}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-around  gap-8 mt-10  min-h-screen">
                    <div className="bg-white shadow-md rounded-lg p-8 w-full md:w-1/2 mb-4 md:mb-0">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl text-black font-semibold">Note</h2>
                            <a href="#" className="text-green-500">View All</a>
                        </div>
                        {[...Array(4)].map((_, index) => (
                            <p
                                key={index}
                                className="bg-green-50 p-3 mb-2 rounded-md text-gray-600 text-sm"
                            >
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                                dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                                nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.  </p>
                        ))}
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-8 w-full md:w-1/2">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl text-black font-semibold">Invoice</h2>
                            <a href="#" className="text-green-500">View All</a>
                        </div>
                        {invoices.map((invoice) => (
                            <div key={invoice.id} className="flex justify-between items-center border-b border-gray-200 py-2">
                                <div className="flex items-center">
                                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                                        <Image src="/assests/LOGOO.png" alt="logo" width={20} height={20} />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-600">{invoice.company}</p>
                                        <p className="text-xs text-gray-400">{invoice.id}</p>
                                    </div>
                                </div>
                                <div>
                                    <span className="text-gray-500 text-sm">Due Date</span>

                                    <p className="text-gray-600 text-sm">{invoice.date}</p>

                                </div>
                                <div>
                                    <span className="text-gray-500 text-sm">Amount</span>

                                    <p className="text-gray-600 text-sm">{invoice.amount}</p>
                                </div>
                                <div className=" items-center">
                                    <span className="text-gray-500 text-sm">Status</span>

                                    <p className={`${statusColor[invoice.status]} font-bold text-sm `}>
                                        {invoice.status}
                                    </p>
                                </div>
                                <div>
                                    <a href="#" className="text-green-500 text-sm">View</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
