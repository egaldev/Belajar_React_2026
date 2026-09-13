import PortfolioCard from "./PortfolioCard.jsx";

const PortfolioGrid = ({
  sectionTitle,
  sectionSubtitle,
  projects = [],
}) => {
  return (
    <section
      id="portfolio"
      className="py-12 sm:py-16 px-4 sm:px-6 text-center max-w-6xl mx-auto space-y-10"
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

      {/* GRID PORTFOLIO (1 Kolom Mobile -> 3 Kolom Desktop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
        {projects.map((project) => (
          <PortfolioCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default PortfolioGrid;
