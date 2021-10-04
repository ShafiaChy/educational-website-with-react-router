import React from 'react';
import Page from '../../Images/sad.png'
const NotFound = () => {
    return (
        <div className="flex justify-center mt-40">
             
            <div>
                <img src={Page} alt="" />
                <h3 className="text-4xl ml-5">Error 404</h3>
                <p className="ml-7">Page Not Found</p>
            </div>
       
        </div>
    );
};

export default NotFound;