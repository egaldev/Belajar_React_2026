import Navbar from "../src/components/Navbar.jsx";
import HeroSection from "../src/components/HeroSection.jsx";

function App() {
  // data Navigasi
  const menuNavigasi = [
    { label: "Beranda", href: "#hero" },
    { label: "Layanan", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Kontak", href: "#contact" },
  ];

  // Data Statistik Hero
  const dataStatistik = [
    { value: "15+", label: "Proyek Portfolio" },
    { value: "100%", label: "Responsive Design" },
    { value: "24/7", label: "Clean Architecture" },
  ];

  // Event handler untuk tombol CTA
  const handleKontak = () => {
    alert("Formulir Kontak Berhasil Dipanggil!");
  };

  return (
    <>
      <div className="min-h-screen bg-slate-950 text-slate-100">
        {/* Pengiriman Props dari Parent (App) ke Child (Navbar) */}
        <Navbar
          brandName="EgalDev"
          navLinks={menuNavigasi}
          ctaButton={{ text: "Hubungi Saya", onClick: handleKontak }}
        />

        {/* TASK-02: Hero Section */}
        <main className="max-w-6xl mx-auto">
          <HeroSection
            badgeText="Open for Fullstack Projects 2026"
            title="Membangun Aplikasi Web Modern bersama"
            highlightTitle="Egal Assegaf"
            description="Aspiring Fullstack Developer yang berfokus pada ekosistem React, Node.js, dan arsitektur database yang rapi serta responsif."
            stats={dataStatistik}
            primaryCta={{
              text: "Lihat Portfolio Proyek",
              onClick: () => alert("Menuju area Portfolio!"),
            }}
            secondaryCta={{
              text: "Pelajari Tech Stack",
              onClick: () => alert("Menuju daftar Tech Stack!"),
            }}
          />
        </main>
      </div>
    </>
  );
}

export default App;
