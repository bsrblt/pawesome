import { useState, useEffect } from "react";

const useIsSmallScreen = (threshold: number = 768) => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < threshold);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [threshold]);

  return isSmallScreen;
};

export default useIsSmallScreen;
