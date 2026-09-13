import {
  Zap,
  Smartphone,
  Component,
  Palette,
  ShieldCheck,
  Rocket,
} from "lucide-react";

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
  SiMysql,
  SiAnthropic,
  SiPython,
  SiExpress,
} from "react-icons/si";

export const menuNavigasi = [
  { label: "Beranda", href: "#hero" },
  { label: "Layanan", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Kontak", href: "#contact" },
];

export const dataStatistik = [
  { value: "15+", label: "Proyek Portfolio" },
  { value: "100%", label: "Responsive Design" },
  { value: "24/7", label: "Clean Architecture" },
];

export const dataFitur = [
  {
    icon: Zap,
    title: "Super Cepat",
    description:
      "Dibangun dengan Vite untuk pengalaman development yang instan.",
  },
  {
    icon: Smartphone,
    title: "Fully Responsive",
    description: "Tampilan optimal di semua perangkat, mobile hingga desktop.",
  },
  {
    icon: Component,
    title: "Component-Based",
    description: "UI terpecah menjadi komponen kecil yang reusable dan rapi.",
  },
  {
    icon: Palette,
    title: "Modern Styling",
    description: "Menggunakan Tailwind CSS untuk desain yang konsisten.",
  },
  {
    icon: ShieldCheck,
    title: "Best Practices",
    description: "Kode mengikuti standar clean code dan konvensi React.",
  },
  {
    icon: Rocket,
    title: "Siap Produksi",
    description: "Struktur proyek scalable dan mudah di-deploy kapan saja.",
  },
];

export const dataPortofolio = [
  {
    title: "E-Commerce Dashboard",
    description:
      "Dashboard admin untuk mengelola produk, pesanan, dan laporan penjualan secara real-time.",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    techStack: ["React", "Tailwind", "Node.js"],
    demoUrl: "#portfolio",
    githubUrl: "#portfolio",
  },
  {
    title: "Aplikasi Catatan (Notes App)",
    description:
      "Aplikasi pencatat dengan fitur arsip, pencarian, dan penyimpanan lokal yang ringan.",
    imageUrl:
      "https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&q=80",
    techStack: ["React", "LocalStorage"],
    demoUrl: "#portfolio",
    githubUrl: "#portfolio",
  },
  {
    title: "Landing Page Startup",
    description:
      "Landing page responsif untuk startup dengan section hero, fitur, dan testimoni dinamis.",
    imageUrl:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    techStack: ["React", "Vite", "Tailwind"],
    demoUrl: "#portfolio",
    githubUrl: "#portfolio",
  },
];
export const dataTestimoni = [
  {
    name: "Rizky Pratama",
    role: "Product Manager, TokoKita",
    initial: "RP",
    quote:
      "Kerja sama yang sangat profesional. Dashboard yang dibangun rapi, cepat, dan mudah dipakai tim kami.",
  },
  {
    name: "Salsabila Putri",
    role: "Founder, Kopi Senja",
    initial: "SP",
    quote:
      "Landing page-nya melebihi ekspektasi. Responsif di semua perangkat dan proses pengerjaannya cepat.",
  },
  {
    name: "Andi Wijaya",
    role: "Lead Developer, TechNusa",
    initial: "AW",
    quote:
      "Struktur kode bersih dan komponennya reusable. Sangat membantu tim kami untuk pengembangan lanjutan.",
  },
];

export const sosialMedia = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" },
];

export const dataTechStack = [
  {
    name: "HTML",
    icon: SiHtml5,
    gradient: "from-orange-500/20 to-orange-700/20",
    iconColor: "text-orange-500",
  },
  {
    name: "CSS",
    icon: SiCss,
    gradient: "from-blue-500/20 to-blue-700/20",
    iconColor: "text-blue-500",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    gradient: "from-yellow-400/20 to-yellow-600/20",
    iconColor: "text-yellow-400",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    gradient: "from-cyan-400/20 to-teal-600/20",
    iconColor: "text-cyan-400",
  },
  {
    name: "React JS",
    icon: SiReact,
    gradient: "from-cyan-400/20 to-blue-600/20",
    iconColor: "text-cyan-400",
  },
  {
    name: "Node JS",
    icon: SiNodedotjs,
    gradient: "from-green-500/20 to-green-700/20",
    iconColor: "text-green-500",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    gradient: "from-blue-500/20 to-cyan-600/20",
    iconColor: "text-blue-400",
  },
  {
    name: "Claude AI",
    icon: SiAnthropic,
    gradient: "from-orange-400/20 to-amber-600/20",
    iconColor: "text-orange-400",
  },
  {
    name: "Python",
    icon: SiPython,
    gradient: "from-blue-500/20 to-yellow-500/20",
    iconColor: "text-blue-400",
  },
  {
    name: "Express JS",
    icon: SiExpress,
    gradient: "from-slate-400/20 to-slate-700/20",
    iconColor: "text-slate-300",
  },
];
