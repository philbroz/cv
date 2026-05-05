/**
 * cv-data.js
 * ─────────────────────────────────────────────
 * Edit ONLY this file to update your CV.
 * No HTML or CSS knowledge required.
 * ─────────────────────────────────────────────
 */

const CV = {

  // ── META ─────────────────────────────────
  meta: {
    title:       "Filippo Frater — Software Engineer",
    description: "CV of Filippo Frater, Senior Software Developer specializing in .NET backend development.",
    lastUpdated: "April 2026",
    siteUrl:     "philbroz.github.io/cv",
    pdfFile:     "filippo-frater-cv.pdf",   // set to "" to hide the button
  },

  // ── IDENTITY ─────────────────────────────
  identity: {
    firstName:  "Filippo",
    lastName:   "Frater",
    role:       "Software Engineer",
    photo:      "photo.jpg",           // e.g. "photo.jpg" — leave "" to show initials
    eyebrow:    "Open to opportunities",
    bio:        "Passionate about software since childhood. Specialized in .NET backend development, with a strong focus on clean architecture, team collaboration, and shipping things that actually work. Currently building scalable solutions at Moltiply Group.",
    stats: [
      { icon: "clock", text: "12+ years" },
      { icon: "map",   text: "Remote · Hybrid" },
      { icon: "globe", text: "Italy 🇮🇹" },
    ],
  },

  // ── CONTACT ──────────────────────────────
  contact: [
    { icon: "mail",     label: "filippo.frater@gmail.com",  href: "mailto:filippo.frater@gmail.com" },
    { icon: "github",   label: "philbroz",                  href: "https://github.com/philbroz" },
    { icon: "linkedin", label: "filippofrater",             href: "https://linkedin.com/in/filippofrater" },
    { icon: "location", label: "San Donà di Piave, IT",     href: "" },
  ],

  // ── NAV SECTIONS ─────────────────────────
  // Must match the section `id` values below.
  nav: [
    { id: "experience",     label: "Experience" },
    { id: "education",      label: "Education" },
    { id: "certifications", label: "Certifications" },
    { id: "extra",          label: "Extra" },
  ],

  // ── EXPERIENCE ───────────────────────────
  experience: [
    {
      current:  true,
      yearMark: "2025",
      period:   "Apr 2025\npresent",
      company:  "Moltiply Group",
      title:    "Senior Software Developer",
      location: "Cagliari · Remote",
      desc:     "Product software development within the Innovation Center. Focus on scalable and modern solutions, with primary emphasis on backend development and software architecture.",
      tags:     [".NET Core", "SQL Server", "Docker", "Azure DevOps", "CI/CD", "Git"],
    },
    {
      current:  false,
      yearMark: "2024",
      period:   "Apr 2024\nApr 2025",
      company:  "Custom S.p.A",
      title:    "Software Development Specialist",
      location: "Mira, VE · Hybrid",
      desc:     "Development on OneStore, a point-of-sale solution for the retail fashion and luxury sector. .NET Core backend with Angular and React Native frontends.",
      tags:     [".NET Core", "Angular", "React Native", "Azure SQL"],
    },
    {
      current:  false,
      yearMark: "2021",
      period:   "Apr 2021\nApr 2024",
      company:  "Bizeta Retail Solutions",
      title:    "Software Development Specialist",
      location: "Mestre & Mira, VE · Hybrid",
      desc:     "Core developer on the OneStore POS platform. Backend architecture, cross-platform mobile with React Native, and Azure DevOps branch workflow management.",
      tags:     [".NET Core", "AngularJS", "React Native", "Azure DevOps", "GitKraken"],
    },
    {
      current:  false,
      yearMark: "2015",
      period:   "Feb 2015\nApr 2021",
      company:  "Xerum Srl · XHolding Group",
      title:    "Software Developer",
      location: "Quarto d'Altino, VE · In-person",
      desc:     "Industrial sector solutions, technical analysis, pre-sales support. SugarCRM integration and cross-platform work with RFID and barcode technologies.",
      tags:     [".NET Framework", "Xamarin", "RFID", "MQTT", "C", "SQL Server"],
    },
    {
      current:  false,
      yearMark: "2014",
      period:   "Aug 2014\nJan 2015",
      company:  "Pernix Srl · XHolding Group",
      title:    "Software Developer — Internship",
      location: "Quarto d'Altino, VE",
      desc:     "Six-month internship on industrial terminal and RFID projects. Obtained Zebra certifications in barcode, RFID, and print management.",
      tags:     [".NET Framework", "C", "SQL Server", "RFID"],
    },
  ],

  // ── EDUCATION ────────────────────────────
  education: [
    {
      school: "Università Ca' Foscari — Treviso",
      degree: "Bachelor's in Statistics & Computer Sciences for Business",
      meta:   "2009 – 2013 · L-41 Statistics · In-person",
    },
    {
      school: "ITIS V. Volterra — San Donà di Piave",
      degree: "High School Diploma in Computer Science (Abacus Project)",
      meta:   "2004 – 2009 · In-person",
    },
  ],

  // ── CERTIFICATIONS ───────────────────────
  certifications: [
    {
      badge:   "AZ\n400",
      name:    "AZ-400 — DevOps Solutions",
      issuer:  "Microsoft · July 2024",
    },
    {
      badge:   "🐳",
      name:    "Docker Mastery: Kubernetes + Swarm",
      issuer:  "Udemy · Bret Fisher · August 2025",
    },
  ],

  // ── EXTRA ────────────────────────────────
  extra: {
    cards: [
      {
        label: "Tutoring",
        text:  "Mathematics, physics, electronics and CS to middle and high school students during university years.",
        full:  false,
      },
      {
        label: "Volunteering",
        text:  "Youth activities & summer camps ages 14–21. Football coach for children 5–10 (Gioco Calcio project).",
        full:  false,
      },
    ],
    interests: {
      label: "Interests & Community",
      tags:  ["sports", "books", "movies & TV", "travel", "retrogaming", "community events", "XeDotNet", "GitBar"],
    },
  },

};
