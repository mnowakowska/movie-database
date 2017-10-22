import React from 'react';


function LogOut ({ logoutUser }) {
    return (
        <button onClick={logoutUser}>
            Log Out
        </button>
    );
}

export default LogOut;
