const TechStackSection = ({ sectionTitle, sectionSubtitle, techs = [] }) => {
  return (
    <section
      id="tech-stack"
      className="py-12 sm:py-16 px-4 sm:px-6 text-center max-w-5xl mx-auto space-y-10"
    >
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

      {/* GRID TECH STACK */}
      {/* TECH STACK GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {techs.map((tech) => {
          const Icon = tech.icon;

          return (
            <div
              key={tech.name}
              className={`
                group
                p-5
                rounded-2xl
                bg-gradient-to-br ${tech.gradient}
                border border-white/10
                transition-all duration-300
                hover:-translate-y-1
                hover:border-white/20
                hover:bg-white/5
                cursor-default
              `}
            >
              {/* ICON */}
              <div className="flex justify-center">
                <Icon
                  className={`
                    text-4xl
                    ${tech.iconColor}
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  `}
                />
              </div>

              {/* NAME */}
              <p className="mt-3 text-xs font-semibold text-white/90">
                {tech.name}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TechStackSection;
