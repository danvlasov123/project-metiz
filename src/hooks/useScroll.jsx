import { useEffect, useState } from "react";

function useScroll() {
  const [currentScroll, setCurrentScroll] = useState(0);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setCurrentScroll(scrollY);
    });
  }, []);

  return currentScroll;
}

export default useScroll;
