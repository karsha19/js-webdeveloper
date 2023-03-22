import { useState, useEffect } from 'react';
import {links} from '../../data';
import { Container, ThemeProvider } from "react-bootstrap";
import Logo from '../../assets/img/jsbranco.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';

const NavBar = () => {

  const [isNavShowing, setISNavShowing] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const closeNav = () => {
    setISNavShowing(false);
  };

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <nav className={isScrolled ? "nav scrolled" : ""}>
        <Container className='nav-container'>
          <a href='index.html' className="logo"><img src={Logo} alt='Nav Logo'/></a>
          <ul className={`nav-links ${isNavShowing ? 'show-nav' : 'hide-nav'}`}>
            {links.map((item) => (
              <li key={item.to}>
                <a href={`#${item.to}`} onClick={closeNav}>{item.name} </a>
              </li>
            ))}
          </ul>
          <button className="nav-toggle-btn" onClick={() => setISNavShowing(!isNavShowing)}>
            {
              isNavShowing ? <FontAwesomeIcon icon={faXmark}/> : <FontAwesomeIcon icon={faBars}/>
            }
          </button>
          <div className={`navbar-text ${isNavShowing ? 'show-nav' : 'hide-nav'}`}>
            <div className="social-icon">
              <a href='https://github.com/j-silveira' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faGithub} className='icons'/></a>
              <a href='https://www.linkedin.com/in/joaofsilveira/' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} className='icons' /></a>
              <a href='https://www.instagram.com/jsilveira_webdeveloper/' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faInstagram} className='icons'/></a>
            </div>
            <a href="#contacts"><button>Hire me</button></a>
          </div>
        </Container>
      </nav>
    </ThemeProvider>
  )
}

export default NavBar;
