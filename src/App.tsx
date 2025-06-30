import './App.scss'
import { MainButton } from './components/MainButton/MainButton'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { useEffect } from 'react'

function App() {
  // Set the document title to "Julie Vitse | Portfolio"
  useEffect(() => {
    document.title = 'Julie Vitse | Front-End Developer Portfolio'
  }, [])
  return (
    <div className="App">
      <div className="wrapper">
        <h1 className="main-title">
          WELC<span className="italic">O</span>ME.
        </h1>
        <h2> I'm Julie, a freelance </h2>
        <h2>
          fr
          <span className="italic">o</span>nt-end devel
          <span className="italic">o</span>per.
        </h2>
        <h3>// Specialized in the React environment</h3>
        <h3 className="links">
          <a
            href="https://github.com/JulieVitse"
            target="_blank"
            rel="noopener noreferrer"
            className="links__link"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/julie-vitse-481b75209/"
            target="_blank"
            rel="noopener noreferrer"
            className="links__link"
          >
            <FaLinkedin />
          </a>
        </h3>
      </div>

      <div className="wrapper wrapper--menu">
        <MainButton text="Works" addedClass="circle--first" location="works" />
        <MainButton text="About" addedClass="circle--second" location="about" />
        <MainButton
          text="Contact"
          addedClass="circle--third"
          location="contact"
        />
      </div>
    </div>
  )
}

export default App
