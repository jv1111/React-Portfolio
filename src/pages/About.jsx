import { AboutBanner, Education, Skills, TechStack } from "../sections";
import { AboutSectionNav } from "../components";

function About() {
  return (
    <div className="relative flex flex-col">
      <AboutSectionNav />
      <AboutBanner />
      <Skills />
      <TechStack />
      <Education />
    </div>
  );
}

export default About;
