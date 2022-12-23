import './App.css';
import { useState, useRef } from "react";
import ScrollToTop from './components/ScrollToTop';


function App() {

  const home = useRef(null);
  const services = useRef(null);
  const aboutMe = useRef(null);
  const myProjects = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const [active, setActive] = useState("nav_menu");
  const [toggleIcon, setToggleIcon] = useState("nav_toggler");

  const navToggle = () => {
    active === "nav_menu" ? setActive("nav_menu nav_active") : setActive("nav_menu");

    /* TogglerIcon */

    toggleIcon === "nav_toggler" ? setToggleIcon("nav_toggler toggle") : setToggleIcon("nav_toggler");
  };

  return (
    <div className="App">
      <ScrollToTop />
      <nav className="nav">
        <a href="#" className="marcus_email">marcusvidranyi@gmail.com</a>
        <ul className={active}>
          <li onClick={() => scrollToSection(home)} className="nav_item"><a href="#" className="nav_link">Home</a></li>
          <li onClick={() => scrollToSection(services)} className="nav_item"><a href="#" className="nav_link">My Services</a></li>
          <li onClick={() => scrollToSection(aboutMe)} className="nav_item"><a href="#" className="nav_link">About me</a></li>
          <li onClick={() => scrollToSection(myProjects)} className="nav_item"><a href="#" className="nav_link">My Projects</a></li>
        </ul>
        <div onClick={navToggle} className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
      <main>
        <div ref={home} className='home_section'>
          <h3>Home</h3>
        </div>
        <div ref={services} className='my_services_section'>
          <h3>My Services</h3>
        </div>
        <div ref={aboutMe} className='about_me_section'>
          <h3>About me</h3>
        </div>
        <div ref={myProjects} className='my_projects_section'>
          <h3>My Projects</h3>
        </div>
      </main>
    </div>
  );
}

export default App;
