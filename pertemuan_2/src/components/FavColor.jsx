import React from 'react';
import { useState } from 'react';


const FavColor = () => {
    const [color, setColor] = useState('red');


    return (

        <>
            <h1 style={{ color: color }}>My favorite color is {color}</h1>
            <button type='button' onClick={() => setColor('blue')}>
                Ubah warna
            </button>
        </>
    )
}


export default FavColor;