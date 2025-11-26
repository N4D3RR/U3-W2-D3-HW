import { useNavigate, useParams } from "react-router-dom"
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge,
  Spinner,
} from "react-bootstrap"
import { useEffect, useState } from "react"

const MovieDetails = function () {
  const navigate = useNavigate()
  const params = useParams()

  const [movieToShow, setMovieToShow] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    // prendo movieId dall’URL
    const movieID = params.movieId

    const API = `http://www.omdbapi.com/?apikey=2d48687d&i=${movieID}`

    fetch(API)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("Errore nella fetch", res.status)
        }
      })
      .then((movie) => {
        if (movie.Response === "False") {
          setError(true)
          setLoading(false)
          navigate("/404")
        } else {
          setMovieToShow(movie)
          setLoading(false)
          setError(false)
        }
      })
      .catch((err) => {
        console.log("ERRORE FETCH DETTAGLI FILM:", err)
        setError(true)
        setLoading(false)
      })
  }, [])

  return (
    <Container fluid>
      <Row className="justify-content-center my-3">
        <Col xs={12} md={6} className="text-center">
          <h2 className="text-center text-white">Dettagli del film</h2>

          {error && <div className="text-danger">Errore nel caricamento</div>}

          {loading && (
            <div className="text-center">
              <Spinner animation="border" variant="light" />
            </div>
          )}

          {!loading && !error && (
            <Card className="my-3 bg-dark text-white">
              <Card.Img variant="top" src={movieToShow.Poster} />

              <Card.Body>
                <Card.Title>{movieToShow.Title}</Card.Title>

                <Card.Text>
                  <strong>Anno:</strong> {movieToShow.Year}
                </Card.Text>

                <Card.Text>
                  <strong>Genere:</strong> {movieToShow.Genre}
                </Card.Text>

                <Card.Text>
                  <strong>Regista:</strong> {movieToShow.Director}
                </Card.Text>

                <Card.Text>
                  <strong>Trama:</strong> {movieToShow.Plot}
                </Card.Text>

                <Button variant="primary" onClick={() => navigate("/")}>
                  Torna indietro
                </Button>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default MovieDetails
