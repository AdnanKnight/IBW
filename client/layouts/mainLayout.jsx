import React from 'react';
import { Outlet } from 'react-router-dom';

// Components
import SideBar from '../components/sideBar.jsx';
import Navbar from '../components/navbar';
import Footer from '../components/footer.jsx';


const MainLayout = () => {
    return (
        <div className="mainLayoutContainer">
            <div className='sideBarContainer'>
                <SideBar />
            </div>

            {/* Scrollable Content */}
            <div className='navContentAndFooterContainer'>
                <div className="navBarContainer">
                    <Navbar />
                </div>

                <main className='output'>
                    <Outlet />
                    
                    <div className="footerContainer">
                        <Footer />
                    </div>
                </main>

            </div>
        </div>
    );
};

export default MainLayout;
