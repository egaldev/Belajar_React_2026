import React from 'react';
import {useState} from 'react';


const ExampleUsestate = () => {
    // 1. Membuat state dengan nilai awal 'false' (belum dipakai)
    const [isEquipped, setIsEquipped] = useState(false);

    // 2. Fungsi penanganan klik
    const handleClick = () => {
        // 3. Mengubah nilai state menjadi kebalikan dari nilai saat ini
        setIsEquipped(!isEquipped);
    }

    return(

        <>
            <div style={{padding: '20px' , fontFamily: 'sans-serif'}}>
                <h1>Lightsaber status: </h1>

                // condition rendering berdasarkan status
                <p style={{fontSize: '18px', color: isEquipped ? 'green' : 'red'}}>
                    {isEquipped ? 'sedang dipakai' : 'belum dipakai'};
                </p>

                <button style={{
                    padding: '10px 20px',
                    cursor: 'pointer',
                    backgroundColor: isEquipped ? 'green' : 'red',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',

                }} 
                
                onClick={handleClick}>
                    {isEquipped ? 'Matikan lightsaber' : 'Nyalakan lightsaber'}
                </button>

            </div>
        </>
    )
}



export default ExampleUsestate;