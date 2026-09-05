import React from "react";
import { Link } from "react-router-dom";
import {
  GAME_ENGINE_PROJECTS,
  RENDERING_PROJECTS,
  GAMEPLAY_AI_PROJECTS,
} from "../data/projects";

function ProjectCard({ project }) {
  const isVideoThumb = project.thumbnail && (project.thumbnail.endsWith(".mp4") || project.thumbnail.endsWith(".webm") || project.thumbnail.endsWith(".mov"));
  const isImageThumb = project.thumbnail && !isVideoThumb;

  return (
    <Link
      to={`/project/${project.id}`}
      className="block rounded-xl btn-shadow feature-box text-gray-300 font-secondary overflow-hidden hover:opacity-95 transition h-full w-full"
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
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <p className="accent-text text-[11px] tracking-wider uppercase mt-1">{project.subtitle}</p>
        <p className="text-gray-400 mt-2 text-sm leading-relaxed">{project.shortDescription}</p>
      </div>
    </Link>
  );
}

function Section({ title, subtitle, projects }) {
  return (
    <section className="mb-12">
      <div className="mb-5">
        <h6 className="accent-text tracking-widest text-[11px] font-medium font-primary">{subtitle}</h6>
        <h2 className="text-2xl lg:text-4xl font-secondary text-gray-300 font-bold mt-1">{title}</h2>
      </div>
      <div className="overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
        <div className="flex gap-4 min-w-max">
          {projects.map((p) => (
            <div key={p.id} className="w-[280px] lg:w-[320px] flex-shrink-0">
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const Projects = () => {
  return (
    <div className="max-w-6xl xl:m-auto px-5 pt-28 pb-20">
      <div className="mb-10">
        <h1 className="lg:text-5xl text-4xl font-secondary text-gray-300 font-bold mt-3">
          Projects
        </h1>
      </div>

      <Section
        title="Game Engine"
        subtitle="GAME ENGINE"
        projects={GAME_ENGINE_PROJECTS}
      />
      <Section
        title="Rendering"
        subtitle="RENDERING"
        projects={RENDERING_PROJECTS}
      />
      <Section
        title="Gameplay & AI Programming"
        subtitle="GAMEPLAY & AI PROGRAMMING"
        projects={GAMEPLAY_AI_PROJECTS}
      />
    </div>
  );
};

export default Projects;
