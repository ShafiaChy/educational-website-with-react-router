import React from 'react';
import Banner from '../../Images/banner.jpg'
import Main from '../Main/Main';
import {useState,useEffect} from 'react';
// react animation import
import TextTransition, { presets } from "react-text-transition";

// website name to be animated
const TEXTS = [
    "Study",
    "Buddies"
  ];

const Home = () => {
// services data state
   const [codes, setCode] = useState([]);

//    animation code
   const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      2000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  //data load
   useEffect(() => {
       fetch('./learningCode.JSON')
       .then(res => res.json())
       .then(data => setCode(data))

       },[])
    return (
            <div>
                {/* website heading animated */}
               <div className="grid grid-cols-2 items-center bg-green-100 mx-10 pt-20 pb-52">
                    <div className="ml-64">
                    <h1 className="text-green-600 text-5xl font-bold"><TextTransition text={ TEXTS[index % TEXTS.length] } 
                    springConfig={ presets.wobbly }/></h1>
                        <br />
                        <p className="text-2xl text-green-700">A Journey to Excellence.</p>
                        <p><span className="font-bold">Study Buddies</span> is an online programming learning and teaching marketplace with over 155000 courses and 40 million students. Learn programming, marketing, data science and more.</p>
                    </div>
                    {/* website header banner */}
                    <div>
                        <img className="w-8/12 ml-20" src={Banner} alt="" />
                    </div>
                </div>
                <div className="mt-5">
                    <h1 className="text-center text-4xl font-bold">Services We <span className="text-green-700">Offer</span></h1>
                </div>

                {/* mapping out 4 services */}
                <div class="grid grid-cols-4 gap-4 mt-10 h-96 pb-24 w-11/12 mx-auto ">
                   
                    {
                        codes.map(code => <Main
                            key = {code.key}
                            code={code}
                        ></Main>)
                    }
  
                </div>
            </div>
        
    );
};

export default Home;