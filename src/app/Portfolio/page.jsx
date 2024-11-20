"use client";

import React, { useState } from "react";
import { CheckCircle, Minus, Plus } from "lucide-react";

const TradingInterface = () => {
    const [step, setStep] = useState(0);
    const [quantity, setQuantity] = useState(100);
    const [price, setPrice] = useState(8808.08);
    const [isAccepted, setIsAccepted] = useState(false);
    const [showAdditionalFunds, setShowAdditionalFunds] = useState(false);
    const [contractAvailable, setContractAvailable] = useState(false);

    const ContractSection = ({ available }) => (
        <div className="space-y-2">
            <h3 className="font-semibold">Contract</h3>
            {available ? (
                <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                        <span>Contract.DOC</span>
                    </div>
                    <div className="text-sm text-gray-500">
                        <div>Signed by</div>
                        <div>Company A - Jul 20, 2024 10:00 PM</div>
                        <div>Company B - Jul 20, 2024 10:00 PM</div>
                    </div>
                </div>
            ) : (
                <div className="space-y-2">
                    <div className="text-gray-500">Not available</div>
                    <button className="text-green-500">Create Contract Now</button>
                </div>
            )}
        </div>
    );

    const AdditionalFundsModal = ({ onContinue, onCancel }) => (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
                <div className="text-center space-y-4">
                    <h2 className="text-lg font-semibold">
                        Sending contract required additional
                    </h2>
                    <p className="text-green-500 text-xl font-bold">5AUD</p>
                    <div className="space-y-2">
                        <button
                            onClick={onContinue}
                            className="w-full bg-green-500 text-white py-2 rounded-md"
                        >
                            Continue
                        </button>
                        <button onClick={onCancel} className="w-full text-gray-500 py-2">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    const Steps = () => {
        switch (step) {
            case 0:
                return (
                    <div className="flex flex-col space-y-4 w-full max-w-sm p-4 bg-white rounded-lg">
                        <div className="flex items-center space-x-2">
                            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                                LOGO
                            </div>
                            <div>
                                <div className="flex items-center space-x-2">
                                    <span className="font-semibold">Trade Company</span>
                                    <span className="text-gray-500 text-sm">(56 AUD/UNR)</span>
                                    <span className="font-semibold">$21,000</span>
                                </div>
                                <div className="flex items-center space-x-2 text-sm">
                                    <span>$2000/1000</span>
                                    <span>US $20,000</span>
                                    <span className="text-red-500">-8.88%</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex space-x-2">
                            <button className="flex-1 bg-red-500 text-white py-2 rounded-md">
                                Sell
                            </button>
                            <button className="flex-1 bg-green-500 text-white py-2 rounded-md">
                                Buy
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm mb-1">Price</label>
                                <div className="flex items-center space-x-2">
                                    <input
                                        type="number"
                                        value={price}
                                        onChange={(e) => setPrice(Number(e.target.value))}
                                        className="w-full p-2 border rounded-md"
                                    />
                                    <span className="text-gray-500">Avl Qty 100000</span>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm mb-1">Quantity</label>
                                <div className="flex items-center space-x-2">
                                    <button
                                        onClick={() => setQuantity((q) => q - 1)}
                                        className="p-2 border rounded-md"
                                    >
                                        <Minus size={16} />
                                    </button>
                                    <input
                                        type="number"
                                        value={quantity}
                                        onChange={(e) => setQuantity(Number(e.target.value))}
                                        className="w-full p-2 border rounded-md text-center"
                                    />
                                    <button
                                        onClick={() => setQuantity((q) => q + 1)}
                                        className="p-2 border rounded-md"
                                    >
                                        <Plus size={16} />
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm mb-1">Order Value</label>
                                <div className="text-lg font-semibold">
                                    ${(price * quantity).toFixed(2)}
                                </div>
                            </div>

                            <button
                                onClick={() => setStep(1)}
                                className="w-full bg-red-500 text-white py-2 rounded-md"
                            >
                                Sell
                            </button>
                        </div>
                    </div>
                );
            case 1:
                return (
                    <div className="flex flex-col space-y-4 w-full max-w-sm p-4 bg-white rounded-lg">
                        <div className="flex items-center space-x-2">
                            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                                LOGO
                            </div>
                            <div>
                                <div className="flex items-center space-x-2">
                                    <span className="font-semibold">Trade Company</span>
                                    <span className="text-gray-500 text-sm">(56 AUD/UNR)</span>
                                    <span className="font-semibold">$21,000</span>
                                </div>
                                <div className="flex items-center space-x-2 text-sm">
                                    <span>$2000/1000</span>
                                    <span>US $20,000</span>
                                    <span className="text-green-500">+8.88%</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="text-sm">
                                Preferences: Delivery After Payment, Advance Payment
                            </div>
                            <div className="text-sm text-gray-500">
                                Note: I want buy 100w, you delivery me on 20 Apr 2024
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="font-semibold">Trader Details</div>
                            <div className="flex justify-between">
                                <span>Company A</span>
                                <span className="text-yellow-500">Pending</span>
                            </div>
                            <div>Company B</div>
                        </div>

                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                checked={isAccepted}
                                onChange={() => setIsAccepted(!isAccepted)}
                            />
                            <span>I accept the deal</span>
                        </div>

                        <button
                            onClick={() => setStep(2)}
                            className="w-full bg-green-500 text-white py-2 rounded-md"
                        >
                            Sign Deal Ticket
                        </button>
                    </div>
                );
            case 2:
                return (
                    <div className="flex flex-col items-center space-y-4 w-full max-w-sm p-4 bg-white rounded-lg">
                        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                            <CheckCircle size={32} className="text-white" />
                        </div>
                        <h2 className="text-xl font-semibold">Deal Sign Successfully</h2>
                        <button
                            onClick={() => setStep(3)}
                            className="w-full bg-green-500 text-white py-2 rounded-md"
                        >
                            Send Contract
                        </button>
                    </div>
                );
            case 3:
                return (
                    <div className="flex flex-col space-y-4 w-full max-w-sm p-4 bg-white rounded-lg">
                        <div className="flex items-center space-x-2">
                            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                                LOGO
                            </div>
                            <div>
                                <div className="flex items-center space-x-2">
                                    <span className="font-semibold">Trade Company</span>
                                    <span className="text-gray-500 text-sm">(56 AUD/UNR)</span>
                                    <span className="font-semibold">$21,000</span>
                                </div>
                                <div className="flex items-center space-x-2 text-sm">
                                    <span>$2000/1000</span>
                                    <span>US $20,000</span>
                                    <span className="text-green-500">+8.88%</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="text-sm">
                                Preferences: Delivery After Payment, Advance Payment
                            </div>
                            <div className="text-sm text-gray-500">
                                Note: I want buy 100w, you delivery me on 20 Apr 2024
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="font-semibold">Trader Details</div>
                            <div className="flex justify-between items-center">
                                <span>Company A</span>
                                <span className="text-green-500">Accepted ✓</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Company B</span>
                                <span className="text-yellow-500">Pending ⋯</span>
                            </div>
                        </div>

                        <ContractSection available={contractAvailable} />

                        <div className="space-y-2">
                            <div className="font-semibold">Notes</div>
                            <div className="text-sm text-gray-500">wright here if notes</div>
                        </div>

                        <button
                            onClick={() => setShowAdditionalFunds(true)}
                            className="w-full bg-green-500 text-white py-2 rounded-md"
                        >
                            Send a Contract
                        </button>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <Steps />
            {showAdditionalFunds && (
                <AdditionalFundsModal
                    onContinue={() => {
                        setShowAdditionalFunds(false);
                        setContractAvailable(true);
                    }}
                    onCancel={() => setShowAdditionalFunds(false)}
                />
            )}
        </div>
    );
};

export default TradingInterface;