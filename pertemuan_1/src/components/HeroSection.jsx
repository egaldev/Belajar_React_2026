import React from "react";

const HeroSection = ({
  badgeText,
  title,
  highlightTitle,
  description,
  stats,
  primaryCta,
  secondaryCta,
}) => {
  // FUNCTION:

  return (
    <>
      <section className="py-12 sm:py-20 px-4 sm:px-6 text-center max-w-4xl mx-auto space-y-6 sm:space-y-8">
        {/* 1. BADGE PILL (Teks Ukuran Mobile & Padding Dinamis) */}
        {badgeText && (
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[11px] sm:text-xs font-semibold max-w-full truncate">
            <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse shrink-0"></span>
            <span className="truncate">{badgeText}</span>
          </div>
        )}

        {/* 2. HEADLINE (Sensitif Ukuran Layar: 3X-Large di Mobile -> 6X-Large di Desktop) */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight sm:leading-none">
          {title}{" "}
          {highlightTitle && (
            <span className="block sm:inline text-indigo-400 bg-clip-text mt-1 sm:mt-0">
              {highlightTitle}
            </span>
          )}
        </h1>

        {/* 3. DESKRIPSI */}
        <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-2">
          {description}
        </p>

        {/* 4. TOMBOL CTA (Full Width 'w-full' di Mobile, Auto Width di Sm/Desktop) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 px-4 sm:px-0">
          {primaryCta && (
            <button
              onClick={primaryCta.onClick}
              className="w-full sm:w-auto px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs sm:text-sm transition shadow-lg shadow-indigo-600/25 active:scale-95"
            >
              {primaryCta.text}
            </button>
          )}

          {secondaryCta && (
            <button
              onClick={secondaryCta.onClick}
              className="w-full sm:w-auto px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold rounded-xl text-xs sm:text-sm border border-slate-700 transition active:scale-95"
            >
              {secondaryCta.text}
            </button>
          )}
        </div>

        {/* 5. STATS GRID (1 Kolom di Mobile Kecil, 2 Kolom di Tablet, 3 Kolom di Desktop) */}
        {stats && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-8 sm:pt-10 border-t border-slate-800/80 mt-8">
            {stats.map((item, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80"
              >
                <p className="text-2xl sm:text-3xl font-black text-white">
                  {item.value}
                </p>
                <p className="text-xs text-slate-400 font-medium mt-1">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default HeroSection;
