import { Navbar, Nav, Container } from "react-bootstrap"
import { Link, useLocation } from "react-router-dom"

const NetflixBar = () => {
  const location = useLocation()
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Link to="/" className="navbar-brand">
          <img
            src="src/assets/img/logo.png"
            style={{ width: "100px", height: "55px" }}
          />
        </Link>
        <Navbar.Toggle aria-controls="nav" />
        <Navbar.Collapse id="nav">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Link
              to="/"
              className={
                location.pathname === "/"
                  ? "nav-link fw-bold active"
                  : "nav-link fw-bold text-secondary "
              }
            >
              Home
            </Link>
            <Link
              to="/tv-shows"
              className={
                location.pathname === "/tv-shows"
                  ? "nav-link fw-bold active"
                  : "nav-link fw-bold text-secondary "
              }
            >
              TV Shows
            </Link>
            <Link
              to="/movies"
              className={
                location.pathname === "/movies"
                  ? "nav-link fw-bold active"
                  : "nav-link fw-bold text-secondary "
              }
            >
              Movies
            </Link>
            <Link
              to="/recently-added"
              className={
                location.pathname === "/recently-added"
                  ? "nav-link fw-bold active"
                  : "nav-link fw-bold text-secondary "
              }
            >
              Recently Added
            </Link>
            <Link
              to="/my-list"
              className={
                location.pathname === "/my-list"
                  ? "nav-link fw-bold active"
                  : "nav-link fw-bold text-secondary "
              }
            >
              My List
            </Link>
            <Link
              to="/profile"
              className={
                location.pathname === "/profile"
                  ? "nav-link fw-bold active"
                  : "nav-link fw-bold text-secondary "
              }
            >
              Profile
            </Link>
          </Nav>

          <div className="d-flex align-items-center text-white">
            <i className="bi bi-search icons me-3"></i>
            <div className="fw-bold me-3">KIDS</div>
            <i className="bi bi-bell icons me-3"></i>
            <i className="bi bi-person-circle icons"></i>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NetflixBar
