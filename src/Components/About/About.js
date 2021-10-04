import React from 'react';
import about from '../../Images/Aboutbanner.jpg'

const About = () => {
    return (
        <div className="grid grid-cols-2 items-center pt-20 pb-72">
            <div className="w-8/12 ml-44">
                <h1>
                    <p className="text-2xl">
                    We help organizations of all types and sizes prepare for the path ahead — wherever it leads. Our curated collection of business and technical courses help companies, governments, and nonprofits go further by placing learning at the center of their strategies.
                    </p>
                </h1>
            </div>
            <div className="w-7/12">
                <img src={about} alt="" />
            </div>
        </div>
    );
};

export default About;