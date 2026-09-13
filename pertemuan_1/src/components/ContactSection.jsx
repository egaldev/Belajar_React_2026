import { useState } from "react";

const ContactSection = ({ sectionTitle, sectionSubtitle }) => {
  const [formData, setFormData] = useState({ nama: "", email: "", pesan: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Terima kasih ${formData.nama}! Pesan kamu sudah terkirim.`);
    setFormData({ nama: "", email: "", pesan: "" });
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-slate-900/70 border border-slate-800 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-indigo-500/60 transition";

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 px-4 sm:px-6 max-w-3xl mx-auto space-y-8"
    >
      {/* HEADER SECTION */}
      <div className="text-center space-y-3">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          {sectionTitle}
        </h2>

        {sectionSubtitle && (
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            {sectionSubtitle}
          </p>
        )}
      </div>

      {/* FORMULIR KONTAK */}
      <form
        onSubmit={handleSubmit}
        className="p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800/80 space-y-4"
      >
        <input
          type="text"
          name="nama"
          value={formData.nama}
          onChange={handleChange}
          placeholder="Nama Kamu"
          required
          className={inputClass}
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Kamu"
          required
          className={inputClass}
        />

        <textarea
          name="pesan"
          value={formData.pesan}
          onChange={handleChange}
          placeholder="Tulis pesan kamu di sini..."
          rows="4"
          required
          className={`${inputClass} resize-none`}
        />

        <button
          type="submit"
          className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-sm transition shadow-lg shadow-indigo-600/25 active:scale-95"
        >
          Kirim Pesan
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
