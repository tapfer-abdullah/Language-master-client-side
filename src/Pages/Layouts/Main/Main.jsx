import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../SharedPages/Header';
import Footer from '../../SharedPages/Footer';

const Main = () => (
    <div className='max-w-7xl mx-auto'>
        <Header></Header>
        <Outlet></Outlet>
        <Footer />
    </div>
);

export default Main;