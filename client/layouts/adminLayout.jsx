import React from 'react';
import { Outlet } from 'react-router-dom';

// Components
import Navbar from '../components/navbar';
import Footer from '../components/footer.jsx';

const adminLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Top Navigation */}
            <Navbar />

            {/* Main Content */}
            <main className="output flex-grow container mx-auto px-4 py-6">
                <Outlet />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default adminLayout;