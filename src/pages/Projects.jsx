import React from "react";
import { Link } from "react-router-dom";
import { GAMES, TOOLS_ENGINEERING } from "../data/projects";

function ProjectCard({ project }) {
  const isVideoThumb = project.thumbnail && (project.thumbnail.endsWith(".mp4") || project.thumbnail.endsWith(".webm") || project.thumbnail.endsWith(".mov"));
  const isImageThumb = project.thumbnail && !isVideoThumb;

  return (
    <Link
      to={`/project/${project.id}`}
      className="block rounded-xl btn-shadow feature-box text-gray-300 font-secondary overflow-hidden hover:opacity-95 transition h-full"
    >
      <div className="aspect-video bg-[#1a1b1e] relative overflow-hidden">
        {isVideoThumb ? (
          <video
            className="w-full h-full object-cover"
            src={project.thumbnail}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : isImageThumb ? (
          <img src={project.thumbnail} alt="" className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500 text-4xl font-bold">
            {project.title.charAt(0)}
          </div>
        )}
        {project.status === "ongoing" && (
          <span className="absolute top-2 right-2 bg-amber-600/90 text-white text-xs font-semibold px-2 py-1 rounded">
            Ongoing
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <p className="accent-text text-sm tracking-wider uppercase mt-1">{project.subtitle}</p>
        <p className="text-gray-400 mt-2 text-sm leading-relaxed">{project.shortDescription}</p>
      </div>
    </Link>
  );
}

function Section({ title, subtitle, projects }) {
  return (
    <section className="mb-20">
      <div className="mb-10">
        <h6 className="accent-text tracking-widest text-sm font-medium font-primary">{subtitle}</h6>
        <h2 className="text-4xl lg:text-5xl font-secondary text-gray-300 font-bold mt-2">{title}</h2>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}

const Projects = () => {
  return (
    <div className="max-w-6xl xl:m-auto px-5 pt-28 pb-20">
      <div className="mb-16">
        <h6 className="accent-text tracking-widest lg:text-sm text-xs font-medium font-primary">PORTFOLIO</h6>
        <h1 className="lg:text-6xl text-4xl font-secondary text-gray-300 font-bold mt-3">
          Projects
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl">
          Game projects and tools I've built or contributed to. Click any card for details, role, and tech.
        </p>
      </div>

      <Section
        title="Games"
        subtitle="GAME PROJECTS"
        projects={GAMES}
      />
      <Section
        title="Tools & Engineering"
        subtitle="ENGINEERING & TOOLS"
        projects={TOOLS_ENGINEERING}
      />
    </div>
  );
};

export default Projects;
