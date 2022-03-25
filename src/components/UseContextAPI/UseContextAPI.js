import React, { useContext } from 'react';
// Context API
import { Context } from '../../App';

const UseContextAPI = () => {
    // Context API
    const value = useContext(Context);
    return (
        <div>
            <h3>UseContextAPI</h3>
            {/* Context API value */}
            <small>{value}</small>
        </div>
    );
};

export default UseContextAPI;