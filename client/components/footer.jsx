import { NavLink } from "react-router-dom";
import { EnvelopeIcon, PhoneIcon, HomeIcon } from "@heroicons/react/24/outline";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* Branding */}
                <div>
                    <h2 className="text-2xl font-bold text-white">Islamic Book World</h2>
                    <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                        Your one-stop solution for Islamic books, Quran boxes, Nikah
                        Nama, and more. Serving knowledge with care.
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <NavLink
                                to="/"
                                className="hover:text-white transition-colors"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard"
                                className="hover:text-white transition-colors"
                            >
                                Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className="hover:text-white transition-colors"
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/admin"
                                className="hover:text-white transition-colors"
                            >
                                Admin Panel
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-center gap-2">
                            <HomeIcon className="w-5 h-5 text-green-500" />
                            New Delhi, India 110016
                        </li>
                        <li className="flex items-center gap-2">
                            <PhoneIcon className="w-5 h-5 text-green-500" />
                            +91 98765 43210
                        </li>
                        <li className="flex items-center gap-2">
                            <EnvelopeIcon className="w-5 h-5 text-green-500" />
                            support@ibwbooks.com
                        </li>
                    </ul>
                </div>

                {/* Social Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors"
                            >
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors"
                            >
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a
                                href="mailto:info@ibwbooks.com"
                                className="hover:text-white transition-colors"
                            >
                                Email
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Line */}
            <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Islamic Book World (IBW). All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
