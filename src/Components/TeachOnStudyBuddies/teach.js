import React from 'react';
import Teacher from '../../Images/teacher.jpg'

// extra route section
const teach = () => {
    return (
        <div className="grid grid-cols-2 items-center pt-20 pb-72">
            <div className="w-8/12 ml-44">
                <h1 className="text-3xl font-bold">Come Teach With Us</h1>
                <p className="text-green-600">Let's change the lives of the students</p>
                <br />
                <form> 
                  <button class="text-white py-2 px-5 rounded bg-green-700 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 ...">Get Started</button>
                </form>
            </div>
            <div className="w-7/12">
                <img src={Teacher} alt="" />
            </div>
        </div>
    );
};

export default teach;