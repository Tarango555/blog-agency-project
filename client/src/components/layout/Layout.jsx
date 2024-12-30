import React from 'react';
import AppNavbar from '../navbar/AppNavbar.jsx';
import Footer from '../footer/Footer.jsx';

const Layout = (props) => {
    return (
        <div>
            <AppNavbar />
            {props.children}
            <Footer />
        </div>
    );
};

export default Layout;