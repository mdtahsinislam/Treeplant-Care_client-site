import React from 'react';
import { Outlet } from 'react-router';
import Home from '../components/Home';

const MainLayout = () => {
    return (
        <div>
            <Outlet>
               
            </Outlet>
        </div>
    );
};

export default MainLayout;