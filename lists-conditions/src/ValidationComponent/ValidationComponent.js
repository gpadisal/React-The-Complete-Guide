import React from 'react';


const validationComponent = (props) => {

    const length = props.textlength;

    let outputText = 'Text too short';
    if(length > 5){
        outputText = 'Text long enough';
    }
    return (
        <div>
            <p>{outputText}</p>
        </div>
    )

}

export default validationComponent;