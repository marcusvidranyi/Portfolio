
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
import nodejs from "./img/tech_stack_img/nodejs.png";
import react from "./img/tech_stack_img/react.png";
import responsive from "./img/tech_stack_img/responsive.png";
import restful from "./img/tech_stack_img/restful.png";
import sass from "./img/tech_stack_img/sass.png";
import vscode from "./img/tech_stack_img/vscode.png";
import w3c from "./img/tech_stack_img/w3c.png";
import wordpress from "./img/tech_stack_img/wordpress.png";
import css3 from "./img/tech_stack_img/css3.png";
import scrum from "./img/tech_stack_img/scrum.png";
import bootstrap from "./img/tech_stack_img/bootstrap.png";
import without_balloon from "./img/without_balloon.jpg";
import balloon_only from "./img/balloon_only.png";
import second_balloon from "./img/second_balloon.png";
import mountain_range from "./img/mountain_range.jpg";
import alien_sky from "./img/alien_sky.jpg";
import third_balloon from "./img/third_balloon.png";
import balloon_4 from "./img/balloon_4.png";
import AOS from "aos";
import "aos/dist/aos.css";


/* import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faJs, faReact, faGitAlt, faGithub, }  from "@fortawesome/free-brands-svg-icons"; */




function App() {

/*---------------------------New scroll to top function after adding Parallax---------------------------- */
  const handleScrollToTop = () => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };
/*--------------------------------------------Page Navigation----------------------------------------- */


  const home = useRef(null);
  const services = useRef(null);
  const aboutMe = useRef(null);
  const myProjects = useRef(null);
  const wrapperRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
      speed: 'slow'
    });
  };

  /* TogglerIcon */

  const [active, setActive] = useState("nav_menu");
  const [toggleIcon, setToggleIcon] = useState("nav_toggler");



  const navToggle = () => {
    active === "nav_menu" ? setActive("nav_menu nav_active") : setActive("nav_menu");


    toggleIcon === "nav_toggler" ? setToggleIcon("nav_toggler toggle") : setToggleIcon("nav_toggler");
  };


  /*--------------------------------------Plane animation on scroll-------------------------------------------- */

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
        else {
          entry.target.classList.remove("show");
        }
      })
    })
    const hiddenElements = document.querySelectorAll(".tech_stack");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);



  return (
    <div className="App">
      <main>
        <ScrollToTop />
        <section className="wrapper" id="wrapper" ref={wrapperRef} >
          <header>
            <nav className="nav">
              <a href="mailto:marcusvidranyi@gmail.com" className="marcus_email">marcusvidranyi@gmail.com</a>
              <ul className={active}>
                <li onClick={() => scrollToRef(home)} className="nav_item">
                  <a href="#home" className="nav_link">Home</a>
                </li>
                <li onClick={() => scrollToRef(services)} className="nav_item">
                  <a href="#services" className="nav_link">My Services</a>
                </li>
                <li onClick={() => scrollToRef(aboutMe)} className="nav_item">
                  <a href="#aboutme" className="nav_link">About me</a>
                </li>
                <li onClick={() => scrollToRef(myProjects)} className="nav_item">
                  <a href="#myprojects" className="nav_link">My Projects</a>
                </li>
              </ul>
              <div onClick={navToggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
              </div>
            </nav>
            <img src={alien_sky} className="background" />
            <img src={balloon_only} className="foreground" />
            <img src={second_balloon} className="second_foreground" />
            <img src={third_balloon} className="third_foreground" />
            <img src={balloon_4} className="fourth_foreground" />
            <h1 className="parallax_title">WELCOME</h1>
          </header>
          <section className="parallax_text">
            <section ref={home} className='intro'>
              <h1 className="section_title section_title_intro" >
                I am <strong>Marcus Vidrányi</strong>
              </h1>
              <p className="section_subtitle section_subtitle_intro">Front-End Developer</p>
              <img src={finalmyphoto} alt="my picture" className="intro_img"></img>
            </section>
          </section>

          {/* Intro */}
          {/* <section ref={home} className='intro'>
            <h1 className="section_title section_title_intro" >
              I am <strong>Marcus Vidrányi</strong>
              </h1>
              <p className="section_subtitle section_subtitle_intro">Front-End Developer</p>
              <img src={finalmyphoto} alt="my picture" className="intro_img"></img>
            </section> */}
          <div className="tech_stack hidden" id="tech_stack">
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
                <div className="tech_logo_img" style={{ backgroundImage: `url(${scrum})` }}></div>
                <p>SCRUM</p>
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
                <div className="tech_logo_img" style={{ backgroundImage: `url(${vscode})` }}></div>
                <p>VSCODE</p>
              </div>
              <div className="tech_logo_img_container">
                <div className="tech_logo_img" style={{ backgroundImage: `url(${responsive})`, backgroundSize: "100%", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}></div>
                <p>RESPONSIVE WEBSITES</p>
              </div>
              <div className="tech_logo_img_container">
                <div className="tech_logo_img" style={{ backgroundImage: `url(${w3c})`, backgroundSize: "100%", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}></div>
                <p>WEB ACCESSIBILITY</p>
              </div>
              <div className="tech_logo_img_container">
                <div className="tech_logo_img" style={{ backgroundImage: `url(${wordpress})` }}></div>
                <p>WORDPRESS</p>
              </div>
            </div>

          </div>

          {/* Services */}

          <div ref={services} className='my_services'>
            <h2 className="section_title section_title_services">What I do</h2>
            <div className="services">
              <div className="service">
                <h3>Design</h3>
                <p>I strive to create beautiful and intuitive web apps, meaning I design with both aestetics and usability in mind. I can bring your vision to life with a custom website that perfectly fits your needs.</p>
              </div>
              <div className="service">
                <h3>Development</h3>
                <p>I am a versatile frontend developer with a speciality in React JS. I also have a solid grip of the fundamentals of web development using HTML, CSS, and JavaScript.</p>
              </div>
            </div>

            <div className="btn" onClick={() => scrollToRef(myProjects)}>My Projects</div>
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
            <h2 className="section_title section_title_work">My Projects</h2>
            {/* <p className="section_subtitle section_subtitle_work">A selection of my range of work</p> */}

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


            </div>
          </section>
          <div className="scroll_to_top_button_box">
            <button onClick={handleScrollToTop} className="scroll_to_top_button">Scroll to Top</button>
          </div>
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
        </section>


      </main>

    </div>
  );
}

export default App;
