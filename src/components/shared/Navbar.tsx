// import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import Logo from "./Logo";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  // effect for scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav
        className={`py-3 border ${
          isScrolling && "fixed top-0 left-0 right-0 bg-white shadow-lg z-10"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between">
            {/* logo */}
            <a href={"#home"}>
              <Logo />
            </a>
            {/* menu desktop */}
            <div className="hidden sm:hidden md:hidden lg:hidden xl:inline 2xl:inline">
              <ul className="flex items-center justify-center gap-10 font-medium text-lg">
                <li>
                  <a href={"#home"}>Home</a>
                </li>
                <li>
                  <a href={"#about"}>About</a>
                </li>
                <li>
                  <a href={"#certificates-and-education"}>Education</a>
                </li>
                <li>
                  <a href={"#tech-stack"}>Tech Stack</a>
                </li>
                <li>
                  <a href={"#projects"}>Projects</a>
                </li>
                <li>
                  <a href={"#experience"}>Experience</a>
                </li>
              </ul>
            </div>
            {/* contact button */}
            <div className="hidden sm:hidden md:hidden lg:hidden xl:inline 2xl:inline">
              <a href={"#get-in-touch"}>
                <Button className="font-medium text-[1.01rem]">Contact</Button>
              </a>
            </div>
            {/* mobile menu */}
            <div className="inline sm:inline md:inline lg:inline xl:hidden 2xl:hidden">
              Mobile Menu
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
