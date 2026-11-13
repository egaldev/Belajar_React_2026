import React from 'react'
import {useState} from 'react'


const GreetingsLanguage = () => {
    const [nama, setNama] = useState('');
    const [bahasa, setBahasa] = useState('indo');
    const [greeting, setGreeting] = useState('');

    const handleChangeName = (e) => {
        setNama(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if(bahasa === 'indo') {
            setGreeting(`Halo ${nama}`)
        }
        else if(bahasa === 'eng') {
            setGreeting(`Hello ${nama}`)
        }
        else if(bahasa === 'jpn') {
            setGreeting(`Konnichiwa ${nama}`)
        }
    }

    return(
        <>
            <div>
                <h2>Program sapaan</h2>

                <input
                    type='text'
                    placeholder='Masukkan nama anda'
                    value={nama}
                    onChange={handleChangeName}
                />

                <br />
                <br />

                <button onClick={() => setBahasa('indo')}>
                    Indonesia
                </button>

                 <button onClick={() => setBahasa('jpn')}>
                    Jepang
                </button>

                 <button onClick={() => setBahasa('eng')}>
                    Inggris
                </button>

                <button onClick={handleSubmit}>
                      sapa  
                </button>

                <h2>
                    {greeting}
                </h2>


            </div>
        </>
    )
}


export default GreetingsLanguage;