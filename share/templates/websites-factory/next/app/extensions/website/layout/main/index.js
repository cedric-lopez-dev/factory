import React from 'react';
import Navbar from '../../sections/navbar'

const index = ({ children }) => {
    return (
        <div className="w-full">
            <Navbar />
            {children}
        </div>
    );
};

export default index;