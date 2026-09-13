import React from 'react';
import '../styles/Button.css';


const Button = ({text}) => {

    return(
        <>
            <button className="btn-custom">
                {text}
            </button>
        </>
    )
}


export default Button;