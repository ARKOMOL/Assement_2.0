import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ChannelPage from '../Pages/ChannelPage';
import Dashboard from '../Pages/Dashboard';
import UploadPage from '../Pages/UploadPage';
import Navbar from './Navbar';

const index = () => {
    return (
        <div>
            <BrowserRouter>
            <Navbar/>
                <Routes>
                    <Route path='/' element={<ChannelPage/>} />
                    <Route path='/upload' element={<UploadPage/>} />
                    <Route path='/dashboard' element={<Dashboard/>} />
                </Routes>
                
            </BrowserRouter>
        </div>
    );
};

export default index  ;