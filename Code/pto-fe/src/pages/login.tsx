import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = () => {
        if(username === 'admin' && password === 'admin') {
            navigate('/home');
        } else {
            alert('Login failed');
        }
    }

    return (
        <div className="flex flex-col gap-10">
            <h1 className="text-center text-2xl text-accent text-italic">Login</h1>
            <div className="flex flex-row gap-5 items-center justify-center">
                <label className="text-primary" htmlFor="username">Username</label>
                <input className="input input-bordered" type="text" id="username" value={username} onChange={e => setUsername(e.target.value)} />
            </div>
            <div className="flex flex-row gap-5 items-center justify-center">
                <label className="text-primary" htmlFor="password">Password</label>
                <input className="input input-bordered" type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login;