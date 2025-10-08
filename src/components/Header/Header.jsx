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
        {/* Main Navigation */}
        <nav className={style.navigation}>
          <ul className={style.navList}>
            {navigationItems.map((item) => (
              <li key={item.href} className={style.navItem}>
                <a className={style.navLink} href={item.href}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {/* Mobile Menu Button */}
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
      {/* Mobile Menu */}
      <div
        className={`${style.mobileMenu} ${
          isMobileMenuOpen ? style.active : ""
        }`}
      >
        <ul className={style.mobileNavList}>
          {navigationItems.map((item) => (
            <li
              key={item.href}
              className={`${style.mobileNavItem} ${
                item.dropdown ? style.dropdown : ""
              }`}
            >
              {item.dropdown ? (
                <>
                  <button className={style.mobileDropdownToggle}>
                    {item.name}
                    <span className={style.mobileDropdownArrow}>▼</span>
                  </button>
                  <ul className={style.mobileSubmenu}>
                    {item.dropdown.map((subItem) => (
                      <li
                        key={subItem.href}
                        className={style.mobileSubmenuItem}
                      >
                        <a
                          href={subItem.href}
                          className={style.mobileSubmenuLink}
                        >
                          <span className={style.mobileSubMenuIcon}>
                            {subItem.icon}
                          </span>
                          {subItem.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <a className={style.mobileNavLink} href={item.href}>
                  {item.name}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
