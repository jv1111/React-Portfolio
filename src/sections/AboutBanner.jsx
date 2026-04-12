import React from "react";
import aboutBanner from "../assets/about_banner.webp";
import BarDivider from "../components/BarDivider";

const AboutBanner = () => {
  return (
    <section className="relative bg-black px-16 md:px-15">
      <img
        src={aboutBanner}
        alt="about banner"
        className="absolute left-0 h-screen w-[50vw] object-cover z-1 hidden md:block"
      />
      <div className="container relative z-10">
        <div className="fixed top-25 left-1/2 -translate-x-1/2 z-20 bg-[#331400] border border-primary w-fit px-2 py-1 rounded-full shadow shadow-primary md:left-16 md:translate-x-0">
          <p className="text-secondary-light text-xs">
            About -&gt; Skills -&gt; Tech Stack -&gt; Education
          </p>
        </div>
        <div className="wrapper h-screen grid md:grid-cols-2 md:gap-10 items-center justify-center text-center md:text-start py-16 md:py-10">
          <div className="hidden md:block" />
          <div className="flex items-center justify-center gap-2 md:justify-end md:p-20">
            <div className="flex flex-col gap-2 items-center justify-center text-center md:items-start md:justify-start md:text-left">
              <h1 className="text-3xl md:text-5xl text-primary text-shadow-white animate-fade-in-up">
                About Me
              </h1>
              <BarDivider
                variant="light"
                width="w-55"
                className="animate-slide-in-left animation-delay-200"
              />
              <p className="text-base text-secondary-light animate-fade-in-up animation-delay-400">
                I am passionate about building applications that solve
                real-world problems. I build Android apps, full-stack web
                applications, and embedded systems using a variety of frameworks
                and tools. I enjoy exploring different technologies, tackling
                technical challenges, and continuously growing my skills as a
                software developer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
