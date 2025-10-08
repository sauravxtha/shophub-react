import React from "react";
import { useState } from "react";
import style from "./Header.module.css";
import { appConfig, navigationItems } from "../../data/appData";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.logo}>
          <span className={style.logoIcon}>🛍️</span>
          <span className={style.logoText}>{appConfig.name}</span>
        </div>
        <nav className={style.navigation}>
          <ul className={style.navList}>
            {navigationItems.map((item, index) => (
              <li key={index} className={style.navItem}>
                <a className={style.navLink} href={item.href}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={style.mobileMenuBtn}
          aria-label="Toggle mobile menu"
        >
          <span
            className={`${style.hamburger} ${
              isMobileMenuOpen ? style.active : ""
            }`}
          ></span>
        </button>
      </div>
      <div
        className={`${style.mobileMenu} ${
          isMobileMenuOpen ? style.active : ""
        }`}
      >
        <ul className={style.mobileNavList}>
          {navigationItems.map((item, index) => (
            <li key={index} className={style.mobileNavItem}>
              <a className={style.mobileNavLink} href={item.href}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
