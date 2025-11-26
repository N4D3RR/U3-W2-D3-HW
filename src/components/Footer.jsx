import { Container, Row, Col, Button } from "react-bootstrap"

const Footer = () => {
  return (
    <footer className="mt-5">
      <Row className="justify-content-center mx-0">
        <Col xs={12} md={6}>
          <Row>
            <Col className="mb-2 text-secondary">
              <i className="bi bi-facebook me-2"></i>
              <i className="bi bi-instagram me-2"></i>
              <i className="bi bi-twitter-x me-2"></i>
              <i className="bi bi-youtube"></i>
            </Col>
          </Row>

          <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4 mx-0">
            <Col>
              <p className="mb-0">
                <a
                  href="#"
                  className="text-decoration-none text-secondary small my-1"
                >
                  Audio and Subtitles
                </a>
              </p>
              <p className="mb-0">
                <a
                  href="#"
                  className="text-decoration-none text-secondary small my-1"
                >
                  Media Center
                </a>
              </p>
              <p className="mb-0">
                <a
                  href="#"
                  className="text-decoration-none text-secondary small my-1"
                >
                  Privacy
                </a>
              </p>
              <p className="mb-0">
                <a
                  href="#"
                  className="text-decoration-none text-secondary small my-1"
                >
                  Contact us
                </a>
              </p>
            </Col>

            <Col>
              <p className="mb-0">
                <a
                  href="#"
                  className="text-decoration-none text-secondary small my-1"
                >
                  Audio Description
                </a>
              </p>
              <p className="mb-0">
                <a
                  href="#"
                  className="text-decoration-none text-secondary small my-1"
                >
                  Investor Relations
                </a>
              </p>
              <p className="mb-0">
                <a
                  href="#"
                  className="text-decoration-none text-secondary small my-1"
                >
                  Legal Notices
                </a>
              </p>
            </Col>

            <Col>
              <p className="mb-0">
                <a
                  href="#"
                  className="text-decoration-none text-secondary small my-1"
                >
                  Help Center
                </a>
              </p>
              <p className="mb-0">
                <a
                  href="#"
                  className="text-decoration-none text-secondary small my-1"
                >
                  Jobs
                </a>
              </p>
              <p className="mb-0">
                <a
                  href="#"
                  className="text-decoration-none text-secondary small my-1"
                >
                  Cookie Preferences
                </a>
              </p>
            </Col>

            <Col>
              <p className="mb-0">
                <a
                  href="#"
                  className="text-decoration-none text-secondary small my-1"
                >
                  Gift Cards
                </a>
              </p>
              <p className="mb-0">
                <a
                  href="#"
                  className="text-decoration-none text-secondary small my-1"
                >
                  Terms of Use
                </a>
              </p>
              <p className="mb-0">
                <a
                  href="#"
                  className="text-decoration-none text-secondary small my-1"
                >
                  Corporate Information
                </a>
              </p>
            </Col>
          </Row>

          <Row>
            <Col className="mb-2 text-secondary">
              <Button
                variant="transparent"
                size="sm"
                className="rounded-0 mt-3 btn-outline-secondary"
              >
                Service Code
              </Button>
            </Col>
          </Row>

          <Row>
            <Col className="mb-2 mt-2 text-secondary">
              © 1997-2023 Netflix, Inc.
            </Col>
          </Row>
        </Col>
      </Row>
    </footer>
  )
}

export default Footer
