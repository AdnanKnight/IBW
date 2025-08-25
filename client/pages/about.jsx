import React from "react";
import { NavLink } from "react-router-dom";

/**
 * About.jsx
 *
 * A responsive, accessible "About" page component for IBW (Islamic Book World).
 * - Uses Tailwind CSS classes (adjust if you use different styling).
 * - Self-contained copy: mission, services (books, boxes, printed goods), values, contact CTA.
 * - Replace placeholder images/links with your real assets as needed.
 */

const About = () => {
    return (
        <main className="bg-gradient-to-b from-white to-gray-100 min-h-screen text-gray-800">
            <section className="max-w-6xl mx-auto px-6 py-12 md:py-20">
                {/* Hero */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                            Islamic Book World — IBW
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 mb-6">
                            At IBW (Islamic Book World) we craft beautiful printed books and
                            bespoke packaging — from Qur’an boxes and Nikah Nama folders to
                            gift boxes and custom printed stationery. We combine traditional
                            reverence with modern production to deliver products that honour
                            your faith and special moments.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <NavLink
                                to="/"
                                className="inline-flex items-center justify-center px-5 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
                            >
                                Browse Catalog
                            </NavLink>
                            <NavLink
                                to="/contact"
                                className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                            >
                                Contact Us
                            </NavLink>
                        </div>
                    </div>

                    <div className="rounded-xl overflow-hidden shadow-lg">
                        {/* Replace with a brand photograph or product collage */}
                        <img
                            src="https://via.placeholder.com/900x600?text=IBW+Products+%7C+Books+%26+Boxes"
                            alt="IBW product collage: books and custom boxes"
                            className="w-full h-64 md:h-80 object-cover bg-gray-200"
                        />
                    </div>
                </div>

                {/* What we do */}
                <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-xl font-semibold mb-3">Printed Books</h3>
                        <p className="text-gray-600">
                            High-quality printing for Qur’ans, religious texts, children’s
                            Islamic books, and educational materials. Options for paper
                            grade, binding, embossing and foil stamping.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-xl font-semibold mb-3">Bespoke Boxes & Packaging</h3>
                        <p className="text-gray-600">
                            Custom boxes for Qur’an sets, Nikah Namah folders, gift boxes,
                            and corporate packaging — handcrafted designs with secure,
                            elegant presentation.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-xl font-semibold mb-3">Personalisation & Fulfilment</h3>
                        <p className="text-gray-600">
                            Personalised names, inscriptions, and bulk order fulfilment for
                            mosques, weddings, schools, and events. We handle printing,
                            packing, and logistics.
                        </p>
                    </div>
                </section>

                {/* Our values */}
                <section className="mt-16 bg-gradient-to-r from-white to-gray-50 p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4">Our Values</h2>
                    <ul className="space-y-3 text-gray-700">
                        <li>
                            <strong>Respect & Reverence</strong> — We treat religious material
                            with the highest regard and follow respectful production practices.
                        </li>
                        <li>
                            <strong>Craftsmanship</strong> — Attention to detail in printing,
                            finishing and packaging.
                        </li>
                        <li>
                            <strong>Reliability</strong> — Timely delivery, transparent pricing,
                            and consistent quality control.
                        </li>
                    </ul>
                </section>

                {/* How it works */}
                <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-white rounded-lg shadow">
                        <h4 className="font-semibold mb-2">1. Tell Us Your Needs</h4>
                        <p className="text-gray-600">Share design, size, quantity and any personalisation details.</p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow">
                        <h4 className="font-semibold mb-2">2. Approve Design</h4>
                        <p className="text-gray-600">We send a proof; you confirm before production starts.</p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow">
                        <h4 className="font-semibold mb-2">3. Production & Delivery</h4>
                        <p className="text-gray-600">We print, finish and deliver — with quality checks at every step.</p>
                    </div>
                </section>

                {/* Contact / CTA */}
                <section className="mt-16 bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-xl font-bold mb-2">Ready to get started?</h3>
                        <p className="text-gray-600">Send your brief or request a quote — we’ll reply within one business day.</p>
                    </div>
                    <div className="flex gap-3">
                        <NavLink to="/contact" className="px-5 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">Request Quote</NavLink>
                        <a href="mailto:islamicbookworld.official@gmail.com" className="px-5 py-3 border rounded-lg hover:bg-gray-50 transition">Email Us</a>
                    </div>
                </section>

                {/* Footer tiny */}
                <footer className="mt-10 text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Islamic Book World (IBW). All rights reserved.</p>
                </footer>
            </section>
        </main>
    );
};

export default About;
