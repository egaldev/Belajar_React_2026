import React from "react";

const ProfileCard = () => {
  // Data javaScript
  const myProfileDatas = {
    name: "Egal Assegaf",
    age: 20,
    role: "Full Stack Web Developer",
    skills: ["HTML", "CSS", "JavaScript", "ReactJS", "NodeJS"],
    isAvailableForHire: true,
    totalProjects: 12,
  };

  return (
    <>
        {/* Container Card */}
        <div className="max-w-md w-full bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-xl text-white space-y-4 mt-10 mx-auto">
          {/* Header Profil */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-slate-100">
                {myProfileDatas.name}
              </h1>
              <p className="text-sm text-emerald-400 font-medium">
                {myProfileDatas.role}
              </p>
            </div>

            {/* Conditional Rendering Status Hire */}
            <span
              className={`text-xs px-2.5 py-1 rounded-full font-semibold border ${
                myProfileDatas.isAvailableForHire
                  ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                  : "bg-rose-500/10 text-rose-400 border-rose-500/20"
              }`}
            >
              {myProfileDatas.isAvailableForHire ? "• Open for Hire" : "• Busy"}
            </span>
          </div>

          {/* Info Total Proyek */}
          <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-700/50 flex justify-between items-center text-sm">
            <span className="text-slate-400">Total Portfolio Projects</span>
            <span className="font-bold text-slate-200">
              {myProfileDatas.totalProjects} Proyek
            </span>
          </div>

          {/* Rendering List Skill dengan Array .map() */}
          <div>
            <p className="text-xs text-slate-400 mb-2 font-semibold uppercase tracking-wider">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {myProfileDatas.skills.map((skill, index) => (
                <span
                  key={index}
                  className="text-xs bg-slate-700 text-slate-200 px-3 py-1 rounded-lg border border-slate-600"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Button Action dengan Event Handler */}
          <button
            onClick={() => alert(`Menghubungi ${myProfileDatas.name}...`)}
            className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-sm transition shadow-lg shadow-indigo-600/20 active:scale-[0.98]"
          >
            Hubungi Developer
          </button>
        </div>
    </>
  );
};

export default ProfileCard;
