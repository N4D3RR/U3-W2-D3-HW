import Footer from "./components/Footer"
import "./App.css"
import Main from "./components/Main"
import NetflixBar from "./components/Netflixbar"
import ProfileSettings from "./components/ProfileSettings"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TVShows from "./components/TVShows"
import MovieDetails from "./components/MovieDetails"
import NotFound from "./components/NotFound"

function App() {
  return (
    <BrowserRouter
      className=" min-vh-100"
      style={{ backgroundColor: "#221f1f" }}
    >
      <NetflixBar />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/profile" element={<ProfileSettings />}></Route>
        <Route path="/tv-shows" element={<TVShows />}></Route>
        <Route path="/details/:movieId" element={<MovieDetails />}></Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
