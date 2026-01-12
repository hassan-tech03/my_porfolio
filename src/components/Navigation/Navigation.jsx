import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { useScrollSpy } from "../../hooks/useScrollSpy";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    
    // Close mobile menu
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav 
        className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'navbar-scrolled' : ''}`}
        style={{
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease-in-out',
          borderBottom: isScrolled ? '1px solid #e5e7eb' : 'none',
          zIndex: 1050,
          boxShadow: isScrolled ? '0 2px 20px rgba(0, 0, 0, 0.1)' : 'none'
        }}
      >
        <div className="container">
          {/* Brand/Logo */}
          <a 
            className="navbar-brand fw-bold fs-4 text-primary"
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("home");
            }}
            style={{
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}
          >
            Hassan Shahid
          </a>

          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler border-0 p-2 d-lg-none"
            type="button"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation"
            style={{
              boxShadow: 'none',
              color: 'var(--bs-primary)'
            }}
          >
            <FaBars size={20} />
          </button>

          {/* Desktop Navigation */}
          <div className="collapse navbar-collapse d-none d-lg-block">
            <ul className="navbar-nav ms-auto">
              {sections.map((section) => (
                <li key={section.id} className="nav-item mx-2">
                  <a
                    className={`nav-link fw-medium position-relative px-3 py-2 ${
                      activeSection === section.id ? 'text-primary' : 'text-dark'
                    }`}
                    href={`#${section.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(section.id);
                    }}
                    style={{
                      transition: 'color 0.3s ease',
                      textDecoration: 'none'
                    }}
                  >
                    {section.label}
                    <span 
                      className={`position-absolute bottom-0 start-50 translate-middle-x bg-primary ${
                        activeSection === section.id ? 'w-75' : 'w-0'
                      }`}
                      style={{
                        height: '2px',
                        transition: 'width 0.3s ease'
                      }}
                    ></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="position-fixed w-100 h-100 bg-dark bg-opacity-50 d-lg-none"
          style={{ 
            top: 0, 
            left: 0, 
            zIndex: 1040 
          }}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Navigation Menu */}
      <div
        className={`position-fixed top-0 end-0 h-100 bg-white shadow-lg d-lg-none ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-100'
        }`}
        style={{
          width: '300px',
          zIndex: 1045,
          transition: 'transform 0.3s ease-in-out',
          transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)'
        }}
      >
        <div className="d-flex justify-content-between align-items-center p-4 border-bottom">
          <h5 className="fw-bold text-primary mb-0">Navigation</h5>
          <button
            type="button"
            className="btn-close"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close"
          ></button>
        </div>
        
        <div className="p-4">
          <ul className="navbar-nav">
            {sections.map((section) => (
              <li key={section.id} className="nav-item mb-2">
                <a
                  className={`nav-link fw-medium px-3 py-3 rounded-3 d-block ${
                    activeSection === section.id 
                      ? 'text-primary bg-primary bg-opacity-10 border-start border-primary border-3' 
                      : 'text-dark'
                  }`}
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(section.id);
                  }}
                  style={{
                    transition: 'all 0.3s ease',
                    textDecoration: 'none'
                  }}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Mobile CTA */}
          <div className="mt-4 pt-4 border-top">
            <a 
              href="#contact" 
              className="btn btn-primary w-100 py-3 fw-medium"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("contact");
              }}
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
