import React from "react";
import BarDivider from "../components/BarDivider";
import skillsPackage from "../data/skillsPackage.json";
import androidImg from "../assets/android.webp";
import websiteImg from "../assets/website.webp";
import embeddedImg from "../assets/embedded.webp";

const Skills = () => {
  const imageMap = {
    android: androidImg,
    website: websiteImg,
    embedded: embeddedImg,
  };
  return (
    <section className="px-16 py-16 md:py15 md:px-15">
      <div className="container">
        <div className="wrapper">
          <h2 className="text-primary text-center lg:text-start">Skills</h2>
          <BarDivider
            variant="dark"
            width="w-55"
            className="mt-2 mx-auto lg:mx-0"
          />
          {/* cards container */}
          <div className="flex flex-col gap-20 lg:gap-16 mt-10">
            {skillsPackage.map((skill, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-center`}
                >
                  {/* Text side */}
                  <div
                    className={`flex flex-col gap-4 w-100 text-center lg:text-start mx-auto ${!isEven ? "order-2 md:order-2" : "order-2 md:order-1"}`}
                  >
                    <h3 className="text-xl font-bold">{skill.title}</h3>
                    <p className="text-secondary text-sm leading-relaxed">
                      {skill.description}
                    </p>
                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mt-2 justify-center lg:justify-start">
                      {skill.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="btn btn--dark text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Image side */}
                  <div
                    className={`${!isEven ? "order-1 md:order-1" : "order-1 md:order-2"}`}
                  >
                    <img
                      src={imageMap[skill.image]}
                      alt={skill.title}
                      className="w-80 h-100 object-cover rounded-lg shadow-lg shadow-black mx-auto"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
