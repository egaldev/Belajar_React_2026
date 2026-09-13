import FeatureCard from "./FeatureCard.jsx";

const FeatureSection = ({
  sectionTitle,
  sectionSubtitle,
  features = [],
}) => {
  return (
    <section
      id="services"
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

      {/* GRID FITUR (1 Kolom Mobile -> 3 Kolom Desktop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>
  );
};

export default FeatureSection;
