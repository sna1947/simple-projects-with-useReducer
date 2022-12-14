import React, { useState } from 'react';

const ShortForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeFn = (event) => {
        setFirstName(event.target.value)
    };
    const handleChangeLn = (event) => {
        setLastName(event.target.value)
    };
    const handleChangeEml = (event) => {
        setEmail(event.target.value)
    };
    const handleChangePsw = (event) => {
        setPassword(event.target.value)
    };

    const submit = (e) => {
        e.preventDefault();
        const data = {
            firstName,
            lastName,
            email,
            password
        }
        console.log(data);
    }

    return (
        <div>
            <form onSubmit={submit}>
                <div>
                    <label htmlFor='name'>First Name: </label>
                    <input
                        type='text'
                        name='name'
                        id='name'
                        // onBlur={(e) => handleChangeFn(e.target.value)}
                        onBlur={handleChangeFn}
                    />
                </div>
                <div>
                    <label htmlFor='name'>Last Name: </label>
                    <input
                        type='text'
                        name='name'
                        id='name'
                        // onBlur={(e) => handleChangeLn(e.target.value)}
                        onBlur={handleChangeLn}
                    />
                </div>
                <div>
                    <label htmlFor='name'>Email Id: </label>
                    <input
                        type='email'
                        name='name'
                        id='name'
                        // onBlur={(e) => handleChangeEml(e.target.value)}
                        onBlur={handleChangeEml}
                    />
                </div>
                <div>
                    <label htmlFor='name'>Password: </label>
                    <input
                        type='password'
                        name='name'
                        id='name'
                        // onBlur={(e) => handleChangePsw(e.target.value)}
                        onBlur={handleChangePsw}
                    />
                </div>
                <button type='submit'>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ShortForm;