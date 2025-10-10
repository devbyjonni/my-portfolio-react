import React from "react";

export default function Footer() {
  return (
    <footer className="footer py-4 mt-5">
      <div className="container d-flex flex-wrap justify-content-between align-items-center">
        <p className="mb-0 text-muted">
          © 2025 Jonni Åkesson. Designed for MyPortfolio Theme.
        </p>
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
      </div>
    </footer>
  );
}
