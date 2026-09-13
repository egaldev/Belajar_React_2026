const StatsSection = ({ stats = [] }) => {
  if (stats.length === 0) return null;

  return (
    <section className="w-full py-8 sm:py-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="p-5 sm:p-6 rounded-xl bg-slate-900/50 border border-slate-800/80 text-center"
          >
            <p className="text-2xl sm:text-3xl font-black text-white">
              {item.value}
            </p>

            <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
