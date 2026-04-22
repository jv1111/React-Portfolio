import React from "react";
import BarDivider from "../components/BarDivider";
import education from "../data/education.json";
import stiImg from "../assets/sti.webp";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Education = () => {
  const [setRef, visibleStates] = useIntersectionObserver(education.length);

  const imageMap = {
    "sti.webp": stiImg,
  };

  return (
    <section id="education" className="py-16 md:py-15">
      <div className="container">
        <div className="wrapper">
          <div>
            <h2 className="text-primary">Education</h2>
            <BarDivider variant="dark" width="w-55" className="mt-2" />
            {/* education */}
            {education.map((edu, index) => (
              <div
                className={`grid grid-cols-2 mt-10 duration-700 opacity-0 ${visibleStates[index] && `opacity-100 ${index > 0 && `animation-delay-${index * 200}`}`}`}
                key={index}
                ref={setRef(index)}
                data-index={index}
              >
                {/* info */}
                <div className="flex flex-col h-full">
                  <h3 className="font-bold">
                    {edu.degree}
                    <span className="font-normal"> ({edu.year})</span>
                  </h3>
                  <p className="text-sm">{edu.school}</p>
                  <p className="mt-10">
                    <strong>Awards</strong>
                  </p>
                  {edu.awards.map((award, awardIndex) => (
                    <p key={awardIndex} className="text-sm">
                      {award}
                    </p>
                  ))}
                  <a
                    href={edu.link}
                    className="text-sm mt-auto text-primary underline"
                  >
                    Read More...
                  </a>
                </div>

                <img
                  src={imageMap[edu.image]}
                  alt={edu.school}
                  className="m-auto rounded-md shadow-lg shadow-black"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
