import Navbar from "./components/Navbar"
import About from "./components/About"
import Skills from "./components/Skills"
import Education from "./components/Education"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import "./App.css"

function App() {

  return (
    <>
  <Navbar/>
  <section id="about"><About/></section>
  <section id="skills"><Skills/></section>
  <section id="education"><Education/></section>
  <section id="contact"><Contact/></section>
  <Footer/>
    </>
  )
}

export default App

