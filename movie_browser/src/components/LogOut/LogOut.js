import React from 'react';


function LogOut ({ logoutUser, className }) {
    return (
        <a onClick={logoutUser} className={className} >
            Log Out
        </a>
    );
}

export default LogOut;
