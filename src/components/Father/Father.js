import React from 'react';
import Brother from '../Brother/Brother';
import MySelf from '../MySelf/MySelf';
import Sister from '../Sister/Sister';

const Father = ({house,special}) => {
    return (
        <div>
            <h1>Father</h1>
            <p>House: {house}</p>
           <div style={{display:"flex"}}>
           <MySelf house = {house} special={special}></MySelf>
            <Brother house = {house}></Brother>
            <Sister house = {house}></Sister>
           </div>
        </div>
    );
};

export default Father;