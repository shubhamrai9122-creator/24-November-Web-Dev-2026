import { Link } from "react-router";

function Navbar({ issuedCount }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" to="/" aria-label="Bookroom home">
          <span className="brand-mark" aria-hidden="true">
            B
          </span>
          <span>bookroom</span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          <Link to="/">Overview</Link>
          <Link to="/books">Browse books</Link>
          <Link className="issued-link" to="/issued">
            Issued <span className="nav-count">{issuedCount}</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
