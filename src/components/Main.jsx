import { Row, Col, Dropdown, Container } from "react-bootstrap"
import MovieCarousel from "./MovieCarousel"

const Main = () => {
  return (
    <>
      <Container fluid>
        <Row className="justify-content-between align-items-center mb-4 g-0">
          <Col className="d-flex align-items-center">
            <h2 className="mb-0 text-white">TV Shows</h2>

            <Dropdown className="ms-3">
              <Dropdown.Toggle variant="dark" className="rounded-0">
                Genres
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>Comedy</Dropdown.Item>
                <Dropdown.Item>Drama</Dropdown.Item>
                <Dropdown.Item>Thriller</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>

          <Col xs="auto" className="text-white px-0 fs-5">
            <i className="bi bi-grid me-5"></i>
            <i className="bi bi-grid-3x3 me-4"></i>
          </Col>
          <MovieCarousel title="Trending Now" query="Harry Potter" />
          {/* Harry Potter ha due film uguali con stesso id quindi la console da errore perchè trova due key uguali, */}
          <MovieCarousel title="Watch It Again" query="Star Wars" />
          <MovieCarousel title="New Releases" query="Lord of the Rings" />
        </Row>
      </Container>
    </>
  )
}

export default Main
