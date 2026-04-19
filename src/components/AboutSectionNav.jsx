import React from "react";
import useScrollObserver from "../hooks/useScrollObserver";
import useActiveSection from "../hooks/useActiveSection";

const sections = [
  { label: "Banner", id: "banner" },
  { label: "Skills", id: "skills" },
  { label: "Tech Stack", id: "tech-stack" },
  { label: "Education", id: "education" },
];

const sectionIds = sections.map((s) => s.id);

const AboutSectionNav = () => {
  const { isScrolling, scrollY } = useScrollObserver();
  const activeSection = useActiveSection(sectionIds, 0.5);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className={`fixed top-25 left-1/2 -translate-x-1/2 z-20 bg-[#331400] border border-primary w-fit px-2 py-1 rounded-full shadow shadow-primary md:left-16 md:translate-x-0 transition-opacity duration-2000 ${
        scrollY === 0 || isScrolling ? "opacity-100" : "opacity-5"
      } hover:opacity-100`}
    >
      <div className="flex flex-row gap-1 text-secondary-light text-xs">
        {sections.map((section, index) => (
          <div className="flex flex-row gap-1">
            <button
              className={`hover:underline cursor-pointer bg-transparent border-none p-0 text-xs transition-colors duration-300 ${
                activeSection === section.id
                  ? "text-primary"
                  : "text-secondary-light"
              }`}
              onClick={() => handleClick(section.id)}
            >
              {section.label}
            </button>
            {index < sections.length - 1 && <span>-&gt;</span>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSectionNav;
