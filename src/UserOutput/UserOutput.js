import React from 'react';
import './UserOutput.css'

const UserOutput =  (props)=>{
    return <div className= 'UserOutput'>
        <p>User Name : {props.userName}</p>
        <p>I am traveller</p>
    </div>
}

export default UserOutput;