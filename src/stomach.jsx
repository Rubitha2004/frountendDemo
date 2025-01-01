import React, { useContext } from 'react';
import { NameContext } from './list';

function Stomach() {
    const { name,age,color,bgcolor } = useContext(NameContext);

    return (
        <div style={{ color:color,backgroundColor:bgcolor }}>
            <h2>Stomach :{name} and {age}</h2>
          

        </div>
    );
}

export default Stomach;