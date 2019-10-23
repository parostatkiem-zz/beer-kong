import React from 'react';
import './UserDisplay.scss';


const UserDisplay = ({ image, name }) => <div className="user-display">
    <img className="user-display__img" src={image} alt='' />
    <span className="user-display__name" >{name}</span>
</div>
export default UserDisplay;