import { AboutBanner, Skills, TechStack } from "../sections";

function About() {
  return (
    <div className="flex flex-col">
      <AboutBanner />
      <Skills />
      <TechStack />
    </div>
  );
}

export default About;
