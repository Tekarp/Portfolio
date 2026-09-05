import React from "react";
import { Link } from "react-router-dom";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

const About = () => {
  const name = "Praket Aggarwal";
  const aboutMe = "I'm a Master's student in Computer Science at the University of Southern California, specializing in Game Development.";
  const githubLink = "https://github.com/tekarp";
  const linkedinLink = "https://www.linkedin.com/in/praket-aggarwal/";
  const email = "praketaggarwal@gmail.com";

  const keyPoints = [
    "Gameplay systems and combat design in Unity and Unreal.",
    "AI programming for enemy behavior logic, and decision-making systems.",
    "Engine, rendering, and tooling work.",
  ];

  return (
    <div id="home" className="relative min-h-[100vh] pt-24 max-[450px]:pt-14 overflow-hidden">
      {/* DaGame (game1) video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        aria-hidden
      >
        <source src={`${process.env.PUBLIC_URL || ""}/game1.mp4`} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/70 z-[1]" aria-hidden />

      <div className="relative z-10 max-w-7xl xl:m-auto flex flex-col-reverse lg:flex-row font-secondary items-center justify-center min-h-[80vh] mt-24">
      <div className="home-wrapper-1 lg:w-3/5 w-full p-5 xl:pt-20">
        <div className="flex flex-col justify-center">
          <h6 className="accent-text mb-6 tracking-widest lg:text-md text-xs">
            GAMEPLAY ENGINEER
          </h6>
          <h1 className="text-white lg:text-6xl text-4xl font-bold mb-3">
            Hi, I'm{" "}
            <span className="accent-text name-accent">{name}</span>
          </h1>
          <h2 className="lg:text-5xl text-3xl text-white font-semibold capitalize">
          </h2>
          <p className="w-full text-gray-300 mt-8 lg:text-lg text-md leading-8 lg:leading-9">
            {aboutMe}
          </p>
          <ul className="mt-6 text-gray-400 space-y-2 list-disc list-inside lg:text-base text-sm">
            {keyPoints.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="pl-3 md:flex-row flex flex-col md:items-end items-center justify-evenly text-gray-300 font-primary h-64 md:h-48 mt-9 md:mt-6">
          <div className="flex flex-col ">
            <p className="tracking-wider text-sm">FIND ME</p>
            <div className="flex w-72 justify-evenly mt-4">
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 feature-box rounded-md btn-shadow text-2xl flex justify-center items-center hover:opacity-90 transition"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>
              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 feature-box rounded-md btn-shadow text-2xl flex justify-center items-center hover:opacity-90 transition"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
              <a
                href={`mailto:${email}`}
                className="w-16 h-16 feature-box rounded-md btn-shadow text-2xl flex justify-center items-center hover:opacity-90 transition"
                aria-label="Email"
              >
                <FiMail />
              </a>
            </div>
          </div>
          <div className="mt-6 md:mt-0">
            <Link
              to="/projects"
              className="accent-text font-semibold px-5 py-3 rounded-md btn-shadow inline-block hover:opacity-90 transition"
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>

      <div className="sm:px-5 px-7 max-w-2xl lg:max-w-full pb-10 lg:pb-0 flex-shrink-0">
        <img
          src={`${process.env.PUBLIC_URL || ""}/ProfilePic.jpg`}
          alt="Praket Aggarwal"
          className="w-full aspect-square max-w-sm mx-auto rounded-2xl btn-shadow object-cover"
        />
      </div>
      </div>
    </div>
  );
};

export default About;
