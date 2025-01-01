import React, { createContext, useState } from 'react';
import Hen from './hen';

export let NameContext = createContext();

function App() {
    const [color, setColor] = useState('blue');
    const [bgcolor,setbgcolor]=useState('white')

    const changeColor = () => {
        setColor(color === 'blue' ? 'red' : 'blue');
        setbgcolor(bgcolor === 'white' ? 'black' : 'white');
    };

    return (
        <>
            <button onClick={changeColor}>Change Color</button>
            <NameContext.Provider value={{ name : "shifa" ,age :"75",color,bgcolor }}>
                <Hen />
            </NameContext.Provider>
        </>
    );
}

export default App;
