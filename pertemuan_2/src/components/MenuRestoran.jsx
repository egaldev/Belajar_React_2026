import React from 'react';

const MenuRestoran = () => {
    // data array menu
    const daftarMenu = [
        { id: 1, nama: 'Nasi Uduk Spesial', kategori: 'Sarapan', harga: 15000, tersedia: true },
        { id: 2, nama: 'Kepiting Alaska Bakar', kategori: 'Seafood', harga: 350000, tersedia: false },
        { id: 3, nama: 'Cumi Goreng Tepung', kategori: 'Seafood', harga: 45000, tersedia: true },
        { id: 4, nama: 'Steak Beef (Medium Rare)', kategori: 'Daging', harga: 120000, tersedia: true },
    ];

    return (
        <>
            <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
                <h1>Daftar Menu Restoran</h1>

                <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                    {daftarMenu.map((menu) => (
                        <div key={menu.nama} style={{ border: '1px solid #ccc', width: '200px', padding: '20px' }}>
                            <h3>
                                {menu.kategori === 'Sarapan' ? '🌅' : 'Tidak Tersedia'}
                            </h3>

                            <p style={{ color: 'gray', margin: '5px 0' }}>
                                Kategori: {menu.kategori}
                            </p>

                            {/* contoh unruk mengecek ketersediaan harga */}
                            <p>
                                {menu.tersedia ? `Harga : Rp ${menu.harga}` : 'Stok Habis'}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}


export default MenuRestoran;