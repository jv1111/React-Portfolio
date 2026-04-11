import React from "react";
import { Icon } from "@iconify/react";

const skillCards = [
  {
    icon: "material-symbols:android",
    title: "Android Development",
    description:
      "I build Android applications using Android Studio with Kotlin and Java, creating responsive and user-friendly mobile apps with API and database integration.",
  },
  {
    icon: "mdi:web",
    title: "Web Development",
    description:
      "I build full-stack web applications using modern frameworks and tools, creating responsive and user-friendly digital experiences with API and database integration.",
  },
  {
    icon: "mdi:chip",
    title: "Embedded Systems",
    description:
      "I build embedded systems projects using microcontrollers and low-level programming, creating efficient and reliable solutions with hardware and software integration.",
  },
];

const skillsList = [
  {
    category: "Programming Language",
    items: ["C#", "Java", "Javascript", "Kotlin"],
  },
  {
    category: "Web",
    items: ["HTML", "CSS", "React.js", "Express.js", ".NET"],
  },
  {
    category: "Database",
    items: ["MySQL", "Firebase"],
  },
  {
    category: "Tools",
    items: ["Git", "Android Studio", "XAMPP"],
  },
  {
    category: "Embedded",
    items: ["Arduino (C++)"],
  },
  {
    category: "Other Technologies",
    items: ["MySQL", "WordPress", "Unity"],
  },
];

const SkillPreview = () => {
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
              {skillCards.map((card) => (
                <div
                  key={card.title}
                  className="group flex max-w-130 items-center gap-3 rounded-md border border-white bg-black/50 px-2 py-5 shadow-md duration-400 select-none cursor-pointer hover:-translate-y-1 hover:scale-105 hover:border-primary animate-slide-in-left"
                >
                  {/* left */}
                  <div className="flex w-25 h-25 items-center justify-center text-white duration-400 group-hover:text-primary">
                    <Icon icon={card.icon} width={50} height={50} />
                  </div>
                  <div className="h-25 w-1 rounded-sm bg-white duration-400 group-hover:bg-primary" />
                  {/* right */}
                  <div className="flex-1 flex flex-col gap-2 justify-center text-start">
                    <h6 className="text-white duration-400 group-hover:text-primary">
                      {card.title}
                    </h6>
                    <div className="text-secondary-light text-sm duration-400 group-hover:text-primary">
                      <p>{card.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-start w-full md:w-fit rounded-md md:rounded-none text-secondary bg-secondary-light px-6 py-10 md:py-0 mb-2 md:mb-0">
            <div className="flex flex-col gap-8 mx-auto justify-center">
              {skillsList.map((skill, index) =>
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
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillPreview;
