"use client";

import Sidebar from "../../../(Components)/Sidebar/sidebar";
import { useState } from "react";
import { Search, Bell } from 'lucide-react';
import { FaChevronDown } from 'react-icons/fa';
import Image from "next/image";
export default function Home() {

    const sections = [
        { title: 'Profile Setting' },
        { title: '100 Point Form' },
        { title: 'Preference Setting' },
        { title: 'Reset Password' },
        { title: 'Logout' },
        { title: 'Delete Account' },
    ];

    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (index) => {
        setOpenSection(openSection === index ? null : index);
    };
    const permission = [
        { title: 'Energy Trading' },
        { title: 'Privacy Policy' },
        { title: 'Terms of Use' },
        { title: "FAQ's" },
        { title: 'Permissions' },
    ];

    const [openPermission, setOpenPermission] = useState(null);

    const togglePermission = (index) => {
        setOpenPermission(openPermission === index ? null : index);
    };
    const setting = [
        { title: 'Help' },
        { title: 'Send Feedback' },
        { title: 'Check for Updates' },
        { title: "Need Help?" },

    ];

    return (
        <div className=" flex  w-full">
            <Sidebar />
            <div className="md:w-full p-10 bg-[#E8F9F3]">

                <div className="flex   relative  justify-between mb-6">
                    <div className="relative md:w-1/2">
                        <input
                            type="text"
                            placeholder="Search"
                            className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 w-64 text-black focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                        <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
                    </div>
                    <div className="flex  items-center gap-4  ">
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

                <div className="mb-8">
                    <h1 className="text-2xl font-semibold mb-2 text-black">Setting</h1>
                    <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetuer.</p>
                </div>
                <div className="flex justify-between gap-4">
                    <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/2">
                        <h2 className="text-xl font-semibold mb-4 text-gray-800">Account Setting</h2>
                        <div className="space-y-2">
                            {sections.map((section, index) => (
                                <div
                                    key={index}
                                    onClick={() => toggleSection(index)}
                                    className="flex justify-between items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-blue-50"
                                >
                                    <span className="text-gray-700">{section.title}</span>
                                    <FaChevronDown
                                        className={`text-black transform transition-transform ${openSection === index ? 'rotate-180' : ''
                                            }`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/2">
                        <h2 className="text-xl font-semibold mb-4 text-gray-800">Energy Trading Setting</h2>
                        <div className="space-y-2">
                            {permission.map((permission, index) => (
                                <div
                                    key={index}
                                    onClick={() => togglePermission(index)}
                                    className="flex justify-between items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-blue-50"
                                >
                                    <span className="text-gray-700">{permission.title}</span>
                                    <FaChevronDown
                                        className={` text-black transform transition-transform ${openPermission === index ? 'rotate-180' : ''
                                            }`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg  mt-10 p-6 w-full md:w-1/2">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">Energy Trading Setting</h2>
                    <div className="space-y-2">
                        {setting.map((setting, index) => (
                            <div
                                key={index}
                                onClick={() => toggleSetting(index)}
                                className="flex justify-between items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-blue-50"
                            >
                                <span className="text-gray-700">{setting.title}</span>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
