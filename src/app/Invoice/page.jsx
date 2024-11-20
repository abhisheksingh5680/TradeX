"use client;"


import { Search, Bell } from 'lucide-react';
import Sidebar from '../../../(Components)/Sidebar/sidebar';
import Image from 'next/image';
const InvoiceTable = () => {
    const invoices = [
        {
            id: 'INV00001',
            color: 'bg-blue-500',
            company: 'Trade Company',
            date: '08 Aug 2024',
            dueDate: '08 Sep 2024',
            amount: '$2400',
            status: 'Paid'
        },
        {
            id: 'INV00002',
            color: 'bg-pink-500',
            company: 'Trade Company',
            date: '08 Aug 2024',
            dueDate: '08 Sep 2024',
            amount: '$2400',
            status: 'Draft'
        },
        {
            id: 'INV00003',
            color: 'bg-orange-500',
            company: 'Trade Company',
            date: '08 Aug 2024',
            dueDate: '08 Sep 2024',
            amount: '$2400',
            status: 'Pending'
        },
        {
            id: 'INV00004',
            color: 'bg-yellow-500',
            company: 'Trade Company',
            date: '08 Aug 2024',
            dueDate: '08 Sep 2024',
            amount: '$2400',
            status: 'Paid'
        },
        {
            id: 'INV00005',
            color: 'bg-green-500',
            company: 'Trade Company',
            date: '08 Aug 2024',
            dueDate: '08 Sep 2024',
            amount: '$2400',
            status: 'Paid'
        },
        {
            id: 'INV00006',
            color: 'bg-blue-500',
            company: 'Trade Company',
            date: '08 Aug 2024',
            dueDate: '08 Sep 2024',
            amount: '$2400',
            status: 'Paid'
        },
        {
            id: 'INV00007',
            color: 'bg-red-500',
            company: 'Trade Company',
            date: '08 Aug 2024',
            dueDate: '08 Sep 2024',
            amount: '$2400',
            status: 'Paid'
        },
        {
            id: 'INV00008',
            color: 'bg-orange-500',
            company: 'Trade Company',
            date: '08 Aug 2024',
            dueDate: '08 Sep 2024',
            amount: '$2400',
            status: 'Paid'
        },
        {
            id: 'INV00009',
            color: 'bg-yellow-500',
            company: 'Trade Company',
            date: '08 Aug 2024',
            dueDate: '08 Sep 2024',
            amount: '$2400',
            status: 'Paid'
        },

        // Add more invoice data as needed
    ];

    const getStatusStyle = (status) => {
        const styles = {
            Paid: 'bg-emerald-50 text-emerald-500',
            Draft: 'bg-gray-50 text-gray-500',
            Pending: 'bg-yellow-50 text-yellow-500',
            Due: 'bg-red-50 text-red-500'
        };
        return styles[status] || styles.Draft;
    };

    return (
        <div className='flex mx-auto w-full container'>
            <Sidebar />
            <div className=" md:w-full p-10 bg-[#E8F9F3]">

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

                {/* Title Section */}
                <div className="mb-8">
                    <h1 className="text-2xl font-semibold mb-2 text-black">Invoice</h1>
                    <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetuer.</p>
                </div>

                {/* Table Section */}
                <div className="bg-white rounded-xl shadow-sm">
                    <div className="p-4 flex justify-between text-gray-500 items-center border-b">
                        <input
                            type="date"
                            className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search"
                                className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
                        </div>
                    </div>

                    <table className="w-full">
                        <thead>
                            <tr className="border-b">
                                <th className="w-8 p-4">
                                    <input type="checkbox" className="rounded border-gray-300" />
                                </th>
                                <th className="text-left p-4 text-gray-500 font-medium">Invoice #</th>
                                <th className="text-left p-4 text-gray-500 font-medium">Trader</th>
                                <th className="text-left p-4 text-gray-500 font-medium">Invoice Date</th>
                                <th className="text-left p-4 text-gray-500 font-medium">Due Date</th>
                                <th className="text-left p-4 text-gray-500 font-medium">Amount</th>
                                <th className="text-left p-4 text-gray-500 font-medium">Status</th>
                                <th className="text-left p-4 text-gray-500 font-medium"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {invoices.map((invoice) => (
                                <tr key={invoice.id} className="border-b hover:bg-gray-50">
                                    <td className="p-4">
                                        <input type="checkbox" className="rounded border-gray-300" />
                                    </td>
                                    <td className="p-4 text-gray-900">{invoice.id}</td>
                                    <td className="p-4">
                                        <div className="flex items-center gap-2">
                                            <div className={`w-8 h-8 rounded-full ${invoice.color} flex items-center justify-center`}>
                                                <span className="text-white text-sm"><Image src="/assests/LOGOO.png" alt="logo" width={20} height={20} /></span>
                                            </div>
                                            <span className="text-gray-900">{invoice.company}</span>
                                        </div>
                                    </td>
                                    <td className="p-4 text-gray-500">{invoice.date}</td>
                                    <td className="p-4 text-gray-500">{invoice.dueDate}</td>
                                    <td className="p-4 text-gray-900">{invoice.amount}</td>
                                    <td className="p-4">
                                        <span className={`px-3 py-1 rounded-full text-sm ${getStatusStyle(invoice.status)}`}>
                                            {invoice.status}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <button className="text-emerald-500 hover:text-emerald-600">
                                            Download
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* Pagination */}
                    <div className="p-4 flex justify-between items-center">
                        <span className="text-sm text-gray-500">
                            Showing 1 to 5 of 32 entries
                        </span>
                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5, 6, 7].map((page) => (
                                <button
                                    key={page}
                                    className={`px-3 py-1 rounded ${page === 2
                                        ? 'bg-emerald-500 text-white'
                                        : 'text-gray-500 hover:bg-gray-100'
                                        }`}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default InvoiceTable;