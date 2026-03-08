import React from "react";
import { useParams, Link } from "react-router-dom";
import { getProjectById } from "../data/projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = getProjectById(id);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-5 pt-28 pb-20">
        <p className="text-gray-400">Project not found.</p>
        <Link to="/projects" className="accent-text mt-4 inline-block">← Back to Projects</Link>
      </div>
    );
  }

  const hasVideo = project.videoSrc || project.youtubeEmbedId;
  const isYoutube = !!project.youtubeEmbedId;

  return (
    <div className="max-w-4xl mx-auto px-5 pt-28 pb-20">
      <Link to="/projects" className="accent-text text-sm font-medium mb-6 inline-block hover:underline">
        ← Back to Projects
      </Link>

      <header className="mb-8">
        <h1 className="text-4xl lg:text-5xl font-bold text-white font-secondary">{project.title}</h1>
        <p className="accent-text tracking-wider uppercase mt-2">{project.subtitle}</p>
        {project.status === "ongoing" && (
          <span className="inline-block mt-2 bg-amber-600/20 text-amber-400 text-sm font-semibold px-3 py-1 rounded">
            Ongoing
          </span>
        )}
      </header>

      {/* Video / YouTube embed – main thing people see */}
      {hasVideo && (
        <div className="rounded-xl overflow-hidden btn-shadow mb-10 aspect-video bg-black">
          {isYoutube ? (
            <iframe
              title={`${project.title} video`}
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${project.youtubeEmbedId}?autoplay=0`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video
              className="w-full h-full object-contain"
              src={project.videoSrc}
              controls
              autoPlay
              muted
              loop
              playsInline
            />
          )}
        </div>
      )}

      {/* Optional extra image on project page (e.g. VoxelTerrainBuilder) */}
      {project.detailImage && (
        <div className="rounded-xl overflow-hidden btn-shadow mb-10">
          <img
            src={project.detailImage}
            alt={`${project.title} screenshot or diagram`}
            className="w-full h-auto object-contain bg-[#1a1b1e]"
          />
        </div>
      )}

      <div className="space-y-8 text-gray-300 font-primary">
        <section>
          <h3 className="text-xl font-semibold text-white mb-2">Overview</h3>
          <p className="leading-relaxed">{project.overview}</p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-white mb-2">My Role</h3>
          <p className="leading-relaxed">{project.role}</p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-white mb-2">Technologies</h3>
          <p className="leading-relaxed">{project.tech}</p>
        </section>

        {project.playLink && (
          <section>
            <a
              href={project.playLink}
              target="_blank"
              rel="noopener noreferrer"
              className="accent-text font-semibold px-5 py-3 rounded-md btn-shadow inline-block hover:opacity-90 transition"
            >
              {project.playLabel || "Play / View"} →
            </a>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
