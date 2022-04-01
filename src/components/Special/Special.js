import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({special}) => {
    const ring = useContext(RingContext)
    return (
        <div>
           <h4>special</h4>
           <p><small>Gift:{ring}</small></p>
        </div>
    );
};

export default Special;