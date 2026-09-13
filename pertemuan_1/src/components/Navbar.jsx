import { useState } from "react";

const Navbar = ({ brandName = "EgalDev", navLinks = [], ctaButton }) => {
  // State sederhana untuk buka/tutup menu di mobile (HP)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* 1. BRAND LOGO */}
        <div className="flex items-center space-x-2.5">
          <span className="h-9 w-9 bg-indigo-600 rounded-xl flex items-center justify-center font-black text-white text-lg shadow-md shadow-indigo-600/30">
            {brandName.charAt(0)}
          </span>
          <span className="text-base sm:text-lg font-bold text-white tracking-tight">
            {brandName}
          </span>
        </div>

        {/* 2. DESKTOP NAV LINKS (Sembunyi di Mobile, Tampil di Desktop) */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* 3. DESKTOP CTA BUTTON (Sembunyi di Mobile, Tampil di Desktop) */}
        {ctaButton && (
          <div className="hidden md:block">
            <button
              onClick={ctaButton.onClick}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs transition shadow-md shadow-indigo-600/20 active:scale-95"
            >
              {ctaButton.text}
            </button>
          </div>
        )}

        {/* 4. HAMBURGER BUTTON (Hanya Tampil di Mobile) */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              // Icon Cross (X) saat menu terbuka
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Icon Hamburger (☰) saat menu tertutup
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* 5. MOBILE MENU DROPDOWN (Hanya Render saat Hamburger Diklik) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-4 animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {ctaButton && (
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                ctaButton.onClick();
              }}
              className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs transition"
            >
              {ctaButton.text}
            </button>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
