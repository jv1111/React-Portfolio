import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = (numItems, threshold = 0.25) => {
  const refs = useRef([]);
  const [visibleStates, setVisibleStates] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setVisibleStates((prev) => ({ ...prev, [index]: true }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    refs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, [numItems, threshold]);

  const setRef = (index) => (el) => {
    refs.current[index] = el;
  };

  return [setRef, visibleStates];
};

export default useIntersectionObserver;