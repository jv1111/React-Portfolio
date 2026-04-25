import React from "react";
import { Icon } from "@iconify/react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import skillCards from "../data/skillCards.json";
import skillsList from "../data/skillsList.json";
import HorizontalCard from "../components/HorizontalCard";

const SkillPreview = () => {
  const [setRef, visibleStates] = useIntersectionObserver(skillCards.length);

  return (
    <section className="md:px-15 bg-secondary-surface">
      <div className="container">
        <div className="wrapper flex flex-col md:flex-row items-center md:items-stretch gap-10 md:gap-10">
          <div className="flex-1 flex flex-col gap-10 md:gap-9 pt-16 md:py-15 ">
            <h2 className="text-primary text-center md:text-start">
              Skills Preview
            </h2>
            {/* cards container */}
            <div className="flex flex-wrap flex-col gap-10 justify-center items-center md:ps-20 pb-6">
              {skillCards.map((card, index) => (
                <HorizontalCard
                  key={card.title}
                  ref={setRef(index)}
                  data-index={index}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                  size={1}
                  className={`opacity-0 -translate-x-8 ${visibleStates[index]
                      ? `animate-slide-in-left ${index > 0 ? `animation-delay-${index * 200}` : ""}`
                      : ""
                    }`}
                />
              ))}
            </div>
          </div>

          <div className="flex items-center justify-start w-full md:w-fit rounded-md md:rounded-none text-secondary bg-secondary-light px-6 py-10 md:py-0 mb-2 md:mb-0">
            <div className="flex flex-col gap-8 mx-auto justify-center">
              {skillsList.map((skill, index) => (
                <div key={skill.category} className="flex flex-col gap-1">
                  <h3 className="text-sm font-bold">{skill.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <a key={item} href="#" className="text-xs">
                        {item}
                      </a>
                    ))}
                  </div>
                  {index !== skillsList.length - 1 && (
                    <div className="w-full h-px bg-secondary-surface/20 mt-2 rounded-full" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillPreview;
