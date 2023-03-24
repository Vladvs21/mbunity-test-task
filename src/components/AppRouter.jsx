import React from 'react'
import { Routes, Route } from 'react-router-dom'

import ContactUs from '../pages/ContactUs/ContactUs.jsx';
import Page404 from '../pages/404/Page404.jsx'

import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'

const AppRouter = () => {
    return (
        <>
            <Header />

            <Routes>
                <Route path='/contact' element={<ContactUs />} />
                <Route path='*' element={<Page404 />} />
            </Routes>

            <Footer />
        </>
    );
};

export default AppRouter;