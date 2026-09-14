import React from 'react';


const Avanza = (props) => {

    return(
        <h3>Avanzaku warna: {props.color}</h3>
    )
}

const Lamborgini = (props) => {

    return(

        <>
            <h3>Lamborginiku warna: {props.color}</h3>
        </>
    )
}


const GarasiCar = () => {

    return(
        <>
            <h2>Koleksi Mobil saya: </h2>
            <Avanza color='Hitam' />
            <Lamborgini color='Kuning' />
        </>
    )
}

export default GarasiCar;