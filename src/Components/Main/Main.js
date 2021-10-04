import React from 'react';
// Services card on home and services pages
const Main = (props) => {
    // destructuring
    const {image, name, price, Tutor}=props.code;
    // displaying service information
    return (
        <div className="bg-green-800 rounded shadow-2xl pb-20 pt-3">
            {/* services picture */}
           <div className=" w-9/12 mx-auto mt-5 mb-5">
                <img className="rounded" src={image} alt="" />
           </div>

           {/* services information */}
           <div className="text-white px-5">
                <h5>Course Name: {name}</h5>
                <h5>Price: $ {price}</h5>
                <h5>Tutor: {Tutor}</h5>
            </div>
        </div>
    );
};

export default Main;