import React from "react";

export default function Skills() {
  return (
    <section id="skills" className="skills-section py-5">
      <div className="container">
        <h2 className="section-title mb-4 text-start">Skills</h2>
        <p className="section-subtitle mb-5 text-muted">
          The tools and technologies I use most — from iOS app development in
          Swift to full-stack work with C#, React, and FastAPI.
        </p>

        <div className="d-flex flex-wrap justify-content-start align-items-center gap-5">
          <a
            href="https://www.swift.org"
            target="_blank"
            rel="noopener noreferrer"
            className="skill-card text-center text-decoration-none"
          >
            <i className="fa-brands fa-swift fs-1 mb-2"></i>
            <h6 className="skill-name">Swift / SwiftUI</h6>
          </a>

          <a
            href="https://learn.microsoft.com/en-us/dotnet/csharp/"
            target="_blank"
            rel="noopener noreferrer"
            className="skill-card text-center text-decoration-none"
          >
            <i className="fa-solid fa-code fs-1 mb-2"></i>
            <h6 className="skill-name">C# / .NET</h6>
          </a>

          <a
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="skill-card text-center text-decoration-none"
          >
            <i className="fa-brands fa-react fs-1 mb-2"></i>
            <h6 className="skill-name">React</h6>
          </a>

          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
            className="skill-card text-center text-decoration-none"
          >
            <i className="fa-brands fa-js fs-1 mb-2"></i>
            <h6 className="skill-name">JavaScript</h6>
          </a>

          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
            rel="noopener noreferrer"
            className="skill-card text-center text-decoration-none"
          >
            <i className="fa-brands fa-html5 fs-1 mb-2"></i>
            <h6 className="skill-name">HTML / CSS</h6>
          </a>

          <a
            href="https://git-scm.com/doc"
            target="_blank"
            rel="noopener noreferrer"
            className="skill-card text-center text-decoration-none"
          >
            <i className="fa-brands fa-git-alt fs-1 mb-2"></i>
            <h6 className="skill-name">Git / GitHub</h6>
          </a>

          <a
            href="https://www.python.org"
            target="_blank"
            rel="noopener noreferrer"
            className="skill-card text-center text-decoration-none"
          >
            <i className="fa-brands fa-python fs-1 mb-2"></i>
            <h6 className="skill-name">Python / FastAPI</h6>
          </a>
        </div>

        {/* Centered Button */}
        <div className="text-center mt-5">
          <a href="#" className="btn btn-outline-secondary">
            <i className="fa-solid fa-layer-group me-2"></i>View Full Tech Stack
          </a>
        </div>
      </div>
    </section>
  );
}
