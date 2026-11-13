import React from 'react';
import { daftarItem } from '../utils/inventoriData.js';

const InventoriKarakter = () => {


    return (
        <>
            <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '500px' }}>
                <h1>Daftar Item karakter</h1>

                <div style={{ padding: "10px", display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {daftarItem.map((item) => (
                        <div key={item.id} style={{ border: '1px solid #aaa', backgroundColor: '#fdfdfd', padding: '10px' }}>
                            <h3>{item.nama}</h3>

                            {/* Munculkan teks jika legendary */}
                            {item.rarity === 'Legendary' && (
                                <span>
                                    ✨ Senjata Legendaris!
                                </span>
                            )}

                            {/* Item tipe:  */}
                            <p>
                                {item.tipe}
                            </p>

                            {/* Status eqipped */}
                            {item.isEquipped ? 'Status: Sedang dipakai' : 'Status: Tidak digunakan'}
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}


export default InventoriKarakter;