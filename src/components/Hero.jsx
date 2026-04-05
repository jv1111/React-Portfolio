import profileImage from "../assets/profile.webp";
import { Icon } from "@iconify/react";

function Hero() {
  const contactIcons = [
    { icon: "mdi:phone", text: "+1 (123) 456-7890" },
    { icon: "mdi:web", text: "www.jeremy.dev" },
    { icon: "mdi:email", text: "jeremy@example.com" },
  ];

  return (
    <section className="flex flex-col items-center justify-center h-screen min-h-fit py-10">
      <div className="container grid items-center text-center md:text-left md:grid-cols-2">
        <div className="flex flex-col items-center justify-center md:h-auto md:items-start md:justify-start md:order-1 order-2">
          <h1 className="animate-fade-in-up text-3xl md:text-4xl xl:text-6xl xl:text-start">
            <span className="text-shadow text-text">Hi I'm </span>
            <span className="text-primary text-shadow animate-fade-in-up animation-delay-200">
              Jeremy
            </span>
          </h1>

          <div className="flex flex-col xl:flex-row items-center md:items-start xl:items-center gap-4 mt-3 animate-fade-in-up animation-delay-400">
            <div className="bg-text border-2 border-primary h-2.5 w-45 rounded-xs shadow-[2px_2px_5px_rgba(0,0,0,1)] animate-slide-in-left animation-delay-600" />
            <h2 className="text-shadow text-2xl xl:text-3xl">
              Software Developer
            </h2>
          </div>

          <h6 className="max-w-105 mt-3 text-secondary animate-fade-in-up animation-delay-800">
            Building Android apps, full-stack web applications, and embedded
            systems
          </h6>

          <div className="flex gap-4 mt-10 animate-fade-in-up animation-delay-1000">
            <button className="btn btn--primary">Resume</button>
            <button className="btn btn--secondary">Github</button>
          </div>

          <div className="flex flex-col gap-3 mt-10">
            {contactIcons.map((item, index) => {
              const delays = [
                "animation-delay-1200",
                "animation-delay-1400",
                "animation-delay-1600",
              ];

              return (
                <div
                  key={index}
                  className={`flex gap-3 items-center animate-slide-in-left ${delays[index]}`}
                >
                  <Icon icon={item.icon} className="text-3xl text-primary" />
                  <span className="text-secondary">{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center md:justify-end md:order-2 order-1">
          <img
            src={profileImage}
            alt="Profile"
            className="h-50 w-50 md:h-100 md:w-100 object-cover rounded-md shadow-2xl "
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
