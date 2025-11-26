import { Container } from "react-bootstrap"
import Main from "./Main"
import MovieCarousel from "./MovieCarousel"

const TVShows = function () {
  return (
    <>
      <Container fluid>
        <MovieCarousel title="Recently Added" query="Stranger Things" />
        <MovieCarousel title="TV Shows" query="Star Trek" />
        <MovieCarousel title="Watch Again" query="Dexter" />
      </Container>
    </>
  )
}

export default TVShows
