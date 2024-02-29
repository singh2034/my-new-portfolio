import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <>
      <nav className="py-3 border">
        <div className="container">
          <div className="flex items-center justify-between">
            {/* logo */}
            <Link to={"/"}>
              <Logo />
            </Link>
            {/* menu desktop */}
            <div className="hidden sm:hidden md:hidden lg:hidden xl:inline 2xl:inline">
              <ul className="flex items-center justify-center gap-10 font-medium text-lg">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/about"}>About</Link>
                </li>
                <li>
                  <Link to={"/education"}>Education</Link>
                </li>
                <li>
                  <Link to={"/tech-stack"}>Tech Stack</Link>
                </li>
                <li>
                  <Link to={"/projects"}>Projects</Link>
                </li>
                <li>
                  <Link to={"/experience"}>Experience</Link>
                </li>
              </ul>
            </div>
            {/* contact button */}
            <div className="hidden sm:hidden md:hidden lg:hidden xl:inline 2xl:inline">
              <Link to={"/get-in-touch"}>
                <Button className="font-medium text-[1.01rem]">Contact</Button>
              </Link>
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
