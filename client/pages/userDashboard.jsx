import React from "react";
import { NavLink } from 'react-router-dom'
import DefaultAvatar from "../src/assets/defaults/default-avatar.jpg";

const UserDashboard = () => {
    return (
        <main className="bg-gradient-to-b from-white to-gray-100 min-h-screen text-gray-800">
            <section className="max-w-6xl mx-auto px-6 py-12 md:py-20 space-y-12">
                {/* Hero/Profile */}
                <div className="text-center">
                    <img
                        src={DefaultAvatar}
                        alt="User Avatar"
                        className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-blue-200"
                    />
                    <h1 className="text-4xl md:text-5xl font-extrabold mt-4">Welcome back, UserName</h1>
                    <p className="text-lg text-gray-600 mt-2">
                        Here’s a quick overview of your account.
                    </p>
                </div>

                {/* Address & Billing */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow space-y-3">
                        <h2 className="text-xl font-semibold">Your Address</h2>
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                            culpa, ab consectetur inventore architecto impedit.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow space-y-3">
                        <h2 className="text-xl font-semibold">Billing Numbers</h2>
                        <p className="text-gray-600">+1 123 456 7890</p>
                        <p className="text-gray-600">+1 987 654 3210</p>
                    </div>
                </div>

                {/* Cart */}
                <div className="bg-white p-8 rounded-lg shadow">
                    <h2 className="text-2xl font-bold mb-4">Cart</h2>
                    <ul className="space-y-3">
                        <li className="flex justify-between border border-[var(--accent-light)] rounded-lg px-4 py-2 text-gray-700">
                            <span>Order No. 1</span> <span>Total-Items</span>{" "}
                            <span>$Total-price</span>
                        </li>
                        <li className="flex justify-between border border-[var(--accent-light)] rounded-lg px-4 py-2 text-gray-700">
                            <span>Order No. 2</span> <span>Total-Items</span>{" "}
                            <span>$Total-price</span>
                        </li>
                        <li className="flex justify-between border border-[var(--accent-light)] rounded-lg px-4 py-2 text-gray-700">
                            <span>Order No. 3</span> <span>Total-Items</span>{" "}
                            <span>$Total-price</span>
                        </li>
                    </ul>
                </div>

                {/* Previous Orders */}
                <div className="bg-white p-8 rounded-lg shadow">
                    <h2 className="text-2xl font-bold mb-4">Previous Orders</h2>
                    <ul className="space-y-3">
                        <li className="flex justify-between border border-[var(--accent-light)] rounded-lg px-4 py-2 text-gray-700">
                            <span>Order No. 1</span> <span>Total-Items</span>{" "}
                            <span>$Total-price</span>
                        </li>
                        <li className="flex justify-between border border-[var(--accent-light)] rounded-lg px-4 py-2 text-gray-700">
                            <span>Order No. 2</span> <span>Total-Items</span>{" "}
                            <span>$Total-price</span>
                        </li>
                        <li className="flex justify-between border border-[var(--accent-light)] rounded-lg px-4 py-2 text-gray-700">
                            <span>Order No. 3</span> <span>Total-Items</span>{" "}
                            <span>$Total-price</span>
                        </li>
                    </ul>
                </div>

                {/* Contact Support (Same as Contact Page style) */}
                <NavLink 
                    to="/contact"
                    className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h2 className="text-xl font-semibold mb-2">Our Office</h2>
                        <p className="text-gray-600">
                            Islamic Book World (IBW) <br />
                            123 Crescent Road, Green Park <br />
                            New Delhi, India 110016
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow">
                        <h2 className="text-xl font-semibold mb-2">Phone</h2>
                        <p className="text-gray-600">+91 98765 43210</p>
                        <p className="text-gray-600">+91 91234 56789</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow">
                        <h2 className="text-xl font-semibold mb-2">Email</h2>
                        <p className="text-gray-600">info@ibwbooks.com</p>
                        <p className="text-gray-600">support@ibwbooks.com</p>
                    </div>
                </NavLink>
            </section>
        </main>
    );
};

export default UserDashboard;
