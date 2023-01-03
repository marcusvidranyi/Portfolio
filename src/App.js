
import { useState, useRef } from "react";
import ScrollToTop from './components/ScrollToTop';
import finalmyphoto from "./img/finalmyphoto.png";
import portfolio_second_picture from "./img/portfolio_second_picture.jpg";
import EventHorizon from "./img/EventHorizon.jpg";
import edesM from "./img/edesM.jpg";
import CatchUp from "./img/CatchUp.jpg";
import gitHub from "./img/github_icon_2.png";



function App() {

  const home = useRef(null);
  const services = useRef(null);
  const aboutMe = useRef(null);
  const myProjects = useRef(null);

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      left: 0,
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
      <a href="mailto:marcusvidranyi@gmail.com" className="marcus_email">marcusvidranyi@gmail.com</a>
        <ul className={active}>
          <li onClick={() => scrollToSection(home)} className="nav_item">
            <a href="#home" className="nav_link">Home</a>
          </li>
          <li onClick={() => scrollToSection(services)} className="nav_item">
            <a href="#services" className="nav_link">My Services</a>
          </li>
          <li onClick={() => scrollToSection(aboutMe)} className="nav_item">
            <a href="#aboutme" className="nav_link">About me</a>
          </li>
          <li onClick={() => scrollToSection(myProjects)} className="nav_item">
            <a href="#myprojects" className="nav_link">My Projects</a>
          </li>
        </ul>
        <div onClick={navToggle} className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
      <main>

        {/* Intro */}
        <section ref={home} className='intro'>
          <h1 className="section_title section_title_intro" >
            Hi, I am <strong>Marcus Vidrányi</strong>
          </h1>
          <p className="section_subtitle section_subtitle_intro">Front-End Developer</p>
          <img src={finalmyphoto} alt="my picture" className="intro_img"></img>
        </section>

        {/* Services */}

        <div ref={services} className='my_services'>
          <h2 className="section_title section_title_services">What I do</h2>
          <div className="services">
            <div className="service">
              <h3>Design</h3>
              <p>I strive to create beautiful and intuitive web apps, meaning I design with both aestetics and usability in mind. You will get your designs delivered as Figma files, as websites or both.</p>
            </div>
            <div className="service">
              <h3>Development</h3>
              <p>I am a versatile frontend developer with a speciality in React JS and Tailwind CSS. I also have a solid grip of the fundamentals of web development using HTML, CSS, and JavaScript.</p>
            </div>
          </div>

          <div className="btn" onClick={() => scrollToSection(myProjects)}>My Projects</div>
        </div>





        <section ref={aboutMe} className='about_me'>
          <h2 className="section_title section_title_about">Who I am</h2>
          <p className="section_subtitle section_subtitle_about">Front-End Developer from Budapest</p>

          <div className="about_me_body">
            <p>I'm a web developer and designer based out of Budapest, Hungary. I love building apps that solve real-world problems, and that are delightful to use. My specialities include Javascript, React JS, Tailwind CSS, and Styled Components.</p>
            <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
          </div>

          <img src={portfolio_second_picture} alt="Jane leaning against a bus" className="about_me_img" />
        </section>

        <section ref={myProjects} className='my_projects_section'>
          <h2 className="section_title section_title_work">My Projects</h2>
          <p className="section_subtitle section_subtitle_work">A selection of my range of work</p>

          <div className="portfolio">

            <a href="https://team2project-97c57.web.app/main" className="portfolio_item">
              <img src={EventHorizon} alt="" className="portfolio_img" />
            </a>


            <a href="https://edesm.com" className="portfolio_item">
              <img src={edesM} alt="" className="portfolio_img" />
            </a>

            <a href="https://catch-up-fd42f.web.app/" className="portfolio_item">
              <img src={CatchUp} alt="" className="portfolio_img" style={{ objectFit: "cover" }} />
            </a>


          </div>
        </section>
        <footer className="footer">

          <a href="mailto:marcusvidranyi@gmail.com" className="footer__link">marcusvidranyi@gmail.com</a>
          <ul className="social-list">
            <li className="social-list__item">
              <a className="social-list__link" href="https://github.com/marcusvidranyi">
              <img src={gitHub} className="footer_logo" alt="github"/>
              </a>
            </li>
          </ul>
        </footer>

      </main>
    </div>
  );
}

export default App;
