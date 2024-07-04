import { useState, useEffect } from "react";
import MainNavBar from "./main-navbar";
import SideNavBar from "./side-navbar";

const NavBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      setIsNavbarVisible(
        scrollPosition > currentScrollPosition || currentScrollPosition < 10,
      );
      setScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <>
      <div
        className={`fixed top-0 z-50 w-full transition-transform duration-300 ${isNavbarVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <MainNavBar />
      </div>
      <div className="fixed right-0 top-8 z-50">
        <SideNavBar />
      </div>
    </>
  );
};

export default NavBar;
