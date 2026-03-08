import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
const profilePhoto = `${process.env.PUBLIC_URL || ""}/ProfilePic.jpg`;

const Navbar = (props) => {
  const [hireMeClick, setHireMeClick] = useState(false);
  const [hamBurgerClick, setHamBurgerClick] = useState(false);

  const navLinks = [
    { to: "/", label: "ABOUT" },
    { to: "/projects", label: "PROJECTS" },
    { to: "/resume", label: "RESUME" },
  ];

  const linkClass = "font-secondary text-sm text-gray-300 hover-accent transition";
  const activeClass = "accent-text font-semibold";

  return (
    <div className="top-0 z-50 w-full bg-[#212428] navbar navbar-shadow flex justify-evenly items-center fixed">
      <div
        className="flex items-center bg-[#212428] max-w-7xl w-full justify-evenly text-stone-100 h-24 max-[450px]:h-[86px]"
        id="navbar"
      >
        <Link to="/" className="nav-first-wrapper pl-3 flex items-center">
          <img
            src={profilePhoto}
            alt="Praket Aggarwal"
            className="w-10 h-10 rounded-full object-cover"
            style={{ minWidth: "40px" }}
          />
          <h4 className="sm:text-lg text-md pl-2 uppercase tracking-wider font-normal font-primary">
            Praket Aggarwal
          </h4>
        </Link>

        <div className="nav-second-wrapper" style={{ width: "60%" }}>
          <ul className="hidden xl:flex nav-second-wrapper justify-evenly font-secondary text-sm">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) => (isActive ? `${linkClass} ${activeClass}` : linkClass)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav-third-wrapper xl:w-1/6 flex justify-around items-center">
          <button
            onClick={() => {
              setHireMeClick(true);
              props.onHireMeClick(hireMeClick);
            }}
            className="accent-text transition-all duration-500 sm:w-32 hover:mb-2 rounded-md text-[10px] py-3 px-2 sm:px-0 btn-shadow sm:font-medium font-primary sm:text-sm tracking-wider max-[450px]:w-[84px] max-[450px]:text-[8px] max-[450px]:px-0 max-[450px]:font-light max-[450px]:py-2"
          >
            CONTACT ME
          </button>

          <div
            className={`${
              hireMeClick ? "opacity-100" : "invisible opacity-0"
            } hireme z-50 max-w-6xl xl:m-auto transition-all flex ease-out duration-200 flex-col justify-center items-center rounded-2xl fixed top-6 bottom-4 sm:top-3 sm:bottom-3 btn-shadow`}
            style={{ backgroundColor: "#212428" }}
          >
            <div className="w-full flex justify-end pr-5 text-xl text-gray-300">
              <button
                className="sm:w-8 sm:h-8 w-7 h-7 sm:text-md text-sm top-3 right-3 flex justify-center absolute items-center rounded-full btn-shadow cursor-pointer"
                onClick={() => {
                  setHireMeClick(false);
                  props.onHireMeClick(hireMeClick);
                }}
              >
                <FaTimes className="accent-text" />
              </button>
            </div>

            <div className="flex flex-col justify-evenly font-secondary items-center w-full sm:px-12 sm:pt-4 sm:pb-6 px-6 py-3">
              <label className="flex flex-col w-full sm:text-sm text-xs text-gray-300" htmlFor="fullName">
                Full Name
                <input
                  className="text-gray-200 focus:outline-none capitalize pl-3 mt-2 bg-transparent w-full h-10 rounded-lg border border-gray-600 border-solid"
                  id="fullName"
                  type="text"
                  placeholder="e.g. Jane Smith"
                  style={{ backgroundColor: "#212428" }}
                />
              </label>
              <label className="sm:mt-4 mt-3 flex flex-col w-full sm:text-sm text-xs text-gray-300" htmlFor="email">
                Email
                <input
                  className="text-gray-200 focus:outline-none pl-3 mt-2 bg-transparent w-full h-10 rounded-lg border border-gray-600 border-solid"
                  id="email"
                  type="email"
                  placeholder="e.g. jane@example.com"
                  style={{ backgroundColor: "#212428" }}
                />
              </label>
              <label className="text-gray-300 sm:mt-4 mt-3 flex flex-col w-full sm:text-sm text-xs" htmlFor="subject">
                Subject
                <input
                  placeholder="e.g. Game dev collaboration"
                  className="text-gray-200 focus:outline-none capitalize pl-2 mt-3 bg-transparent w-full h-10 rounded-lg border border-gray-600 border-solid"
                  id="subject"
                  type="text"
                  style={{ backgroundColor: "#212428" }}
                />
              </label>
              <label className="sm:mt-4 mt-3 flex flex-col w-full font-secondary sm:text-sm text-xs text-gray-300" htmlFor="message">
                Message
                <textarea
                  className="text-gray-200 focus:outline-none capitalize pl-3 pt-3 mt-2 bg-transparent w-full rounded-lg border border-gray-600 border-solid"
                  id="message"
                  rows="5"
                  placeholder="Say hi or tell me about your project..."
                  style={{ backgroundColor: "#212428" }}
                />
              </label>
            </div>

            <div className="flex justify-end items-end w-full absolute bottom-0 pr-6 pb-3 pt-2">
              <button
                onClick={() => {
                  setHireMeClick(false);
                  props.onHireMeClick(hireMeClick);
                }}
                className="accent-text sm:w-28 w-20 rounded-md text-xs py-2 btn-shadow ml-5 mr-3 sm:ml-8 sm:mr-6 sm:font-semibold sm:text-base"
              >
                SUBMIT
              </button>
            </div>
          </div>

          <button
            className="accent-text xl:hidden m-3 p-3 max-[450px]:p-2 text-lg rounded-full btn-shadow"
            onClick={() => setHamBurgerClick(true)}
          >
            <GiHamburgerMenu className="max-[450px]:text-sm" />
          </button>

          {/* Mobile menu */}
          <div
            className={`${
              hamBurgerClick ? "opacity-100" : "opacity-0 invisible"
            } fixed flex overflow-y-auto flex-col top-0 bottom-0 left-0 py-6 px-6 transition-all duration-500 ease-out z-50`}
            style={{ backgroundColor: "#191b1e", width: "min(370px, 85vw)" }}
          >
            <div className="max-[350px]:w-5/6 w-full">
              <div className="flex justify-between items-center">
                <Link to="/" className="nav-first-wrapper pl-3 flex items-center" onClick={() => setHamBurgerClick(false)}>
                  <img src={profilePhoto} alt="Praket Aggarwal" className="w-10 h-10 rounded-full object-cover" style={{ minWidth: "40px" }} />
                  <h4 className="sm:text-lg text-md pl-2 uppercase tracking-wider font-normal font-primary">
                    Praket Aggarwal
                  </h4>
                </Link>
                <button
                  className="w-12 h-12 flex justify-center items-center rounded-full btn-shadow"
                  onClick={() => setHamBurgerClick(false)}
                >
                  <FaTimes className="accent-text" />
                </button>
              </div>
              <p className="leading-8 font-primary text-gray-400 w-11/12 py-5">
                Game Developer & AI Engineer
              </p>
            </div>

            <div className="border-t border-gray-700 border-b py-1 pb-8">
              <ul className="flex flex-col justify-evenly font-semibold font-secondary text-sm text-gray-300 gap-2 pt-4">
                {navLinks.map(({ to, label }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      onClick={() => setHamBurgerClick(false)}
                      className="block py-2 hover-accent transition"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h6 className="uppercase tracking-wider text-sm text-gray-300 pt-6">Find me</h6>
              <div className="flex w-56 justify-evenly mt-4">
                <a
                  href="https://github.com/tekarp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-md text-xl flex justify-center items-center btn-shadow"
                  style={{ backgroundColor: "#212428" }}
                >
                  <FiGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/praket-aggarwal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-md text-xl flex justify-center items-center btn-shadow"
                  style={{ backgroundColor: "#212428" }}
                >
                  <FiLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
