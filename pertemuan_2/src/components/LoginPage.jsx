import React from 'react';
import { useState } from 'react';


const LoginPage = () => {
    //membuat useState untuk menampung data inputan user
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    //membuat fungsi untuk nangkap data input user
    const handleLogin = (e) => {
        e.preventDefault();

        if(username === 'admin' && password === '123456') {
            alert('login berhasil');
            setMessage('login berhasil');
            setIsLoggedIn(true);
        } else {
            alert('login gagal');
            setMessage('login gagal');
            setIsLoggedIn(false);
        }
    }

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername('');
        setPassword('');
        setMessage('Anda telah logout');
        alert('Anda telah logout');
    }

    return(
        <>
           <div>
                <h2>Login page</h2>

                <form onSubmit={handleLogin}>
                    <div>
                        <label>Username: </label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>

                    <div>
                        <label>Password: </label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <button type="submit">
                        Login
                    </button>

                    <button type="button" onClick={handleLogout} disabled={!isLoggedIn}>
                        Logout
                    </button>

                </form>

                <h2>{message}</h2>
           </div>
        
        
        </>
    )
}

export default LoginPage;