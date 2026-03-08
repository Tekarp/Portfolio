import React, { useState } from "react";
import { Link } from "react-router-dom";
import ResumeBox from "../components/Resume/ResumeBox";
import SkillsProgress from "../components/Resume/SkillProgress";

const RESUME_PDF = `${process.env.PUBLIC_URL || ""}/Resume_Praket_Aggarwal.pdf`;

const experience = [
  {
    title: "Game Development Intern",
    subTitle: "Avian Hearts · June 2024 – August 2024",
    BtnText: "Unity · Photon · Firebase",
    description: "Worked on level design, rigging, and gameplay programming in Unity. Implemented multiplayer using Photon client-host architecture. Integrated Firebase for authentication and player data. Collaborated via Agile using Jira and Git.",
  },
  {
    title: "Software Engineer Intern",
    subTitle: "Compusoft Advisors India Pvt Ltd · May 2023 – July 2023",
    BtnText: ".NET · Azure AI",
    description: "Developed an automated Tax Reconciliation System using .NET Web API. Integrated Azure AI services for smart data extraction and matching.",
  },
];

const education = [
  {
    title: "MS Computer Science (Game Development)",
    subTitle: "University of Southern California · Expected May 2027",
    BtnText: "—",
    description: "Focus on game engineering, systems, and production.",
  },
  {
    title: "B.Tech Information Technology",
    subTitle: "NMIMS MPSTME · Graduated May 2025 · CGPA 3.77/4",
    BtnText: "—",
    description: "Core CS, software engineering, and project work.",
  },
];

const certifications = [
  "Microsoft Certified: Azure AI Engineer Associate (AI-102)",
];

const frontendSkills = [
  { name: "C#", level: "95%" },
  { name: "Unity", level: "90%" },
  { name: "C++", level: "80%" },
  { name: "Unreal Engine", level: "75%" },
  { name: "Godot / GDScript", level: "75%" },
  { name: "Python", level: "85%" },
];

const backendSkills = [
  { name: "Git / GitHub", level: "95%" },
  { name: "Gameplay Systems", level: "88%" },
  { name: "AI / Pathfinding", level: "82%" },
  { name: "Multiplayer (Photon)", level: "70%" },
  { name: "Azure / ML", level: "70%" },
];

const ResumePage = () => {
  const [tab, setTab] = useState("experience"); // experience | education | skills

  return (
    <div className="max-w-6xl xl:m-auto px-5 pt-28 pb-20">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
        <div>
          <h6 className="accent-text tracking-widest text-sm font-medium font-primary">RESUME</h6>
          <h1 className="text-4xl lg:text-5xl font-bold text-white font-secondary mt-2">Experience & Skills</h1>
        </div>
        <a
          href={RESUME_PDF}
          target="_blank"
          rel="noopener noreferrer"
          className="accent-text font-semibold px-5 py-3 rounded-md btn-shadow inline-block hover:opacity-90 transition w-fit"
        >
          Download PDF Resume
        </a>
      </div>

      <div className="flex flex-wrap gap-2 mb-10">
        {["experience", "education", "skills"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-3 rounded-md font-primary text-sm capitalize transition ${
              tab === t ? "pricing-btn-click text-white" : "pricing-btn text-gray-400 hover:text-white"
            }`}
          >
            {t === "experience" ? "Experience" : t === "education" ? "Education" : "Skills"}
          </button>
        ))}
      </div>

      {tab === "experience" && (
        <div className="space-y-6">
          {experience.map((item, i) => (
            <ResumeBox
              key={i}
              title={item.title}
              subTitle={item.subTitle}
              BtnText={item.BtnText}
              description={item.description}
            />
          ))}
        </div>
      )}

      {tab === "education" && (
        <div className="space-y-6">
          {education.map((item, i) => (
            <ResumeBox
              key={i}
              title={item.title}
              subTitle={item.subTitle}
              BtnText={item.BtnText}
              description={item.description}
            />
          ))}
          <div className="btn-shadow feature-box rounded-md py-6 px-6">
            <h3 className="text-lg text-gray-300 font-semibold mb-2">Certifications</h3>
            <ul className="text-gray-400 space-y-1">
              {certifications.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {tab === "skills" && (
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Game Dev & Engines</h3>
            {frontendSkills.map((s, i) => (
              <SkillsProgress key={i} skillName={s.name} progressMeter={s.level} />
            ))}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Tools & Systems</h3>
            {backendSkills.map((s, i) => (
              <SkillsProgress key={i} skillName={s.name} progressMeter={s.level} />
            ))}
          </div>
        </div>
      )}

      <div className="mt-12">
        <Link to="/projects" className="accent-text font-medium hover:underline">
          View my projects →
        </Link>
      </div>
    </div>
  );
};

export default ResumePage;
