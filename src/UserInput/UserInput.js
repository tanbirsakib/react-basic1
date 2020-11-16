import React from 'react';


const UserInput = (props) => {
    const inputStyle = {
        border : '2px solid #363b31',
        backgroundColor : '#abcf84',
        textAlign : 'center'
    }

    return <input 
    type = 'text'
    onChange = {props.changed} 
    value = {props.currentName}
    style = {inputStyle}
    ></input>
}

export default UserInput;