import React, { useContext } from 'react';
// Context API
import { Context } from '../../App';

const Special = (props) => {
    const {ornaments} = props;
    
    // Context API
    const value = useContext(Context);
    return (
        <div>
            <h2>Special</h2>
            <p>{ornaments}</p>
            <small>{value}</small>
        </div>
    );
};

export default Special;