import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../axios_w_auth/AxiosWithAuth';

export const FriendList = () => {
    const [state, setState] = useState([]);

    useEffect(() => {
        axiosWithAuth().get('http://localhost:5000/api/friends')
            .then(res => {setState(res)}
        )
    },{})
    
    return (
        <div>
            <h2>FRIENDS!</h2>
            {console.log(state.data)}
            <h1>
                { state.data !== undefined ? state.data.map(friend => (
                    friend.name + " "
                )) : null}
            </h1>
        </div>
    );
};