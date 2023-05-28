
import { useState, useRef, useEffect } from "react";
import ScrollToTop from './components/ScrollToTop';
import finalmyphoto from "./img/finalmyphoto.png";
import portfolio_picture from "./img/profilepicture01.jpeg";
import EventHorizon from "./img/EventHorizon.jpg";
import edesM from "./img/edesM.jpg";
import CatchUp from "./img/CatchUp.jpg";
import gitHub from "./img/github_icon_2.png";
import commandline from "./img/tech_stack_img/commandline.png";
import firebase from "./img/tech_stack_img/firebase.png";
import git from "./img/tech_stack_img/git.png";
import github from "./img/tech_stack_img/github.png";
import html from "./img/tech_stack_img/html.png";
import javascript from "./img/tech_stack_img/javascript.png";
import react from "./img/tech_stack_img/react.png";
import responsive from "./img/tech_stack_img/responsive.png";
import restful from "./img/tech_stack_img/restful.png";
import sass from "./img/tech_stack_img/sass.png";
import wordpress from "./img/tech_stack_img/wordpress.png";
import css3 from "./img/tech_stack_img/css3.png";
import bootstrap from "./img/tech_stack_img/bootstrap.png";
import tbkiskola_screenshot from "./img/tbkiskola_screenshot.jpg";

import { FaAngleDoubleUp } from "react-icons/fa";
import scrollToTopImg from "./img/scrolltotop.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faCss3Alt, faJs, faReact, faGitAlt, faGithub, } from "@fortawesome/free-brands-svg-icons";




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
        <section className="tech_stack">
          <h3>Tech stack and skills</h3>
          <div className="tech_logo_img_box">
            <div className="tech_logo_img_container">
              <div className="tech_logo_img" style={{ backgroundImage: `url(${html})`, backgroundSize: "95%", backgroundRepeat: "no-repeat" }}></div>
              <p>HTML5</p>
            </div>
            <div className="tech_logo_img_container">
              <div className="tech_logo_img" style={{ backgroundImage: `url(${css3})` }}></div>
              <p>CSS3</p>
            </div>
            <div className="tech_logo_img_container">
              <div className="tech_logo_img" style={{ backgroundImage: `url(${javascript})`, backgroundSize: "85%", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}></div>
              <p>JAVASCRIPT</p>
            </div>
            <div className="tech_logo_img_container">
              <div className="tech_logo_img" style={{ backgroundImage: `url(${react})` }}></div>
              <p>REACT</p>
            </div>
            <div className="tech_logo_img_container">
              <div className="tech_logo_img" style={{ backgroundImage: `url(${git})` }}></div>
              <p>GIT</p>
            </div>
            <div className="tech_logo_img_container">
              <div className="tech_logo_img" style={{ backgroundImage: `url(${github})` }}></div>
              <p>GITHUB</p>
            </div>
            <div className="tech_logo_img_container">
              <div className="tech_logo_img" style={{ backgroundImage: `url(${restful})` }}></div>
              <p>RESTful APIs</p>
            </div>
            <div className="tech_logo_img_container">
              <div className="tech_logo_img" style={{ backgroundImage: `url(${firebase})` }}></div>
              <p>FIREBASE</p>
            </div>
            <div className="tech_logo_img_container">
              <div className="tech_logo_img" style={{ backgroundImage: `url(${sass})`, backgroundSize: "100%", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}></div>
              <p>SASS</p>
            </div>
            <div className="tech_logo_img_container">
              <div className="tech_logo_img" style={{ backgroundImage: `url(${bootstrap})`, backgroundSize: "100%", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}></div>
              <p>BOOTSTRAP</p>
            </div>
            <div className="tech_logo_img_container">
              <div className="tech_logo_img" style={{ backgroundImage: `url(${commandline})` }}></div>
              <p>COMMAND LINE</p>
            </div>
            <div className="tech_logo_img_container">
              <div className="tech_logo_img" style={{ backgroundImage: `url(${responsive})`, backgroundSize: "100%", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}></div>
              <p>RESPONSIVE WEBSITES</p>
            </div>
            <div className="tech_logo_img_container">
              <div className="tech_logo_img" style={{ backgroundImage: `url(${wordpress})` }}></div>
              <p>WORDPRESS</p>
            </div>
          </div>

        </section>

        {/* Services */}

        <div ref={services} className='my_services'>
          <h2 className="section_title section_title_services">What I do</h2>
          <div className="services">
            <div className="service">
              <h3>Design</h3>
              <p>My objective is to develop elegant and user-friendly web applications, which means I think about both how they look and how they work. If you've got a vision for a website, I can help you make it happen with a custom design that's exactly what you need.</p>
            </div>
            <div className="service">
              <h3>Development</h3>
              <p>Detail-oriented, and user-focused front-end
                developer and designer, specializing in ReactJS.
                Strong understanding of modern web development
                principles, including HTML, CSS, and JavaScript.
              </p>
            </div>
          </div>

          <div className="btn" onClick={() => scrollToSection(myProjects)}>My Projects</div>
        </div>





        <section ref={aboutMe} className='about_me'>
          <h2 className="section_title section_title_about">Who I am</h2>
          <p className="section_subtitle section_subtitle_about">Front-End Developer from Budapest</p>

          <div className="about_me_body">
            <p>I'm a web developer and designer based in Budapest, Hungary.
              I create websites that are not only visually stunning but also user-friendly,
              fast-loading, and optimized for search engines.
              I use the latest technology and design trends to create websites that stand out from the crowd and engage your audience.</p>
          </div>

          <img src={portfolio_picture} alt="Jane leaning against a bus" className="about_me_img" />
        </section>

        <section ref={myProjects} className='my_projects_section'>
          {/* <h2 className="section_title section_title_work">My Projects</h2>
          <p className="section_subtitle section_subtitle_work">A selection of my range of work</p>

          <div className="portfolio">

            <a href="https://edesm.com" className="portfolio_item">
              <img src={edesM} alt="" className="portfolio_img" />
            </a>

            <a href="https://team2project-97c57.web.app/main" className="portfolio_item">
              <img src={EventHorizon} alt="" className="portfolio_img" />
            </a>

            <a href="https://catch-up-fd42f.web.app/" className="portfolio_item">
              <img src={CatchUp} alt="" className="portfolio_img" style={{ objectFit: "cover" }} />
            </a>


          </div> */}
          <h2 className="section_title section_title_work">My Projects</h2>
          <div className="portfolio_item">
            <img src={tbkiskola_screenshot} alt="Portfolio website" className="portfolio_img" />
            <div className="portfolio_info">
              <h3>Törökbálinti Kutyaiskola</h3>
              <p>Client Website, still under construction</p>{/* <span>To view the code, please contact me.</span> */}
              <div className="icons_and_buttons">
                <div className="project_icons_box">
                  <div>
                    <span>ReactJS</span>
                    <FontAwesomeIcon icon={faReact} />
                  </div>
                  <div>
                    <span>HTML</span>
                    <FontAwesomeIcon icon={faHtml5} />
                  </div>
                  <div>
                    <span>CSS</span>
                    <FontAwesomeIcon icon={faCss3} />
                  </div>
                </div>
                <div className="project_button_box">
                  <button><a href="https://github.com/marcusvidranyi/Torokbalinti_Kutyaiskola">VIEW CODE</a></button>
                  <button><a href="https://tbkiskola.web.app/">VISIT PAGE</a></button>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio_item">
            <img src={edesM} alt="edesm pastry shop website" className="portfolio_img" />
            <div className="portfolio_info">
              <h3>ÉdesM</h3>
              <p>Client Website for a pastry shop</p>{/* <span>To view the code, please contact me.</span> */}
              <div className="icons_and_buttons">
                <div className="project_icons_box">
                  <div>
                    <span>ReactJS</span>
                    <FontAwesomeIcon icon={faReact} />
                  </div>
                  <div>
                    <span>HTML</span>
                    <FontAwesomeIcon icon={faHtml5} />
                  </div>
                  <div>
                    <span>CSS</span>
                    <FontAwesomeIcon icon={faCss3} />
                  </div>
                </div>
                <div className="project_button_box">
                  <button><a href="https://github.com/marcusvidranyi/EdesM">VIEW CODE</a></button>
                  <button><a href="https://edesm.com">VISIT PAGE</a></button>
                </div>
              </div>
            </div>
          </div>

          <div className="portfolio_item">
            <img src={EventHorizon} alt="graduating project website, event horizon" className="portfolio_img" />
            <div className="portfolio_info">
              <h3>Event Horizon</h3>
              <p>Create or subscribe to Horizon Events! Progmatic Academy graduation project</p>
              <div className="icons_and_buttons">
                <div className="project_icons_box">
                  <div>
                    <span>ReactJS</span>
                    <FontAwesomeIcon icon={faReact} />
                  </div>
                  <div>
                    <span>HTML</span>
                    <FontAwesomeIcon icon={faHtml5} />
                  </div>
                  <div>
                    <span>CSS</span>
                    <FontAwesomeIcon icon={faCss3} />
                  </div>
                </div>
                <div className="project_button_box">
                  <button><a href="https://github.com/Arpadtoth100/EventHorizon">VIEW CODE</a></button>
                  <button><a href="https://team2project-97c57.web.app/main">VISIT PAGE</a></button>
                </div>
              </div>
            </div>
          </div>

          <div className="portfolio_item">
            <img src={CatchUp} alt="chat-website named catch-up" className="portfolio_img" style={{ objectFit: "cover" }} />
            <div className="portfolio_info">
              <h3>Catch-Up</h3>
              <p>Basic Chat App</p>
              <br></br>
              <div className="icons_and_buttons">
                <div className="project_icons_box">
                  <div>
                    <span>ReactJS</span>
                    <FontAwesomeIcon icon={faReact} />
                  </div>
                  <div>
                    <span>HTML</span>
                    <FontAwesomeIcon icon={faHtml5} />
                  </div>
                  <div>
                    <span>CSS</span>
                    <FontAwesomeIcon icon={faCss3} />
                  </div>
                </div>
                <div className="project_button_box">
                  <button><a href="https://github.com/marcusvidranyi/catch-up">VIEW CODE</a></button>
                  <button><a href="https://catch-up-fd42f.web.app/">VISIT PAGE</a></button>
                </div>
              </div>
            </div>
          </div>



        </section>
        <footer className="footer">

          <a href="mailto:marcusvidranyi@gmail.com" className="footer__link">marcusvidranyi@gmail.com</a>
          <ul className="social-list">
            <li className="social-list__item">
              <a className="social-list__link" href="https://github.com/marcusvidranyi">
                <img src={gitHub} className="footer_logo" alt="github" />
              </a>
            </li>
          </ul>
        </footer>

      </main>
    </div>
  );
}

export default App;