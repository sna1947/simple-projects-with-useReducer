import React, { useState } from 'react';

const CounterApp = () => {
    const [count, setCount] = useState(0);
    console.log(count);

    const handleAddCounter = () => {
        setCount((previousCount) => previousCount + 1)
    };
    const handleMinusCounter = () => {
        setCount((previousCount) => previousCount - 1)
    };
    const handleResetCounter = () => {
        setCount(0)
    };

    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={() => setCount((count) => count + 1)} >Increment</button>
                {/* <button onClick={handleAddCounter} >Increment</button> */}
                <button onClick={() => setCount((count) => count - 1)}>Decrement</button> <br />
                {/* <button onClick={handleMinusCounter}>Decrement</button> */}
                {/* <button onClick={() => setCount(0)} > Reset</button> */}
                <button onClick={handleResetCounter} > Reset</button>
            </div >
        </div >
    );
};

export default CounterApp;