import { Navbar, Nav, Container } from "react-bootstrap"

const NetflixBar = () => {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src="src/assets/img/logo.png"
            style={{ width: "100px", height: "55px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="nav" />
        <Navbar.Collapse id="nav">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link className="fw-bold text-white ">Home</Nav.Link>
            <Nav.Link className="fw-bold text-white">TV Shows</Nav.Link>
            <Nav.Link className="fw-bold text-white">Movies</Nav.Link>
            <Nav.Link className="fw-bold text-white">Recently Added</Nav.Link>
            <Nav.Link className="fw-bold text-white">My List</Nav.Link>
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
