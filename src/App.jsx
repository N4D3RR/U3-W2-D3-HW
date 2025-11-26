import Footer from "./components/Footer"
import "./App.css"
import Main from "./components/Main"
import NetflixBar from "./components/Netflixbar"
import ProfileSettings from "./components/ProfileSettings"

function App() {
  return (
    <div className=" min-vh-100" style={{ backgroundColor: "#221f1f" }}>
      <NetflixBar />
      <Main />
      <Footer />
      <ProfileSettings />
    </div>
  )
}

export default App
