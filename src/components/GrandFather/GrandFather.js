import React from 'react';
import Aunty from '../Aunty/Aunty';
import Uncle from '../Uncle/Uncle';
import Father from '../Father/Father';
const GrandFather = (props) => {
    const {house, ornaments} = props;
    return (
        <div>
            <h2>GrandFather</h2>
            <h4>House : {house}</h4>
            <div style={{display:"flex"}}>
                <Father house={house} ornaments={ornaments}></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
            </div>
        </div>
    );
};

export default GrandFather;