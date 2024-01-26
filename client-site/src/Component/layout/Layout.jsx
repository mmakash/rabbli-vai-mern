import React from 'react';
import AppNavBar from './AppNavBar';
import Footer from './Footer';
import { Toaster } from 'react-hot-toast';

const Layout = (props) => {
    return (
        <div>
            <AppNavBar />
                {
                    props.children
                }
                 <Toaster />
            <Footer />
        </div>
    );
};

export default Layout;