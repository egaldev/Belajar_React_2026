import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import FeatureSection from "./components/FeatureSection.jsx";
import PortfolioGrid from "./components/PortfolioGrid.jsx";
import TestimonialSection from "./components/TestimonialSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import StatsSection from "./components/StatsSection.jsx";
import Footer from "./components/Footer.jsx";
import TechStackSection from "./components/TechStackSection.jsx";
import Lanyard from "./components/Lanyard.jsx";
import {
  menuNavigasi,
  dataStatistik,
  dataFitur,
  dataPortofolio,
  dataTestimoni,
  sosialMedia,
  dataTechStack,
} from "./utils/data.js";
import myProfile from "./assets/myProfile.jpeg";
import myProfileBack from "./assets/myProfile_back.jpeg";

function App() {
  // Event handler untuk tombol CTA
  const handleKontak = () => {
    alert("Formulir Kontak Berhasil Dipanggil!");
  };

  return (
    <>
      <div className="min-h-screen bg-slate-950 text-slate-100">
        {/* ==================== NAVBAR ==================== */}
        <Navbar
          brandName="EgalDev"
          navLinks={menuNavigasi}
          ctaButton={{
            text: "Hubungi Saya",
            onClick: handleKontak,
          }}
        />

        {/* ==================== MAIN CONTENT ==================== */}
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ==================== TASK-02: HERO + LANYARD ==================== */}
          <section className="pt-10 lg:pt-16">
            {/* HERO + LANYARD */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-4 min-h-[650px]">
              {/* HERO - KIRI */}
              <div className="w-full">
                <HeroSection
                  badgeText="Open for Fullstack Projects 2026"
                  title="Membangun Aplikasi Web Modern bersama"
                  highlightTitle="Egal Assegaf"
                  description="Aspiring Fullstack Developer yang berfokus pada ekosistem React, Node.js, dan arsitektur database yang rapi serta responsif."
                  primaryCta={{
                    text: "Lihat Portfolio Proyek",
                    onClick: () => alert("Menuju area Portfolio!"),
                  }}
                  secondaryCta={{
                    text: "Lihat Tech Stack Saya",
                    onClick: () =>
                      document
                        .getElementById("tech-stack")
                        ?.scrollIntoView({ behavior: "smooth" }),
                  }}
                />
              </div>

              {/* LANYARD - KANAN */}
              <div className="w-full h-[600px] lg:h-[650px] flex items-center justify-center">
                <Lanyard
                  position={[0, 0, 24]}
                  gravity={[0, -40, 0]}
                  frontImage={myProfile}
                  backImage={myProfileBack}
                  imageFit="cover"
                  lanyardWidth={2}
                />
              </div>
            </div>

            {/* STATS - DI BAWAH HERO */}
            <StatsSection stats={dataStatistik} />
          </section>

          {/* ==================== TECH STACK ==================== */}
          <TechStackSection
            sectionTitle="Tech Stack Saya"
            sectionSubtitle="Teknologi yang saya gunakan untuk membangun aplikasi web dari frontend hingga backend."
            techs={dataTechStack}
          />

          {/* ==================== TASK-03: FEATURE ==================== */}
          <section>
            <FeatureSection
              sectionTitle="Layanan & Fitur Utama"
              sectionSubtitle="Semua yang kamu butuhkan untuk membangun produk digital modern, dikemas dalam komponen modular."
              features={dataFitur}
            />
          </section>

          {/* ==================== TASK-04: PORTFOLIO ==================== */}
          <section>
            <PortfolioGrid
              sectionTitle="Portfolio Proyek"
              sectionSubtitle="Beberapa proyek yang pernah saya bangun menggunakan React dan teknologi modern lainnya."
              projects={dataPortofolio}
            />
          </section>

          {/* ==================== TASK-05: TESTIMONIAL ==================== */}
          <section>
            <TestimonialSection
              sectionTitle="Apa Kata Mereka"
              sectionSubtitle="Testimoni dari klien dan rekan yang pernah berkolaborasi dalam proyek."
              testimonials={dataTestimoni}
            />
          </section>

          {/* ==================== TASK-05: CONTACT ==================== */}
          <section>
            <ContactSection
              sectionTitle="Hubungi Saya"
              sectionSubtitle="Punya ide proyek atau sekadar ingin menyapa? Kirim pesan lewat formulir di bawah ini."
            />
          </section>
        </main>

        {/* ==================== TASK-05: FOOTER ==================== */}
        <Footer
          brandName="EgalDev"
          description="Aspiring Fullstack Developer yang berfokus pada ekosistem React, Node.js, dan arsitektur database yang rapi serta responsif."
          navLinks={menuNavigasi}
          socialLinks={sosialMedia}
        />
      </div>
    </>
  );
}

export default App;
