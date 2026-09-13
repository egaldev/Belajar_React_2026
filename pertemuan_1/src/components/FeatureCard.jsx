import { memo } from "react";

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 transition hover:border-indigo-500/40 hover:-translate-y-1 cursor-pointer">
      {/* IKON */}
      <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-2xl">
          <Icon className="h-6 w-6" />
      </div>

      {/* KONTEN */}
      <h3 className="text-base sm:text-lg font-bold text-white mt-4">
        {title}
      </h3>
      <p className="text-sm text-slate-400 leading-relaxed mt-2">
        {description}
      </p>
    </div>
  );
};

export default memo(FeatureCard);
