import React from "react";
import tempImage from "../assets/profile.webp";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import projectsData from "../data/projects.json";

const ProjectsPreview = () => {
  const projects = projectsData.map(project => ({
    ...project,
    image: tempImage
  }));

  const [setRef, visibleStates] = useIntersectionObserver(projects.length);

  return (
    <section className="p-16 md:p-15">
      <div className="container">
        <div className="wrapper flex flex-col gap-10 md:gap-9">
          {/* title */}
          <div className="max-w-90">
            <h2 className="text-primary">Projects Preview</h2>
            <small className="mt-2 text-sm text-secondary">
              Explore my recent work, featuring applications and systems I’ve
              designed and developed.
            </small>
          </div>

          {/* cards container */}
          <div className="flex flex-wrap flex-col md:flex-row gap-10 items-center justify-center pb-6 ">
            {projects.map((project, index) => (
              <div
                className={`group flex flex-col max-w-64 text-center rounded-md overflow-hidden border border-white bg-black/50 shadow-md duration-400 select-none cursor-pointer hover:-translate-y-1 hover:scale-105 hover:border-primary opacity-0 -translate-x-8 ${visibleStates[index] ? `animate-fade-in-up ${index > 0 ? `animation-delay-${index * 200}` : ""}` : ""}`}
                key={index}
                ref={setRef(index)}
                data-index={index}
              >
                {/* upper */}
                <div>
                  <img
                    className="h-40 w-screen object-cover border-b border-white duration-400 group-hover:border-primary"
                    src={project.image}
                    alt=""
                  />
                </div>
                {/* lower */}
                <div className="px-2 py-5 text-white duration-400 group-hover:text-primary group-hover:bg-black/50">
                  <h3 className="text-base">{project.title}</h3>
                  <p className="text-secondary-light text-sm text-start mt-2">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
