import { useEffect, useState } from "react";

const useScrollObserver = () => {
  // Tracks if user is actively scrolling
  const [isScrolling, setIsScrolling] = useState(false);

  // Tracks current scroll position (Y axis)
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      // Update scroll position
      setScrollY(window.scrollY);

      // Mark as scrolling
      setIsScrolling(true);

      console.log("scrolling...", window.scrollY);

      // Reset timer (prevents flicker)
      clearTimeout(timeoutId);

      // After 3 seconds of no scroll → stop scrolling state
      timeoutId = setTimeout(() => {
        setIsScrolling(false);
      }, 1500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  // Return both values
  return { isScrolling, scrollY };
};

export default useScrollObserver;
