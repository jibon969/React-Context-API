import React from 'react';

const MySelf = (props) => {
    const {house} = props;
    return (
        <div>
            <h3>MySelf</h3>
            <p>House : {house}</p>
        </div>
    );
};

export default MySelf;