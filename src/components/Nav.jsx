/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Logo from "./Logo";
import NavBtn from "./NavBtn";

function Nav() {
  const navlinks = ["company", "help", "sign up", "log in"];
  const dropMenuLinks = [
    "all features",
    "for file sharing",
    "for collabration",
    "for data security",
    "for branding",
    "for fast feedback",
  ];
  const dropMenu = useRef();

  // handle show modal
  const showMenu = () => {
    dropMenu.current.classList.toggle("showMenu");
  };
  // handle state of nav btn
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="logo">
        <a href="/">
          <Logo className="w-20 h-20 cursor-pointer" />
        </a>
      </div>
      {/*logo*/}
      {/*btn-nav in small screens */}
      <NavBtn isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className={`${isOpen ? "nav-list" : "max-sm:hidden"}`}>
        <ul
          className={`navLinks ${isOpen && "max-sm:flex-col  max-sm:h-[70Vh]"}`}
        >
          <li className="navLink">
            <a href="#">Pricing</a>
          </li>
          <div className="dropMenuContanier">
            <li className="navLink ">
              <button className="dropwMenuLink" onClick={showMenu}>
                Features <IoIosArrowDown className="ms-1 mt-1 w-4 h-4 block" />
              </button>
            </li>
            <div className="dropMenu" ref={dropMenu}>
              <ul>
                {dropMenuLinks.map((link) => {
                  return (
                    <li className="navLink !border-e-0 py-1.5">
                      <a href="#">{link}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          {/*dropMenuContanier*/}
          {navlinks.map((link, index) => {
            if (index === navlinks.length - 1) {
              return (
                <li className="navLink !border-e-0">
                  <a href="#">{link}</a>
                </li>
              );
            }
            return (
              <li className="navLink">
                <a href="#">{link}</a>
              </li>
            );
          })}
        </ul>
      </div>
      {/*nav-list*/}
    </nav>
  );
}

export default Nav;
