import {useState} from "react";

function Login(props) {
    const users = [{username: 'raisa@gmail.com', password: 'asd', role: 'admin'},
        {username: 'gigi@gmail.com', password: 'asd', role: 'user'}];

    const [toggleWrongCredentials, setToggleWrongCredentials] = useState(false);
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');


    function onSubmit(e) {
        e.preventDefault();
        debugger;
        const userInDB = users.find((u) => u.username === user);

        if (userInDB === undefined || userInDB?.password !== password) {
            setToggleWrongCredentials(true);
            setUser('');
            setPassword('');
        }

        if (userInDB?.password === password) {
            props.authenticate(true);
            props.setAuth(userInDB);
        }

        console.log(`${user} ${password} `)
    }

    return <>
        <h2>Login</h2>
        <form onSubmit={onSubmit}>
            <label htmlFor="email">Email:</label>
            <input value={user}
                   type='email'
                   id='email'
                   onChange={event => {
                       setUser(event.target.value)
                   }}
            />
            <label htmlFor="password">Email:</label>
            <input value={password}
                   type='password'
                   id='password'
                   onChange={event => {
                       setPassword(event.target.value)
                   }}
            />
            <button type='submit'>Submit</button>
        </form>
        {toggleWrongCredentials && (<h2>Wrong Credentials</h2>)}
    </>
}

export default Login;