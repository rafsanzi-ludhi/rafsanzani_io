import { useState, useEffect } from "react";

function useScrollTrigger(scrollTriggerHeight = 400) {
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > scrollTriggerHeight) {
        setTriggered(true);
      } else {
        setTriggered(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollTriggerHeight]);

  return triggered;
}

export default useScrollTrigger;
