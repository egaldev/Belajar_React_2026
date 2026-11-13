import React from 'react'; 
import {useState} from 'react';

const SwitchButton = () => {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = (a) => {
        setIsClicked(!isClicked);
        alert(a)
    }

    return(
        <button style={{
            backgroundColor: isClicked ? 'green' : 'red',
            color: isClicked ? 'white' : 'black'
        }} 
        
        onClick={() => handleClick('Tombol telah diklik!')}
        >
            Klik saya
        </button>
    )
}

export default SwitchButton;