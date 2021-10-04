import React from 'react';
import {useState,useEffect} from 'react';
import Main from '../Main/Main';

//more about services
const Services = () => {
    const [codes, setMoreCode] = useState([]);

   useEffect(() => {
       fetch('./learnMore.JSON')
       .then(res => res.json())
       .then(data => setMoreCode(data))

       },[])
    return (
        <div class="grid grid-cols-4 gap-4 mt-10 h-96  pb-96 w-11/12 mx-auto mb-96">
                   {/* mapping out more services */}
                   {
                        codes.map(code => <Main
                            key = {code.key}
                            code={code}
                        ></Main>)
                    }

  
        </div>
    );
};

export default Services;