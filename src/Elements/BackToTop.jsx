import React, { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShowButton(window.scrollY > 700);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className="w-12 h-12 bg-[#212428] flex justify-center items-center rounded-full btn-shadow fixed accent-text text-xl md:bottom-12 bottom-4 z-10 sm:right-8 right-5 transition-all duration-300 opacity-100 hover:opacity-90"
        aria-label="Back to top"
      >
        <AiOutlineArrowUp />
      </button>
    )
  );
};

export default BackToTop;
