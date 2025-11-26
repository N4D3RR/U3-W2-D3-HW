import { Carousel, CarouselItem, Col, Row, Spinner } from "react-bootstrap"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const MovieCarousel = function ({ title, query }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const navigate = useNavigate()

  // state = {
  //   movies: [],
  //   loading: true,
  //   error: false,
  // }

  // componentDidMount() {
  //   this.getMovies()
  // }
  useEffect(() => {
    getMovies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  const getMovies = () => {
    const API = `http://www.omdbapi.com/?apikey=2d48687d&s=${query}`

    fetch(API)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("Errore nella fetch", res.status)
        }
      })
      .then((moviesArray) => {
        if (moviesArray.Response === "False") {
          setError(true)
          setLoading(false)
        } else {
          setError(false)
          setLoading(false)
          setMovies(moviesArray.Search)
        }
        console.log(moviesArray)
      })
      .catch((error) => {
        console.log("ERRORE:", error)
        setError(true)
        setLoading(false)
      })
  }

  return (
    <>
      <h4 className="text-white my-3">{title}</h4>

      {/* LOADING */}
      {loading && (
        <div className="text-center">
          <Spinner animation="border" variant="light" />
        </div>
      )}

      {/* ERROR */}
      {error && <div className="text-danger">Errore nel caricamento</div>}

      {/* MOVIES */}
      {!loading && !error && (
        <Carousel>
          <CarouselItem>
            <Row>
              {movies
                .filter((movie) => movie.Type !== "game")
                .slice(0, 5)
                .map((movie) => (
                  <Col
                    key={movie.imdbID}
                    className="text-center px-1 locandina"
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      onClick={() => navigate(`/details/${movie.imdbID}`)}
                      src={movie.Poster}
                      alt={movie.Title}
                      className="img-fluid h-100"
                    />
                  </Col>
                ))}
            </Row>
          </CarouselItem>
          <CarouselItem>
            <Row>
              {movies
                // .filter((movie) => movie.Type !== "game") se no la seconda slide aveva un solo risultato. ho visto troppo tardi che in realta dovevo aggiungere il parametro pagina per accedere a più risultati
                .slice(5, 10)
                .map((movie) => (
                  <Col
                    key={movie.imdbID}
                    className="text-center px-1 locandina"
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      onClick={() => navigate(`/details/${movie.imdbID}`)}
                      src={movie.Poster}
                      alt={movie.Title}
                      className="img-fluid h-100"
                    />
                  </Col>
                ))}
            </Row>
          </CarouselItem>
        </Carousel>
      )}
    </>
  )
}

export default MovieCarousel
