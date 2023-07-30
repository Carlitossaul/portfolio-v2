import { useEffect, useState } from "react";
import styles from "./ScrollToTop.module.css";
import { FaAngleDoubleUp } from "react-icons/fa";

import { useModeLightContext } from "../../hooks/useModeLightContext";

const ScrollToTop = () => {
  const { modeLight } = useModeLightContext();
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;

    if (scrollPosition > 400) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {showScrollButton && (
        <button
          className={`${styles.scrollToTopButton} ${
            modeLight ? styles.buttonLight : styles.buttonDark
          }`}
          onClick={handleScrollToTop}
        >
          <FaAngleDoubleUp />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
