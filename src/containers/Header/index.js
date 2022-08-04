import React from 'react';
import {Link} from "react-router-dom";


const Header = () => {
    return(
        <div id="header">
            <div className='flex flex-col text-center items-center justify-between p-4 bg-white rounded-lg shadow-lg mb-5'>
                Boiler Plate For React Front End
            </div>
            <div className="container">
                <div className="row">
                    <span className="flex flex-col text-center items-center justify-between p-2 bg-white rounded-lg shadow-lg">Header Component</span>
                </div>
            </div>
        </div>
    )
}

export default Header;
