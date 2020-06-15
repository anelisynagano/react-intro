import React from 'react';
import '../App.css';

const Avatar = ({ firstName, lastName, imageUrl }) => {
    return(
        <div>
            <p>{firstName} {lastName}</p>
            <img src={imageUrl} alt="avatar"/>
        </div>
    )
}

export default Avatar;