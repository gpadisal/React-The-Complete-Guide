import React from 'react';
import './UserOutput.css';

const userOutput = (props) =>{
    return (
        <div className="UserOutput">

            <p style={props.styleval}> {props.username}</p>
            <p> {props.username}</p>

        </div>
    );
}

export default userOutput;