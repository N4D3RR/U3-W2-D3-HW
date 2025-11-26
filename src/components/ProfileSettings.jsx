import { Container, Row, Col, Form, Button } from "react-bootstrap"
import Footer from "./Footer"

const ProfileSettings = () => {
  return (
    <Container fluid>
      <Container className="w-50">
        <h1 className="fw-bold mb-3 text-white">Edit Profile</h1>
        <hr className="border-secondary" />

        {/* SEZIONE PROFILO */}
        <Row className="align-items-start mt-4">
          <Col xs="auto">
            <div className="position-relative">
              <img
                src="src/assets/img/avatar.png"
                alt="Avatar"
                height="100"
                className="rounded"
              />
              <div
                className="
                  position-absolute bottom-0 start-0
                  bg-dark rounded-circle p-1 
                "
              >
                <i className="bi bi-pencil-fill text-white"></i>
              </div>
            </div>
          </Col>

          <Col>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                defaultValue="Strive Student"
                className="bg-secondary text-white border-0 rounded-0"
              />
            </Form.Group>

            <Form.Label className="text-secondary">Language:</Form.Label>

            <Form.Select
              size="sm"
              className="bg-black text-white border-secondary rounded-0 w-50"
            >
              <option>English</option>
              <option>Italian</option>
            </Form.Select>

            <hr className="border-secondary mt-4" />
          </Col>
        </Row>

        <Row className="mt-3">
          <Col>
            <h5 className="fw-semibold text-white">Maturity Settings:</h5>

            <Button
              variant="secondary"
              size="sm"
              className="rounded-0 fw-bold my-2"
            >
              ALL MATURITY RATINGS
            </Button>

            <p className="text-secondary small">
              Show titles of <strong>all maturity ratings</strong> for this
              profile.
            </p>

            <Button
              variant="outline-secondary"
              className="rounded-0 px-4 py-1 mt-2 text-white border-secondary"
            >
              EDIT
            </Button>

            <hr className="border-secondary mt-4" />
          </Col>
        </Row>

        <Row>
          <Col>
            <h5 className="fw-semibold mb-3 text-white">Autoplay controls</h5>

            <Form.Check
              type="checkbox"
              defaultChecked
              label="Autoplay next episode in a series on all devices."
              className="text-white mb-2"
            />

            <Form.Check
              type="checkbox"
              defaultChecked
              label="Autoplay previews while browsing on all devices."
              className="text-white"
            />

            <hr className="border-secondary mt-4" />
          </Col>
        </Row>

        <div className="d-flex flex-wrap gap-3 mt-4">
          <Button variant="light" className="rounded-0 px-4 fw-bold">
            SAVE
          </Button>

          <Button
            variant="outline-secondary"
            className="rounded-0 px-4 text-white border-secondary"
          >
            CANCEL
          </Button>

          <Button
            variant="outline-secondary"
            className="rounded-0 px-4 text-white border-secondary"
          >
            DELETE PROFILE
          </Button>
        </div>
      </Container>
      <Footer />
    </Container>
  )
}

export default ProfileSettings
