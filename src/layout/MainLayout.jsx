import React from 'react';
import Navbar from '../component/shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../component/footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;