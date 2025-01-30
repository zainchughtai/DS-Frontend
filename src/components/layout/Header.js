import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null); // Track the currently active menu item
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Track the mobile menu state
  const [isMobile, setIsMobile] = useState(false); // Detect if the device is mobile

  const router = useRouter();
  // Detect screen size to determine if it's mobile or desktop
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close the mobile menu on URL change
  useEffect(() => {
    const handleRouteChange = () => {
      setIsMobileMenuOpen(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  // Handle menu item toggle on click (for mobile)
  const handleMenuItemClick = (index) => {
    if (isMobile) {
      setActiveMenu((prev) => (prev === index ? null : index)); // Toggle dropdown visibility
    }
  };

  // Handle mouse enter (for desktop)
  const handleMouseEnter = (index) => {
    if (!isMobile) {
      setActiveMenu(index); // Open dropdown on hover
    }
  };

  // Handle mouse leave (for desktop)
  const handleMouseLeave = () => {
    if (!isMobile) {
      setActiveMenu(null); // Close dropdown on hover out
    }
  };

  // Handle mobile menu toggle
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Handle closing the mobile menu
  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const services = [
    { slug: "web-development", name: "Web Development" },
    { slug: "crm-integration", name: "CRM Integration" },
    { slug: "digital-marketing", name: "Digital Marketing" },
    { slug: "e-commerce", name: "E-Commerce" },
    { slug: "mobile-app-development", name: "Mobile Application Development" },
    { slug: "project-management", name: "Project Management & Consultation" },
  ];
  return (
    <header className="header-area">
      <div className="custom-container">
        <div className="custom-row align-items-center justify-content-between">
          <div className="header-left d-flex align-items-center">
            <Link href="/" className="logo">
              <img src="/images/DS-Logo.png" alt="Logo" />
            </Link>

            <div className="header-left-right">
              <Link href="/contact-us" className="theme-btn">
                Contact Us
              </Link>

              {/* Mobile menu toggle */}
              <span className="menu-bar" onClick={handleMobileMenuToggle}>
                <i className="las la-bars"></i>
              </span>
            </div>

            {/* Navbar wrapper */}
            <nav className={`navbar-wrapper ${isMobileMenuOpen ? "active" : ""}`}>
              <span className="close-menu-bar" onClick={handleCloseMobileMenu}>
                <i className="las la-times"></i>
              </span>

              <ul style={{ marginBottom: "0" }}>
                <li>
                  <Link href="/">Home</Link>
                </li>

                <li
                  className={`dropdown-menu-item home-menu ${activeMenu === 0 ? "active" : ""}`}
                  data-menu-index="0"
                  onClick={() => handleMenuItemClick(0)}
                  onMouseEnter={() => handleMouseEnter(0)}
                  onMouseLeave={handleMouseLeave}
                 
                >
                  <Link href="/">Services</Link>

                  <span className="dropdown-menu-item-icon">
                    <i className="las la-angle-down"></i>
                  </span>
                  <ul className="dropdown-menu" style={{ display: activeMenu === 0 ? "block" : "none" }}>
                    <div className="menu-header-home-menu-links-container">
                      <ul id="menu-header-home-menu-links" className="menu">
                        {services.map((service) => (
                          <li key={service.slug}>
                            <Link href={`/services/${service.slug}`}>{service.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ul>
                </li>

                <li
                  className={`dropdown-menu-item home-menu ${activeMenu === 1 ? "active" : ""}`}
                  data-menu-index="0"
                  onClick={() => handleMenuItemClick(1)}
                  onMouseEnter={() => handleMouseEnter(1)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link href="/">Company</Link>

                  <span className="dropdown-menu-item-icon">
                    <i className="las la-angle-down"></i>
                  </span>
                  <ul className="dropdown-menu" style={{ display: activeMenu === 1 ? "block" : "none" }}>
                    <div className="menu-header-home-menu-links-container">
                      <ul id="menu-header-home-menu-links" className="menu">
                        <li>
                          <Link href="/about">About Us</Link>
                        </li>
                        <li>
                          <Link href="/portfolio">Portfolio</Link>
                        </li>
                        <li>
                          <Link href="/culture">Culture</Link>
                        </li>
                        <li>
                          <Link href="/careers">Careers</Link>
                        </li>
                      </ul>
                    </div>
                  </ul>
                </li>

                <li>
                  <Link href="/blogs">Blogs</Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Header right section */}
          <div className="header-right">
            <div className="header-contact-info d-flex align-items-center">
              <div className="phone-number">
                <a href="tel:+92-(042)-35721419">
                  Call Us <i className="las la-arrow-right"></i>{" "}
                </a>
                +92-(042)-35721419
              </div>

              <Link href="/contact-us" className="theme-btn">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
