import { useEffect, useState } from "react";

const useActiveSection = (sectionIds = [], threshold = 0.4) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? null);

  useEffect(() => {
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [sectionIds, threshold]);

  return activeSection;
};

export default useActiveSection;
