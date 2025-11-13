import { useState } from "react";
import style from "./Header.module.css";
import { appConfig, navigationItems } from "../../data/appData";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
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
                {item.dropdown ? (
                  <div
                    onMouseEnter={() => setIsDropdownOpen(item.name)}
                    onMouseLeave={() => setIsDropdownOpen(null)}
                    onClick={() =>
                      setIsDropdownOpen(
                        isDropdownOpen == item.name ? null : item.name
                      )
                    }
                    className={style.dropdownContainer}
                  >
                    <button className={style.dropdown}>
                      {item.name}
                      <span className={style.dropdownArrow}>▼</span>
                    </button>
                    <ul
                      className={`${style.submenuItems} ${
                        isDropdownOpen == item.name ? style.active : ""
                      }`}
                    >
                      {item.dropdown.map((item) => (
                        <li key={item.name} className={style.submenuItem}>
                          <a className={style.submenuLink} href={item.href}>
                            <span className={style.submenuIcon}>
                              {item.icon}
                            </span>
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <a className={style.navLink} href={item.href}>
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
        {/* action buttons */}
        <div className={style.action}>
          <button className={style.search}>
            <span className={style.searchIcon}>🔍</span>
          </button>
          <button className={style.cart}>
            <span className={style.cartIcon}>🛒</span>
          </button>
          <button className={style.user}>
            <span className={style.userIcon}>👤</span>
          </button>
        </div>
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
                  <button
                    className={style.mobileDropdownToggle}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    {item.name}
                    <span
                      className={`${style.mobileDropdownArrow} ${
                        isDropdownOpen ? style.active : ""
                      }`}
                    >
                      ▼
                    </span>
                  </button>
                  <ul
                    className={`${style.mobileSubmenu} ${
                      isDropdownOpen ? style.active : ""
                    }`}
                  >
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
