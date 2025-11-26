import { Component } from "react"
import { Carousel, CarouselItem, Col, Row, Spinner } from "react-bootstrap"

class MovieCarousel extends Component {
  state = {
    movies: [],
    loading: true,
    error: false,
  }

  componentDidMount() {
    this.getMovies()
  }

  getMovies = () => {
    const API = `http://www.omdbapi.com/?apikey=2d48687d&s=${this.props.query}`

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
          this.setState({ error: true, loading: false })
        } else {
          this.setState({
            error: false,
            loading: false,
            movies: moviesArray.Search,
          })
        }
        console.log(moviesArray)
      })
      .catch((error) => {
        console.log("ERRORE:", error)
        this.setState({ error: true, loading: false })
      })
  }

  render() {
    return (
      <>
        <h4 className="text-white my-3">{this.props.title}</h4>

        {/* LOADING */}
        {this.state.loading && (
          <div className="text-center">
            <Spinner animation="border" variant="light" />
          </div>
        )}

        {/* ERROR */}
        {this.state.error && (
          <div className="text-danger">Errore nel caricamento</div>
        )}

        {/* MOVIES */}
        {!this.state.loading && !this.state.error && (
          <Carousel>
            <CarouselItem>
              <Row>
                {this.state.movies
                  .filter((movie) => movie.Type !== "game")
                  .slice(0, 5)
                  .map((movie) => (
                    <Col
                      key={movie.imdbID}
                      className="text-center px-1 locandina"
                      style={{ cursor: "pointer" }}
                    >
                      <img
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
                {this.state.movies
                  // .filter((movie) => movie.Type !== "game") se no la seconda slide aveva un solo risultato. ho visto troppo tardi che in realta dovevo aggiungere il parametro pagina per accedere a più risultati
                  .slice(5, 10)
                  .map((movie) => (
                    <Col
                      key={movie.imdbID}
                      className="text-center px-1 locandina"
                      style={{ cursor: "pointer" }}
                    >
                      <img
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
}

export default MovieCarousel
