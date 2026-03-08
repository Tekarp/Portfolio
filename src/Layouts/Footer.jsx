import React from "react";
import { Link } from "react-router-dom";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
const profilePhoto = `${process.env.PUBLIC_URL || ""}/ProfilePic.jpg`;

const Footer = () => {
  return (
    <div className="max-w-7xl xl:m-auto h-full">
      <div className="flex justify-center sm:flex-row flex-col w-full">
        <div className="max-[450px]:pl-3 flex sm:flex-col max-[450px]:flex-col max-[500px]:items-start flex-row justify-evenly sm:justify-center sm:items-start items-center w-full sm:w-1/4 mb-9">
          <div className="xl:pl-5 pl-3">
            <Link to="/" className="nav-first-wrapper pl-3 flex items-center">
              <img
                src={profilePhoto}
                alt="Praket Aggarwal"
                className="w-10 h-10 rounded-full object-cover"
                style={{ minWidth: "40px" }}
              />
              <h4 className="sm:text-lg text-white text-md pl-2 uppercase tracking-wider font-normal font-primary">
                Praket Aggarwal
              </h4>
            </Link>
          </div>
          <div className="flex justify-evenly sm:w-full w-3/12 max-[500px]:w-2/5 mt-7 text-gray-400 gap-2">
            <a
              href="https://github.com/tekarp"
              target="_blank"
              rel="noopener noreferrer"
              className="md:mr-5 mr-3 inner-shadow-effect max-[450px]:w-12 max-[450px]:h-12 max-[450px]:text-xl lg:w-14 lg:h-14 md:w-12 md:h-12 h-10 w-10 text-xl rounded-md btn-shadow md:text-2xl flex justify-center items-center hover:opacity-90 transition"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/praket-aggarwal/"
              target="_blank"
              rel="noopener noreferrer"
              className="max-[450px]:w-12 max-[450px]:h-12 max-[450px]:text-xl md:mr-5 mr-3 lg:w-14 lg:h-14 max-[500px]:text-lg md:w-12 md:h-12 h-10 w-10 text-xl rounded-md btn-shadow md:text-2xl flex justify-center items-center hover:opacity-90 transition"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a
              href="mailto:praketaggarwal@gmail.com"
              className="max-[450px]:w-12 max-[450px]:h-12 lg:w-14 lg:h-14 md:w-12 md:h-12 h-10 w-10 text-xl rounded-md btn-shadow flex justify-center items-center hover:opacity-90 transition"
              aria-label="Email"
            >
              <FiMail />
            </a>
          </div>
        </div>
        <div className="flex justify-evenly max-[450px]:flex-col max-[500px]:pl-4 sm:w-9/12 w-full">
          <div className="max-[500px]:mb-10">
            <h3 className="accent-text lg:text-lg max-[450px]:text-lg sm:text-md text-sm font-secondary tracking-wider mb-4">
              QUICK LINKS
            </h3>
            <div className="flex flex-col text-gray-400 max-[450px]:text-lg lg:text-lg sm:text-md text-sm font-semibold">
              <Link to="/" className="hover-accent font-normal hover:underline transition-all duration-500 mt-1">
                About
              </Link>
              <Link to="/projects" className="mt-3 hover-accent font-normal hover:underline transition-all duration-500">
                Projects
              </Link>
              <Link to="/resume" className="mt-3 hover-accent font-normal hover:underline transition-all duration-500">
                Resume
              </Link>
            </div>
          </div>
          <div className="max-[500px]:mb-10">
            <h3 className="accent-text lg:text-lg max-[450px]:text-lg sm:text-md text-sm font-secondary tracking-wider mb-4">
              CONTACT
            </h3>
            <div className="flex flex-col max-[450px]:text-lg text-gray-400 lg:text-lg sm:text-md text-sm">
              <a
                href="mailto:praketaggarwal@gmail.com"
                className="hover-accent font-normal hover:underline transition-all duration-500"
              >
                praketaggarwal@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/praket-aggarwal/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 hover-accent font-normal hover:underline transition-all duration-500"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm py-6 border-t border-gray-700/50 mt-6">
        © {new Date().getFullYear()} Praket Aggarwal. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
