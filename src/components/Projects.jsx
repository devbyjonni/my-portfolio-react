import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="projects-section py-5">
      <div className="container">
        <h2 className="section-title mb-4">Projects</h2>
        <p className="section-subtitle mb-5 text-muted">
          A curated selection of iOS and web projects — featuring SwiftUI,
          UIKit, C#, React, and FastAPI.
        </p>

        <div className="row g-4">
          {/* Project Card 1 */}
          <div className="col-md-6 col-lg-4">
            <div className="project-card card h-100">
              <img
                src="https://placehold.co/400x250/f7f7f7/aaaaaa?text=App+Screenshot"
                className="card-img-top rounded-2"
                alt="App Project 1 Screenshot"
              />
              <div className="card-body">
                <h5 className="card-title">App Project 1</h5>
                <p className="card-text text-muted">
                  Another brief explanation about this app project.
                </p>
                <a href="projects.html" className="btn btn-primary me-2">
                  <i className="fa-solid fa-arrow-right me-2"></i>Details
                </a>
                <a
                  href="https://github.com/devbyjonni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-secondary"
                >
                  <i className="fa-brands fa-github me-2"></i>View Code
                </a>
              </div>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="col-md-6 col-lg-4">
            <div className="project-card card h-100">
              <img
                src="https://placehold.co/400x250/f7f7f7/aaaaaa?text=Web+Mockup"
                className="card-img-top rounded-2"
                alt="Web Project 2 Screenshot"
              />
              <div className="card-body">
                <h5 className="card-title">Web Project 2</h5>
                <p className="card-text text-muted">
                  Short description or context for this web project.
                </p>
                <a href="#" className="btn btn-primary me-2">
                  <i className="fa-solid fa-arrow-right me-2"></i>Details
                </a>
                <a
                  href="https://github.com/devbyjonni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-secondary"
                >
                  <i className="fa-brands fa-github me-2"></i>View Code
                </a>
              </div>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="col-md-6 col-lg-4">
            <div className="project-card card h-100">
              <img
                src="https://placehold.co/400x250/f7f7f7/aaaaaa?text=Backend+API"
                className="card-img-top rounded-2"
                alt="Backend API Project"
              />
              <div className="card-body">
                <h5 className="card-title">Backend Project 3</h5>
                <p className="card-text text-muted">
                  A Python FastAPI service deployed on Railway for live football
                  match data.
                </p>
                <a href="#" className="btn btn-primary me-2">
                  <i className="fa-solid fa-arrow-right me-2"></i>Details
                </a>
                <a
                  href="https://github.com/devbyjonni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-secondary"
                >
                  <i className="fa-brands fa-github me-2"></i>View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
