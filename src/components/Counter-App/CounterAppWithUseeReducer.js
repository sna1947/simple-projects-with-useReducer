import { type } from '@testing-library/user-event/dist/type';
import React, { useReducer } from 'react';

const CounterAppWithUseeReducer = () => {
    // Defining the initial state and the reducer
    const initialState = 0;
    const reducer = (state, action) => {
        console.log(action);
        if (action.type === 'INCREMENT') {
            // return state + 1;
            return state + action.payload.count;
        } else if (action.type === 'DECREMENT') {
            // return state - 1;
            return state - action.payload.count;
        } else if (action.type === 'RESET') {
            return initialState;   // Or return 0; **** দিলে ও হবে
        }
    };
    const handleIncrement = () => {
        // dispatch({ type: 'INCREMENT', payload: 5 })
        dispatch({ type: 'INCREMENT', payload: { count: 5 } })
    };
    const handleDecrement = () => {
        // dispatch({ type: 'DECREMENT', payload: 5 })
        dispatch({ type: 'DECREMENT', payload: { count: 5 } })
    };
    const handleReset = () => {
        dispatch({ type: 'RESET' })
    };
    // Initialising useReducer hook
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h1>{state}</h1>
            <div>
                {/* <button onClick={() => dispatch({ type: 'INCREMENT', payload: {count:5}  })}>Increment</button> */}
                <button onClick={handleIncrement}>Increment</button>
                {/* <button onClick={() => dispatch({ type: 'DECREMENT', payload: {count:5}  })}>Decrement</button> <br /> */}
                <button onClick={handleDecrement}>Decrement</button> <br />
                {/* <button onClick={() => dispatch({ type: 'reset' })}> Reset </button> */}
                <button onClick={handleReset}> Reset </button>
            </div>

        </div>
    );
};

export default CounterAppWithUseeReducer;