const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6 mt-10">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Section 1: Branding */}
                <div>
                    <h2 className="text-xl font-semibold">IBW</h2>
                    <p className="text-sm mt-2 text-gray-400">
                        Your one stop solution for all book requirements.
                    </p>
                </div>

                {/* Section 2: Navigation */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                    <ul className="space-y-1 text-gray-400">
                        <li><a href="/" className="hover:text-white">Home</a></li>
                        <li><a href="/dashboard" className="hover:text-white">Dashboard</a></li>
                        <li><a href="/projects" className="hover:text-white">Projects</a></li>
                        <li><a href="/contact" className="hover:text-white">Contact</a></li>
                    </ul>
                </div>

                {/* Section 3: Socials */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Connect</h3>
                    <ul className="flex flex-col space-x-4 text-gray-400">
                        <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a></li>
                        <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a></li>
                        <li><a href="mailto:you@example.com" className="hover:text-white">Email</a></li>
                    </ul>
                </div>
            </div>

            {/* Bottom Line */}
            <div className="mt-8 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
