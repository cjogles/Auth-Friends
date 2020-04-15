import React, {useState} from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../axios_w_auth/AxiosWithAuth';

export const Login = (props) => {

    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    })

    // new useState for isLoading?
    
    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const login = e => {
        e.preventDefault();
        axiosWithAuth().post("http://localhost:5000/api/login",credentials)
          .then(res => {
            localStorage.setItem('token', res.data.payload)
            setCredentials({ ...credentials});
            props.history.push('/friends')
          });
      };

    return (
        <div style={{ textAlign: 'center'}}>
            <h2>Please Login:</h2>
            <form onSubmit={login}>
                <input
                    type="text"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                />
                <button>Log in</button>
            </form>
        </div>
    );
};