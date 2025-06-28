import { Outlet } from 'react-router-dom'
import { Slant as Hamburger } from 'hamburger-react'
import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Root() {
  const [isOpen, setIsOpen] = useState(false)
  const handleCloseMenu = () => {
    setIsOpen(false)
  }
  return (
    <Fragment>
      <header className="header">
        <nav>
          {isOpen ? (
            <Hamburger
              size={30}
              color="#2d0e5d"
              rounded
              toggled={isOpen}
              toggle={setIsOpen}
              duration={1}
            />
          ) : (
            <Hamburger
              size={30}
              color="#dfcefd"
              rounded
              toggled={isOpen}
              toggle={setIsOpen}
              duration={0.8}
            />
          )}

          <ul className={`nav__list ${isOpen ? 'nav__list--open' : ''}`}>
            <li className="nav__list__item">
              <Link to="/" className="nav__link" onClick={handleCloseMenu}>
                Home
              </Link>
            </li>
            <li className="nav__list__item">
              <Link to="about" className="nav__link" onClick={handleCloseMenu}>
                About
              </Link>
            </li>
            <li className="nav__list__item">
              <Link to="works" className="nav__link" onClick={handleCloseMenu}>
                Works
              </Link>
            </li>
            <li className="nav__list__item">
              <Link
                to="contact"
                className="nav__link"
                onClick={handleCloseMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        
        <div>
          <div className="body__overlay"></div>
          <div className="body__overlay body__overlay--grain"></div>
        </div>

        <Outlet />
      </main>
    </Fragment>
  )
}
