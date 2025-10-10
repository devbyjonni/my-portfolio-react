// Header.jsx
import React from "react";
import Collapse from "bootstrap/js/dist/collapse";

export default function Header() {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();

    const target = document.getElementById(targetId);
    if (!target) return;

    const doScroll = () => {
      // Use your CSS offset (scroll-margin-top) by using scrollIntoView:
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    // If mobile menu is open, close it first and scroll after it’s hidden
    const nav = document.getElementById("navbarNav");
    if (nav && nav.classList.contains("show")) {
      const instance = Collapse.getOrCreateInstance(nav);
      const onHidden = () => {
        nav.removeEventListener("hidden.bs.collapse", onHidden);
        doScroll();
      };
      nav.addEventListener("hidden.bs.collapse", onHidden);
      instance.hide();
    } else {
      doScroll();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg py-3">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Left Navigation */}
        <div
          className="collapse navbar-collapse justify-content-start"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active"
                href="#home"
                onClick={(e) => handleNavClick(e, "home")}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#about"
                onClick={(e) => handleNavClick(e, "about")}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#projects"
                onClick={(e) => handleNavClick(e, "projects")}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#skills"
                onClick={(e) => handleNavClick(e, "skills")}
              >
                Skills
              </a>
            </li>
          </ul>
        </div>

        {/* Right Social Icons */}
        <div className="d-flex align-items-center gap-4">
          <a
            href="https://github.com/devbyjonni"
            className="text-dark fs-2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/jonniakesson/"
            className="text-dark fs-2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler ms-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}
