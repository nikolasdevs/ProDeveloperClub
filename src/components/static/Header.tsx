import { Link } from "react-router-dom";
import logo from "../../assets/pdc_logo.png";
import MenuBarsIcon from "@heroicons/react/24/outline/Bars3Icon";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between items-center md:h-28 w-full">
      <div className="w-1/6">
        <Link to="/home">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="flex items-center w-5/6 justify-end">
        <div className="flex items-center gap-10 font-semibold text-grey-300">
          <nav className="lg:block hidden">
            <ul className="flex gap-10">
              <li className="hover:text-white active:text-white">
                <Link to="/home">Home</Link>
              </li>
              <li className="hover:text-white active:text-white">
                <Link to="/challenges">Challenges</Link>
              </li>
              <li className="hover:text-white active:text-white">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="hover:text-white active:text-white">
                <Link to="/gopro">GoPro</Link>
              </li>
            </ul>
          </nav>
          <div className="items-center gap-4 md:flex hidden w-full ">
            <Link
              to="/login"
              className="text-accent hover:text-white active:text-white"
            >
              Login
            </Link>
            <Link to="/joinUs" className=" ">
              <button className="hover:text-white active:text-white border-white border py-4 px-8 rounded-xl">
                Join us
              </button>
            </Link>
          </div>
        </div>

        <div className="h-10 w-10 block lg:hidden">
          <MenuBarsIcon onClick={toggleMenu} className="cursor-pointer" />
          {isOpen && (
            <div className="absolute top-16 h-96 w-48 flex flex-col gap-8 items-center pt-12 right-0 bg-black text-grey-300 font-semibold rounded-xl p-4 animate-slideIn opacity-90">
              <Link
                to="/home"
                className="block hover:text-white active:text-white"
              >
                Home
              </Link>
              <Link
                to="/challenges"
                className="block hover:text-white active:text-white"
              >
                Challenges
              </Link>
              <Link
                to="/blog"
                className="block hover:text-white active:text-white"
              >
                Blog
              </Link>
              <Link
                to="/gopro"
                className="block hover:text-white active:text-white"
              >
                GoPro
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
