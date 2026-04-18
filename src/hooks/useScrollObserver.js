import { useEffect, useState } from "react";

const useScrollObserver = () => {
  // State that tells us if user is currently scrolling
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      // When user scrolls → set to true
      setIsScrolling(true);

      console.log("scrolling...", window.scrollY);

      // Clear previous timer (prevents flickering)
      clearTimeout(timeoutId);

      // If user stops scrolling for 150ms → set to false
      timeoutId = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  // Return the boolean so components can use it
  return isScrolling;
};

export default useScrollObserver;
