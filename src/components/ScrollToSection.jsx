import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToSection = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const sectionId = pathname.replace("/", "");
    if (!sectionId) return;

    const el = document.getElementById(sectionId);
    if (el) {
      // Get navbar height (adjust if your navbar height changes)
      const navbar = document.querySelector(".navbar");
      const navbarHeight = navbar ? navbar.offsetHeight : 0;

      // Calculate top position with offset
      const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight; // 10px extra padding

      window.scrollTo({
        top,
        behavior: "smooth"
      });
    }
  }, [pathname]);

  return null;
};

export default ScrollToSection;
