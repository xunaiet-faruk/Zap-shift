"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const Page = () => {
    const [formData, setFormData] = useState({
        // Parcel Details
        discount: "no",
        parcelName: "",
        parcelWeight: "",

        // Sender Details
        senderName: "",
        senderAddress: "",
        senderPhone: "",
        senderDistrict: "",
        senderPickupInfo: "",

        // Receiver Details
        receiverName: "",
        receiverAddress: "",
        receiverPhone: "",
        receiverDistrict: "",
        receiverDeliveryInfo: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: "" }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.parcelName) newErrors.parcelName = "Parcel name is required";
        if (!formData.parcelWeight) newErrors.parcelWeight = "Parcel weight is required";
        if (!formData.senderName) newErrors.senderName = "Sender name is required";
        if (!formData.senderAddress) newErrors.senderAddress = "Sender address is required";
        if (!formData.senderPhone) newErrors.senderPhone = "Sender phone is required";
        if (!formData.senderDistrict) newErrors.senderDistrict = "Sender district is required";
        if (!formData.receiverName) newErrors.receiverName = "Receiver name is required";
        if (!formData.receiverAddress) newErrors.receiverAddress = "Receiver address is required";
        if (!formData.receiverPhone) newErrors.receiverPhone = "Receiver phone is required";
        if (!formData.receiverDistrict) newErrors.receiverDistrict = "Receiver district is required";

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm();
        if (Object.keys(newErrors).length === 0) {
            console.log("Form submitted:", formData);
            alert("Parcel booking submitted successfully!");
            // Reset form or handle submission
        } else {
            setErrors(newErrors);
        }
    };

    const districts = [
        "Dhaka", "Chittagong", "Khulna", "Rajshahi", "Sylhet",
        "Barisal", "Rangpur", "Mymensingh", "Comilla", "Narayanganj"
    ];

    return (
        <div className="min-h-screen  py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#03373d] mb-4">
                        Send a <span className="text-[#caeb66]">Parcel</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Fast, reliable, and affordable parcel delivery service across Bangladesh.
                        Fill out the form below to schedule your pickup.
                    </p>
                </div>

                {/* Main Form */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-3xl shadow-2xl overflow-hidden"
                >
                    <div className="p-6 md:p-8">
                        {/* Parcel Details Section */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-[#03373d] mb-4 flex items-center gap-2">
                                <span className="w-1 h-8 bg-[#caeb66] rounded-full"></span>
                                Parcel Details
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Discount Option */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Discount Option
                                    </label>
                                    <div className="flex gap-4">
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="discount"
                                                value="yes"
                                                checked={formData.discount === "yes"}
                                                onChange={handleChange}
                                                className="w-4 h-4 text-[#03373d]"
                                            />
                                            <span className="text-gray-700">With Discount</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="discount"
                                                value="no"
                                                checked={formData.discount === "no"}
                                                onChange={handleChange}
                                                className="w-4 h-4 text-[#03373d]"
                                            />
                                            <span className="text-gray-700">Without Discount</span>
                                        </label>
                                    </div>
                                    {formData.discount === "yes" && (
                                        <p className="text-sm text-green-600 mt-1">✨ 10% discount applied!</p>
                                    )}
                                </div>

                                
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                {/* Parcel Name */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Parcel Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="parcelName"
                                        value={formData.parcelName}
                                        onChange={handleChange}
                                        placeholder="e.g., Documents, Electronics, Clothes"
                                        className={`w-full px-4 py-2 border ${errors.parcelName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-[#03373d] focus:ring-2 focus:ring-[#03373d]/20`}
                                    />
                                    {errors.parcelName && (
                                        <p className="text-red-500 text-xs mt-1">{errors.parcelName}</p>
                                    )}
                                </div>

                                {/* Parcel Weight */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Parcel Weight (kg) <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="number"
                                        name="parcelWeight"
                                        value={formData.parcelWeight}
                                        onChange={handleChange}
                                        placeholder="e.g., 2.5"
                                        step="0.1"
                                        className={`w-full px-4 py-2 border ${errors.parcelWeight ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-[#03373d] focus:ring-2 focus:ring-[#03373d]/20`}
                                    />
                                    {errors.parcelWeight && (
                                        <p className="text-red-500 text-xs mt-1">{errors.parcelWeight}</p>
                                    )}
                                </div>

                            </div>
                        </div>

                        {/* Sender and Receiver Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                            {/* Sender Details */}
                            <div className="bg-gray-50 rounded-2xl p-6">
                                <h2 className="text-2xl font-bold text-[#03373d] mb-4 flex items-center gap-2">
                                    <span className="w-1 h-8 bg-blue-500 rounded-full"></span>
                                    Sender Details
                                </h2>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="senderName"
                                            value={formData.senderName}
                                            onChange={handleChange}
                                            placeholder="Enter sender's full name"
                                            className={`w-full px-4 py-2 border ${errors.senderName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-[#03373d]`}
                                        />
                                        {errors.senderName && <p className="text-red-500 text-xs mt-1">{errors.senderName}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Address <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="senderAddress"
                                            value={formData.senderAddress}
                                            onChange={handleChange}
                                            placeholder="Enter full address"
                                            className={`w-full px-4 py-2 border ${errors.senderAddress ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-[#03373d]`}
                                        />
                                        {errors.senderAddress && <p className="text-red-500 text-xs mt-1">{errors.senderAddress}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Phone Number <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            name="senderPhone"
                                            value={formData.senderPhone}
                                            onChange={handleChange}
                                            placeholder="e.g., 01XXXXXXXXX"
                                            className={`w-full px-4 py-2 border ${errors.senderPhone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-[#03373d]`}
                                        />
                                        {errors.senderPhone && <p className="text-red-500 text-xs mt-1">{errors.senderPhone}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            District <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            name="senderDistrict"
                                            value={formData.senderDistrict}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-2 border ${errors.senderDistrict ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-[#03373d]`}
                                        >
                                            <option value="">Select District</option>
                                            {districts.map(district => (
                                                <option key={district} value={district}>{district}</option>
                                            ))}
                                        </select>
                                        {errors.senderDistrict && <p className="text-red-500 text-xs mt-1">{errors.senderDistrict}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Pickup Information
                                        </label>
                                        <textarea
                                            name="senderPickupInfo"
                                            value={formData.senderPickupInfo}
                                            onChange={handleChange}
                                            rows="2"
                                            placeholder="Additional pickup instructions (e.g., gate code, floor number)"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#03373d]"
                                        ></textarea>
                                    </div>
                                </div>
                            </div>

                            {/* Receiver Details */}
                            <div className="bg-gray-50 rounded-2xl p-6">
                                <h2 className="text-2xl font-bold text-[#03373d] mb-4 flex items-center gap-2">
                                    <span className="w-1 h-8 bg-green-500 rounded-full"></span>
                                    Receiver Details
                                </h2>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="receiverName"
                                            value={formData.receiverName}
                                            onChange={handleChange}
                                            placeholder="Enter receiver's full name"
                                            className={`w-full px-4 py-2 border ${errors.receiverName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-[#03373d]`}
                                        />
                                        {errors.receiverName && <p className="text-red-500 text-xs mt-1">{errors.receiverName}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Address <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="receiverAddress"
                                            value={formData.receiverAddress}
                                            onChange={handleChange}
                                            placeholder="Enter full address"
                                            className={`w-full px-4 py-2 border ${errors.receiverAddress ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-[#03373d]`}
                                        />
                                        {errors.receiverAddress && <p className="text-red-500 text-xs mt-1">{errors.receiverAddress}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Phone Number <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            name="receiverPhone"
                                            value={formData.receiverPhone}
                                            onChange={handleChange}
                                            placeholder="e.g., 01XXXXXXXXX"
                                            className={`w-full px-4 py-2 border ${errors.receiverPhone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-[#03373d]`}
                                        />
                                        {errors.receiverPhone && <p className="text-red-500 text-xs mt-1">{errors.receiverPhone}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            District <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            name="receiverDistrict"
                                            value={formData.receiverDistrict}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-2 border ${errors.receiverDistrict ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-[#03373d]`}
                                        >
                                            <option value="">Select District</option>
                                            {districts.map(district => (
                                                <option key={district} value={district}>{district}</option>
                                            ))}
                                        </select>
                                        {errors.receiverDistrict && <p className="text-red-500 text-xs mt-1">{errors.receiverDistrict}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Delivery Information
                                        </label>
                                        <textarea
                                            name="receiverDeliveryInfo"
                                            value={formData.receiverDeliveryInfo}
                                            onChange={handleChange}
                                            rows="2"
                                            placeholder="Additional delivery instructions (e.g., landmark, preferred time)"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#03373d]"
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-[#03373d] to-[#1a5c64] text-white px-12 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                            >
                                Submit Parcel Booking
                            </button>
                            <p className="text-sm text-gray-500 mt-4">
                                By submitting, you agree to our terms and conditions
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Page;