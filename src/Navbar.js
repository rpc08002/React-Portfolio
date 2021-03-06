const Navbar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">Ryan Curtin</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="contact.html">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="portfolio.html">Portfolio</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="index.html"
                >About<span className="sr-only">(current)</span></a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
}
 
export default Navbar;