"use client";
// import Image from "next/image"

// const Details = () => {
//     return (
//         <>
//             <div className="container items-center gap-6 mt-5 rounded-lg  p-6 shadow-sm">
//                 <div className="bg-white relative space-y-8 mb-8 gap-10">
//                     <h2 className="mb-6 text-xl text-black font-semibold">My Portfolio</h2>
//                     <div className="flex items-center mb-8 gap-6">
//                         <Image src="/assests/gain.png" alt="" height={44} width={44} />
//                         <div>
//                             <p className="text-sm text-gray-600">Gain</p>
//                             <p className="text-xl font-bold text-gray-600">$88,000</p>
//                         </div>
//                     </div>
//                     <div className="flex items-center gap-6">
//                         <Image src="/assests/invest.png" alt="" height={44} width={44} />
//                         <div class="gap-10">
//                             <p className="text-sm text-gray-600">Investment</p>
//                             <p className="text-xl font-bold text-gray-600">$88,000</p>
//                         </div>
//                     </div>
//                 </div>
{/* <div className="space-y-3">
                {transactions.map((transaction) => (
                    <div
                        key={transaction.id}
                        className="rounded-2xl bg-gray-50/80 p-4 flex items-center justify-between"
                    >
                        <div className="flex items-center gap-3">
                            <div className={`h-12 w-12 rounded-full ${transaction.bgColor}`} />
                            <div>
                                {transaction.image}
                                <p className="font-medium">{transaction.groupName}</p>
                                <p className="text-sm text-gray-500">{transaction.company}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="font-medium">${transaction.amount}</p>
                            <p className={`text-sm ${transaction.status === 'pending'
                                ? 'text-gray-400'
                                : 'text-green-500'
                                }`}>
                                {transaction.status === 'pending' ? (
                                    <span>Pending ⏳</span>
                                ) : (
                                    <span>View →</span>
                                )}
                            </p>
                        </div>
                    </div>
                ))}
                </div> */}
// </div>

{/* <div className=" mt-10 border-b mb-6">
                <div className="flex gap-8">
                    <button
                        className="pb-2 border-b-2 border-green-500 text-green-500 font-medium">
                        Live
                    </button>
                    <button
                        className='pb-2 
                            border-b-2 border-green-500  font-medium text-gray-400'
                    >
                        Executed
                    </button>
                </div>
            </div> */}

//         </>
//     );
// };

// export default Details;


import React from 'react';
import Image from 'next/image'
const GroupCard = () => {
    return (
        <div className="bg-gray-300 rounded-lg p-4 mb-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-lg  flex items-center justify-center`}>
                        <Image src="/assests/goald.png" alt="" height={44} width={44} />
                    </div>
                    <div>
                        <h3 className="text-gray-800 font-medium">Group Name</h3>
                        <p className="text-gray-500 text-sm">Enterprise Pvt Ltd</p>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="text-gray-900 font-medium">$21,000</span>
                    <div className="flex items-center text-gray-500">
                        <span className="text-sm">Pending</span>
                        <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <span className="text-emerald-500 text-sm">View →</span>
                </div>
            </div>
        </div>
    );
};

const GroupList = () => {
    const groups = [
        { color: 'bg-rose-500', status: 'active' },
        { color: 'bg-orange-500', status: 'active' },
        { color: 'bg-purple-500', status: 'pending' },
        { color: 'bg-emerald-500', status: 'pending' }
    ];

    return (
        <div className="max-w-2xl mx-auto p-6 space-y-2">
            {groups.map((group, index) => (
                <GroupCard key={index} {...group} />
            ))}
        </div>
    );
};

export default GroupList;