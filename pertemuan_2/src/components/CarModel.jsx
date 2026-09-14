import React from 'react';

const CarModel = ({warna, merek, harga, ...rest}) => {

    return(
        <>
            <h1>Model Mobil: </h1>

            <ul>
                <li>Warna: {warna} </li>
                <li>Merek: {merek} </li>
                <li>Harga: {harga} </li>
                <li>Nama Pengendara: {rest.namaPengendara}</li>
                <li>Berat Mobil: {rest.beratMobil}</li>
            </ul>
        </>
    )
}


export default CarModel;