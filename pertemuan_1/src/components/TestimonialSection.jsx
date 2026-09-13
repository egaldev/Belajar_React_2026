const TestimonialSection = ({
  sectionTitle,
  sectionSubtitle,
  testimonials = [],
}) => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 text-center max-w-6xl mx-auto space-y-10">
      {/* HEADER SECTION */}
      <div className="space-y-3">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          {sectionTitle}
        </h2>

        {sectionSubtitle && (
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {sectionSubtitle}
          </p>
        )}
      </div>

      {/* GRID TESTIMONI */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
        {testimonials.map((item) => (
            <figure
              key={item.name}
              className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 space-y-4 transition hover:border-indigo-500/40"
            >
              {/* KUTIPAN */}
              <blockquote className="text-sm text-slate-300 leading-relaxed">
                “{item.quote}”
              </blockquote>

              {/* IDENTITAS */}
              <figcaption className="flex items-center gap-3 pt-2 border-t border-slate-800/80">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500/15 text-indigo-400 font-bold text-sm shrink-0">
                  {item.initial}
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{item.name}</p>
                  <p className="text-xs text-slate-400">{item.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
  );
};

export default TestimonialSection;
