import React from "react";
import skillsList from "../data/skillsList.json";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const TechStack = () => {
  const [setRef, visibleStates] = useIntersectionObserver(skillsList.length);

  return (
    <section className="bg-secondary-surface text-secondary-light py-16 md:py-15">
      <div className="container">
        <div className="wrapper flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Tech Stack</h2>
          <div className="flex flex-col gap-2">
            {skillsList.map((skill, index) => (
              <div
                key={index}
                ref={setRef(index)}
                data-index={index}
                className={`opacity-0 transition-opacity duration-700 ${visibleStates[index] && "opacity-100"} `}
              >
                <span className="text-sm font-semibold">{skill.category}:</span>{" "}
                <span className="text-sm font-light">
                  {skill.items.join(", ")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
