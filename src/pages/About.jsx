import { AboutBanner, Education, Skills, TechStack } from "../sections";
import useScrollObserver from "../hooks/useScrollObserver";

function About() {
  const isScrolling = useScrollObserver();

  return (
    <div className="flex flex-col">
      <AboutBanner />
      <Skills />
      <TechStack />
      <Education />
    </div>
  );
}

export default About;
