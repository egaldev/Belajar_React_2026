import React, { useState } from 'react';
import '../styles/ClubSoccersList.css';

const ClubSoccerList = () => {
    // 1. Data klub sepak bola (tanpa emoji/logo buatan)
    const [listClub, setListClub] = useState([
        { id: 1, kode: 'LIV', nama: 'Liverpool', negara: 'Inggris', liga: 'Premier League', isFavorite: true },
        { id: 2, kode: 'MUN', nama: 'Manchester United', negara: 'Inggris', liga: 'Premier League', isFavorite: false },
        { id: 3, kode: 'BAR', nama: 'Barcelona', negara: 'Spanyol', liga: 'La Liga', isFavorite: true },
        { id: 4, kode: 'MIL', nama: 'AC Milan', negara: 'Italia', liga: 'Serie A', isFavorite: false },
        { id: 5, kode: 'PSJ', nama: 'Persija', negara: 'Indonesia', liga: 'Liga 1', isFavorite: true },
        { id: 6, kode: 'RMA', nama: 'Real Madrid', negara: 'Spanyol', liga: 'La Liga', isFavorite: true },
        { id: 7, kode: 'BAY', nama: 'Bayern München', negara: 'Jerman', liga: 'Bundesliga', isFavorite: false },
    ]);

    // 2. State untuk filter, pencarian, dan pilihan tampilan
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('Semua');
    const [onlyFavorite, setOnlyFavorite] = useState(false);
    const [viewMode, setViewMode] = useState('grid'); // 'grid' atau 'table'

    // Daftar negara unik untuk filter
    const countries = ['Semua', ...new Set(listClub.map((club) => club.negara))];

    // 3. Fungsi toggle status favorit
    const handleToggleFavorite = (id) => {
        setListClub((prev) =>
            prev.map((club) =>
                club.id === id ? { ...club, isFavorite: !club.isFavorite } : club
            )
        );
    };

    // 4. Logika filter list
    const filteredClubs = listClub.filter((club) => {
        const matchSearch =
            club.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
            club.kode.toLowerCase().includes(searchTerm.toLowerCase()) ||
            club.negara.toLowerCase().includes(searchTerm.toLowerCase());

        const matchCountry =
            selectedCountry === 'Semua' || club.negara.toLowerCase() === selectedCountry.toLowerCase();

        const matchFavorite = onlyFavorite ? club.isFavorite : true;

        return matchSearch && matchCountry && matchFavorite;
    });

    const favoriteCount = listClub.filter((c) => c.isFavorite).length;

    return (
        <div className="club-container">
            {/* Header Bersih & Profesional */}
            <div className="club-header">
                <h2>Daftar Klub Sepak Bola</h2>
                <p>Koleksi data klub sepak bola dengan fitur pencarian, filter negara, dan status favorit.</p>
            </div>

            {/* Toolbar Kontrol */}
            <div className="club-toolbar">
                <div className="club-search-row">
                    <input
                        type="text"
                        placeholder="Cari klub atau negara..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="club-search-input"
                    />

                    <button
                        type="button"
                        onClick={() => setOnlyFavorite(!onlyFavorite)}
                        className={`club-filter-btn ${onlyFavorite ? 'active' : ''}`}
                    >
                        {onlyFavorite ? 'Semua Klub' : 'Hanya Favorit'}
                    </button>
                </div>

                {/* Filter Negara */}
                <div className="club-categories">
                    {countries.map((country) => (
                        <button
                            key={country}
                            type="button"
                            onClick={() => setSelectedCountry(country)}
                            className={`category-chip ${selectedCountry === country ? 'active' : ''}`}
                        >
                            {country}
                        </button>
                    ))}
                </div>
            </div>

            {/* Status Bar & Mode Tampilan */}
            <div className="club-status-bar">
                <span>
                    Menampilkan <strong>{filteredClubs.length}</strong> klub ({favoriteCount} favorit)
                </span>

                <div className="view-toggle-group">
                    <button
                        type="button"
                        onClick={() => setViewMode('grid')}
                        className={`view-toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
                    >
                        Kartu
                    </button>
                    <button
                        type="button"
                        onClick={() => setViewMode('table')}
                        className={`view-toggle-btn ${viewMode === 'table' ? 'active' : ''}`}
                    >
                        Tabel
                    </button>
                </div>
            </div>

            {/* Render List: Mode Grid atau Table */}
            {filteredClubs.length > 0 ? (
                viewMode === 'grid' ? (
                    /* TAMPILAN KARTU (GRID) */
                    <div className="club-grid-view">
                        {filteredClubs.map((club) => (
                            <div key={club.id} className="club-card-item">
                                <div className="card-top">
                                    <span className="club-initials-badge">{club.kode}</span>
                                    <button
                                        type="button"
                                        onClick={() => handleToggleFavorite(club.id)}
                                        className={`btn-star ${club.isFavorite ? 'starred' : ''}`}
                                    >
                                        {club.isFavorite ? '★ Favorit' : '☆ Simpan'}
                                    </button>
                                </div>

                                <div className="card-main">
                                    <h3 className="club-title-text">{club.nama}</h3>
                                    <p className="club-meta-text">{club.negara} &bull; {club.liga}</p>
                                </div>

                                <div className="card-bottom">
                                    <span className={`status-badge ${club.isFavorite ? 'fav' : 'regular'}`}>
                                        {club.isFavorite ? 'Favorit' : 'Reguler'}
                                    </span>
                                    <span className="league-tag-text">{club.liga}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    /* TAMPILAN TABEL (LIST) */
                    <div className="club-table-wrapper">
                        <table className="club-table">
                            <thead>
                                <tr>
                                    <th>Kode</th>
                                    <th>Nama Klub</th>
                                    <th>Negara</th>
                                    <th>Liga</th>
                                    <th>Status</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredClubs.map((club) => (
                                    <tr key={club.id}>
                                        <td>
                                            <span className="table-club-code">{club.kode}</span>
                                        </td>
                                        <td className="table-club-name">{club.nama}</td>
                                        <td>{club.negara}</td>
                                        <td>{club.liga}</td>
                                        <td>
                                            <span className={`status-badge ${club.isFavorite ? 'fav' : 'regular'}`}>
                                                {club.isFavorite ? 'Favorit' : 'Reguler'}
                                            </span>
                                        </td>
                                        <td>
                                            <button
                                                type="button"
                                                onClick={() => handleToggleFavorite(club.id)}
                                                className={`btn-star ${club.isFavorite ? 'starred' : ''}`}
                                            >
                                                {club.isFavorite ? '★ Favorit' : '☆ Simpan'}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )
            ) : (
                /* Empty State */
                <div className="club-empty-state">
                    <p>Tidak ada klub yang sesuai dengan pencarian Anda.</p>
                    <button
                        type="button"
                        onClick={() => {
                            setSearchTerm('');
                            setSelectedCountry('Semua');
                            setOnlyFavorite(false);
                        }}
                        className="btn-reset-clean"
                    >
                        Reset Filter
                    </button>
                </div>
            )}
        </div>
    );
};

export default ClubSoccerList;