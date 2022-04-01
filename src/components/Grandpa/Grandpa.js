import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

export const RingContext = createContext('Ring')
const Grandpa = () => {
    const [house, setHouse] = useState(1)
    const special = 'DimondRing';
    const handleBuyAHouse = ()=>{
        const newHouse = house + 1;
        setHouse(newHouse)
    }

    
    return (
       <RingContext.Provider value=' alur ring'>
            <div className='grandpa-container'>
            <h1>Grandpa</h1>
            <p>House: {house}</p>
            <button onClick={handleBuyAHouse}>
                Buy House
            </button>
           <div style={{display:'flex'}}>
           <Father house = {house} special ={special}></Father>
            <Uncle house = {house}></Uncle>
            <Aunty house = {house}></Aunty>
           </div>
            
        </div>
       </RingContext.Provider>
    );
};

export default Grandpa;