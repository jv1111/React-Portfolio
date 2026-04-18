import React from "react";
import useScrollObserver from "../hooks/useScrollObserver";

const AboutSectionNav = () => {
  const { isScrolling, scrollY } = useScrollObserver();
  // todo scrolling on page position, use props

  return (
    <div
      className={`fixed top-25 left-1/2 -translate-x-1/2 z-20 bg-[#331400] border border-primary w-fit px-2 py-1 rounded-full shadow shadow-primary md:left-16 md:translate-x-0 transition-opacity duration-2000 ${
        scrollY === 0 || isScrolling ? "opacity-100" : "opacity-5"
      } hover:opacity-100`}
    >
      <p className="text-secondary-light text-xs">
        About -&gt; Skills -&gt; Tech Stack -&gt; Education
      </p>
    </div>
  );
};

export default AboutSectionNav;
