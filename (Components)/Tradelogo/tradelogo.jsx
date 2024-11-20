"use client";

import React from 'react';

const TradeLogo = ({ traders = [], setSelectedTrader, defaultColor = "bg-blue-600" }) => {
    return (
        <div className="w-full">
            {traders.map((trader) => (
                <div
                    key={trader.id}
                    className="grid grid-cols-1 md:grid-cols-6 items-center p-4 border-t border-gray-100 cursor-pointer hover:bg-gray-50"
                    onClick={() => setSelectedTrader(trader)}
                >
                    <div className="flex items-center gap-3">
                        <div
                            className={`w-10 h-10 rounded-full ${trader.color || defaultColor} flex items-center justify-center`}
                        >
                            {/* Add content inside the circle if needed */}
                            {trader.logo || trader.initials}
                        </div>
                        <div className="font-medium">{trader.name}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TradeLogo;