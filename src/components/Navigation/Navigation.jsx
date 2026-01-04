import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { useIsMobile } from "../../hooks/useMediaQuery";
import styles from "./Navigation.module.scss";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  const sections = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  const sectionIds = sections.map((section) => section.id);
  const activeSection = useScrollSpy(sectionIds, 100);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    // Close offcanvas
    const offcanvasElement = document.getElementById("offcanvasNavbar");
    if (offcanvasElement) {
      const bsOffcanvas =
        window.bootstrap.Offcanvas.getInstance(offcanvasElement);
      if (bsOffcanvas) {
        bsOffcanvas.hide();
      }
    }
  };

  return (
    <nav
      className={`${styles.navigation} ${isScrolled ? styles.scrolled : ""}`}
    >
      <div className="container">
        <div className={styles.navContent}>
          <a
            href="#home"
            className={styles.logo}
            onClick={() => handleLinkClick("home")}
          >
            <span className={styles.logoText}>Portfolio</span>
          </a>

          {/* Desktop Navigation */}
          {!isMobile && (
            <ul className={styles.navLinks}>
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className={`${styles.navLink} ${
                      activeSection === section.id ? styles.active : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(section.id);
                    }}
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              className={styles.menuButton}
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <FaBars size={24} />
            </button>
          )}
        </div>
      </div>

      {/* Bootstrap Offcanvas for Mobile */}
      {isMobile && (
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          style={{
            zIndex: 10000,
            backgroundColor: "#ffffff",
            height: "100vh",
          }}
        >
          <div
            className="offcanvas-header"
            style={{
              borderBottom: "2px solid #F7FAFC",
              backgroundColor: "#ffffff",
            }}
          >
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div
            className="offcanvas-body"
            style={{
              padding: "1.5rem",
              backgroundColor: "#ffffff",
              overflowY: "auto",
              flexGrow: 1,
              height: "100%",
            }}
          >
            <ul className={styles.mobileNavLinks}>
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className={`${styles.mobileNavLink} ${
                      activeSection === section.id ? styles.active : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(section.id);
                    }}
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
