import React from "react";

function ProjectDetail() {
  return (
    <>
      {/* Top bar */}
      <header className="py-3">
        <div className="container d-flex justify-content-between align-items-center">
          <a href="/" className="btn btn-outline-secondary btn-sm">
            <i className="fa-solid fa-arrow-left me-2"></i>Back to Home
          </a>
          <div className="d-flex align-items-center gap-3">
            <a
              href="https://github.com/devbyjonni"
              className="text-dark fs-4"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/jonniakesson/"
              className="text-dark fs-4"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="hero-section d-flex align-items-center">
        <div className="container">
          <h1 className="hero-title">App Project 1</h1>
          <p className="hero-subtitle">
            A native iOS app built with <strong>SwiftUI</strong> and powered by
            a <strong>FastAPI</strong> backend — designed to deliver live data
            with clean architecture, async networking, and smooth animations.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-5">
        <div className="container">
          {/* Overview */}
          <div className="row align-items-center mb-5">
            <div className="col-md-6">
              <img
                src="https://placehold.co/600x400/f7f7f7/aaaaaa?text=App+Screenshot"
                className="img-fluid rounded-3 shadow-sm"
                alt="App Project Screenshot"
              />
            </div>
            <div className="col-md-6">
              <h3 className="mb-3">Overview</h3>
              <p className="text-muted">
                This project delivers real-time data with SwiftUI and SwiftData,
                integrating a FastAPI backend that handles live updates and data
                scraping.
              </p>
              <ul className="text-muted">
                <li>Built with SwiftUI and SwiftData</li>
                <li>Async/Await networking layer</li>
                <li>FastAPI backend deployed on Railway</li>
                <li>Real-time scraping with Playwright</li>
              </ul>
            </div>
          </div>

          {/* Architecture */}
          <div className="row align-items-center flex-md-row-reverse mb-5">
            <div className="col-md-6">
              <img
                src="https://placehold.co/600x400/eeeeee/aaaaaa?text=Architecture+Diagram"
                className="img-fluid rounded-3 shadow-sm"
                alt="Architecture Diagram"
              />
            </div>
            <div className="col-md-6">
              <h3 className="mb-3">Architecture</h3>
              <p className="text-muted">
                The app follows an MVVM structure with clear separation between
                data, view, and logic layers. Backend endpoints are secured with
                JWT authentication for reliability and safety.
              </p>
            </div>
          </div>

          {/* Interface */}
          <div className="row align-items-center mb-5">
            <div className="col-md-6">
              <img
                src="https://placehold.co/600x400/f9f9f9/aaaaaa?text=UI+Preview"
                className="img-fluid rounded-3 shadow-sm"
                alt="Interface Preview"
              />
            </div>
            <div className="col-md-6">
              <h3 className="mb-3">Interface & UX</h3>
              <p className="text-muted">
                Featuring card animations, dynamic layouts, and a minimalist
                color palette — designed to provide a smooth, engaging
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Link */}
      <section className="py-5 text-center">
        <div className="container">
          <h3 className="mb-3 fw-semibold">Explore the Code</h3>
          <p className="text-muted mb-4">
            The full source for this project is available on my GitHub.
          </p>
          <a
            href="https://github.com/devbyjonni"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <i className="fa-brands fa-github me-2"></i>View Code on GitHub
          </a>
        </div>
      </section>
    </>
  );
}

export default ProjectDetail;
