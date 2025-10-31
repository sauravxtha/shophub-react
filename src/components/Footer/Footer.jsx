import styles from "./Footer.module.css";
import { footerLinks } from "../../data/appData";
import { appConfig } from "../../data/appData";

const Footer = () => {
  const { quickLinks, categories, socialLinks } = footerLinks;
  const { contact } = appConfig;
  const icons = {
    email: "📧",
    phone: "📞",
    address: "📍",
  };
  const copyrightDate = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.branding}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>🛍️</span>
              <span className={styles.logoText}>ShopHub</span>
            </div>
            <p className={styles.brandDesc}>
              Your Ultimate Shopping Destination.
            </p>
            <div className={styles.socialLinks}>
              {socialLinks.map((socialLink) => (
                <a
                  key={socialLink.name}
                  className={styles.socialLink}
                  href={socialLink.href}
                  aria-label={socialLink.name}
                >
                  <span className={styles.socialIcon}>{socialLink.icon}</span>
                </a>
              ))}
            </div>
          </div>
          <div className={styles.quickLinks}>
            <h3 className={styles.linkTitle}>Quick Links</h3>
            <ul className={styles.quickLinks}>
              {quickLinks.map((quickLink) => (
                <li key={quickLink.name} className={styles.quickLink}>
                  <a href={quickLink.href} className={styles.link}>
                    {quickLink.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.contactUs}>
            <h3 className={styles.contactTitle}>Contact Info</h3>
            <div className={styles.contactInfo}>
              {Object.entries(contact).map(([key, values]) => (
                <div key={key} className={styles.contactItem}>
                  <span className={styles.itemLogo}>{icons[key]}</span>
                  <a
                    href={
                      key == "email"
                        ? `mailto:${values}`
                        : key == "phone"
                        ? `tel:${values}`
                        : key == "address"
                        ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                            values
                          )}`
                        : "#"
                    }
                    target={key == "address" ? "_blank" : undefined}
                    rel={key === "address" ? "noopener noreferrer" : undefined}
                  >
                    {values}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.copyrightSection}>
          <div className={styles.copyrightContent}>
            <div className={styles.copyright}>
              © {copyrightDate} {appConfig.name}. All rights reserved.
            </div>
            <div className={styles.legalLinks}>
              <a href="#privacy" className={styles.legalLink}>
                Privacy Policy
              </a>
              <a href="#terms" className={styles.legalLink}>
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
