const Footer = ({ brandName, description, navLinks, socialLinks }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/80 mt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* BRAND */}
        <div className="space-y-2">
          <p className="text-lg font-extrabold text-white">{brandName}</p>
          <p className="text-sm text-slate-400 leading-relaxed max-w-xs mx-auto md:mx-0">
            {description}
          </p>
        </div>

        {/* NAVIGASI */}
        {navLinks && (
          <nav className="space-y-2">
            <p className="text-sm font-bold text-white uppercase tracking-wider">
              Navigasi
            </p>
            <ul className="space-y-1.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-indigo-400 transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* SOSIAL MEDIA */}
        {socialLinks && (
          <div className="space-y-2">
            <p className="text-sm font-bold text-white uppercase tracking-wider">
              Sosial Media
            </p>
            <ul className="space-y-1.5">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-400 hover:text-indigo-400 transition"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-slate-800/80 py-4 text-center">
        <p className="text-xs text-slate-500">
          © {currentYear} {brandName}. Dibuat dengan React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
