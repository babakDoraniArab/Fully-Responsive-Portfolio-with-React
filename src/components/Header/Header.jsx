import React, { useState } from "react";

import { BiBriefcaseAlt2 } from "react-icons/bi";
import { GiMountainCave } from "react-icons/gi";
import { FaTimes, FaRegAddressCard } from "react-icons/fa";
import { RiApps2Line } from "react-icons/ri";

import {
  AiOutlineUser,
  AiOutlineHome,
  AiOutlineFileText,
} from "react-icons/ai";

import "./_header.scss";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const MenuToggle = () => {
    setShowMenu(!showMenu);
  };
  const HideMenu = () => {
    setShowMenu(false);
  };
  return (
    <header>
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          Babak.fi
        </a>
        <div className="nav__toggle" id="nav-toggle">
          <RiApps2Line onClick={MenuToggle} />
        </div>

        <div
          className={showMenu ? "nav__menu show_menu" : "nav__menu"}
          id="nav-menu"
        >
          <ul className="nav__menu__list">
            <li className="nav__menu__list__item" onClick={HideMenu}>
              <a href="#home" className="nav__menu__list__item__link">
                <AiOutlineHome className="nav__menu__list__item__link__icon" />
                Home
              </a>
            </li>
            <li className="nav__menu__list__item" onClick={HideMenu}>
              <a href="#about" className="nav__menu__list__item__link">
                <AiOutlineUser className="nav__menu__list__item__link__icon" />{" "}
                About
              </a>
            </li>
            <li className="nav__menu__list__item" onClick={HideMenu}>
              <a href="#skills" className="nav__menu__list__item__link">
                <AiOutlineFileText className="nav__menu__list__item__link__icon" />{" "}
                Skills
              </a>
            </li>
            <li className="nav__menu__list__item" onClick={HideMenu}>
              <a href="#services" className="nav__menu__list__item__link">
                <BiBriefcaseAlt2 className="nav__menu__list__item__link__icon" />{" "}
                Services
              </a>
            </li>
            <li className="nav__menu__list__item" onClick={HideMenu}>
              <a href="#portfolio" className="nav__menu__list__item__link">
                <GiMountainCave className="nav__menu__list__item__link__icon" />{" "}
                Portfolio
              </a>
            </li>{" "}
            <li className="nav__menu__list__item" onClick={HideMenu}>
              <a href="#contactMe" className="nav__menu__list__item__link">
                <FaRegAddressCard className="nav__menu__list__item__link__icon" />{" "}
                ContactMe
              </a>
            </li>
          </ul>
          <FaTimes className="nav__close" id="nav-close" onClick={MenuToggle} />
          <div className="nav__btn"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
