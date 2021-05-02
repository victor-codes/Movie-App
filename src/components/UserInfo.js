import React from 'react';

export default function UserInfo({name}) {
    return (
        <div className="absolute">
            {name}
            <button className="logout">Logout</button>
        </div>
    )
}