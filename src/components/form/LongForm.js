import React from 'react';
import { useReducer } from 'react';

const LongForm = () => {

    const initialState = {
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        education: '',
        quantity: '',
        feedback: '',
        term: true,

    };

    const reducer = (state, action) => {
        console.log(action);
        console.log(state);

        switch (action.type) {
            case 'INPUT':
                return {
                    ...state,
                    [action.payload.name]: action.payload.value,    // Object Bracket Notation
                };
            // case 'TOGGLE':
            //     return {
            //         ...state,
            //         term: !state.term,
            //     };
            default:
                return state
        }

        // if (action.type === 'INPUT') {
        //     return {
        //         ...state,
        //         [action.payload.name]: action.payload.value,   // Object Bracket Notation
        //     }
        // }
    }
    const [state, dispatch] = useReducer(reducer, initialState)


    const eventHandeler = (e) => {
        dispatch({
            type: 'INPUT',
            payload: { name: e.target.name, value: e.target.value }
        })
    };

    // const handleToggle = () => {
    //     dispatch({
    //         type: 'TOGGLE',

    //     })
    // }

    const submit = (event) => {
        event.preventDefault();
        console.log(state);
    };


    return (
        <div>
            <form onSubmit={submit}>
                <div>
                    <label htmlFor="firstName" >First Name: </label>
                    <input
                        type="text"
                        name='firstName'
                        onBlur={eventHandeler}
                    />

                </div>
                <div>
                    <label htmlFor="lastName">Last Name: </label>
                    <input
                        type="text"
                        name='lastName'
                        onBlur={eventHandeler}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input
                        type="text"
                        name='email'
                        onBlur={eventHandeler}
                    />
                </div>
                {/* ===================== GENDER ======================== */}
                <div>
                    <h1>Gender</h1>
                    <div>
                        <input
                            type="radio"
                            id='male'
                            name='gender'
                            value='male'
                            onClick={eventHandeler}
                        />
                        <label htmlFor="male">Male</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            id='female'
                            name='gender'
                            value='female'
                            onClick={eventHandeler}

                        />
                        <label htmlFor="female">Female</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            id='other'
                            name='gender'
                            value='other'
                            onClick={eventHandeler}
                        />
                        <label htmlFor="other">Other</label>
                    </div>
                    {/* ================ education=================== */}
                    <div >
                        <label htmlFor="education">Education: </label>
                        <select
                            name="education"
                            id="education"
                            onChange={eventHandeler}
                        >
                            <option value="SSC">SSC</option>
                            <option value="HSC">HSC</option>
                            <option value="underGrad">Under Graduate</option>
                            <option value="graduate">Graduate</option>
                        </select>
                    </div>


                </div>
                {/*=========== Number of PCs ========================== */}
                <div >
                    <label htmlFor='number of PCs'> Number of PCs </label>
                    <div>
                        <button
                        // disabled={state.quantity <= 0}
                        >-</button>
                        <div>
                            <span >0</span>
                        </div>
                        <button>+</button>
                    </div>
                </div>
                {/* =================FEEDBACK // textarea ===============  */}
                <div>
                    <label htmlFor="feedback">Feedback: </label>
                    <textarea
                        name="feedback"
                        id="feedback"
                        cols="30"
                        rows="4"
                        onBlur={eventHandeler}
                    >
                    </textarea>
                </div>
                <div>
                    <div>
                        <input
                            type="checkbox"
                            name="term"
                            id="terms"
                        // onClick={handleToggle}
                        />
                        <label htmlFor="terms">I agree to terms and conditions</label>
                    </div>
                    <button
                        type="submit"
                    // disabled={state.term}
                    >
                        Submit
                    </button>
                </div>

            </form>
        </div>
    );
};

export default LongForm;