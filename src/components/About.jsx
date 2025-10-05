import React from "react";

export default function About() {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <h2 className="section-title mb-4 text-start">About Me</h2>
        <p className="section-subtitle mb-5 text-muted text-start">
          Blending technology and design to create clean, purposeful user
          experiences.
        </p>

        <div className="row align-items-center g-5">
          {/* Image Placeholder */}
          <div className="col-md-5">
            <div className="about-image bg-light rounded-3 ratio ratio-4x3 d-flex align-items-center justify-content-center">
              <span className="text-muted">Image Placeholder</span>
            </div>
          </div>

          {/* Text + Buttons */}
          <div className="col-md-7">
            <p className="about-text lead">
              I’m <strong>Jonni Åkesson</strong>, a developer focused on
              delivering polished iOS apps and reliable full-stack solutions. My
              core strength lies in <strong>Swift</strong> and{" "}
              <strong>SwiftUI</strong>, supported by experience in{" "}
              <strong>C#</strong>, <strong>React</strong>, and{" "}
              <strong>Python</strong>. You can explore more of my work on{" "}
              <a
                href="https://github.com/devbyjonni"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              .
            </p>

            <p className="about-text">
              Curious about my latest projects built with <strong>.NET</strong>,{" "}
              <strong>C#</strong>, and <strong>Umbraco</strong>? You can check
              them out{" "}
              <a href="#" className="text-link">
                here
              </a>
              .
            </p>

            <a href="#" target="_blank" className="btn btn-primary mt-3 me-2">
              <i className="fa-solid fa-diagram-project me-2"></i>View Project
            </a>
            <a
              href="https://www.linkedin.com/in/jonniakesson/"
              target="_blank"
              className="btn btn-outline-secondary mt-3"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin me-2"></i>View My Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
