import { Link } from "react-router-dom";
import logo from "../../assets/pdc_logo.png";
import { useState } from "react";
import MenuBarsIcon from "@heroicons/react/24/outline/Bars3Icon";

const Header = () => {
   const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  return (
    <div className="flex justify-between items-center md:h-28 w-full">
      <div className="w-2/6">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex items-center">
        <div className=" flex items-center gap-10 font-semibold text-grey-300 ">
          <nav className="md:block hidden ">
            <ul className="flex gap-10 ">
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
          <div className="  items-center gap-10 md:flex hidden">
            <Link
              to="/login"
              className=" text-accent hover:text-white active:text-white"
            >
              Login
            </Link>
            <Link
              to="/joinUs"
              className="hover:text-white active:text-white border-white border py-2 px-4 md:py-4 md:px-8 rounded-xl"
            >
              Join us
            </Link>
          </div>
        </div>
        <div className="h-10 w-10 block md:hidden">
          <MenuBarsIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
