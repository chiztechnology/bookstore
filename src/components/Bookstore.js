import React from 'react'
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Books from './Books';
import Categories from './Categories';

const Bookstore = () => (
    <BrowserRouter>
        <div className='app-body'>
            <Navbar />
            {/* routes */}
            <Routes>
                <Route path='/' element={<Books />}/>
                <Route path='/books' element={<Books />} />
                <Route path='/categories' element={<Categories />} />
            </Routes>
        </div>
    </BrowserRouter>
);

export default Bookstore