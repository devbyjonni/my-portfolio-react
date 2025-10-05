export function Header() {
  return (
    <header className="py-3 border-bottom">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="fs-4 mb-0">My Portfolio</h1>
        <div className="d-flex align-items-center gap-3">
          <a
            href="https://github.com/devbyjonni"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github fs-4 text-dark"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/jonniakesson/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin fs-4 text-dark"></i>
          </a>
        </div>
      </div>
    </header>
  );
}
