import React, { useState } from 'react';

const Forms = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newLogin, saveNewLogin] = useState([]);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (email !== '' && password !== '') {
            const loginInfo = { email: email, password: password };
            saveNewLogin([...newLogin, loginInfo]);
        }
    }

    return (
        <section className="forms">
            <form action="" onSubmit={onSubmitHandler}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Email" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className="btn" type="submit">Login</button>
            </form>
        </section>
    )
}

export default Forms;
