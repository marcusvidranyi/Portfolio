
import { useState, useRef, useEffect } from "react";

import finalmyphoto from "./img/finalmyphoto.png";
import gitHub from "./img/github_icon_2.png";
import without_balloon from "./img/without_balloon.jpg";
import balloon_only from "./img/balloon_only.png";
import second_balloon from "./img/second_balloon.png";
import mountain_range from "./img/mountain_range.jpg";
import alien_sky from "./img/alien_sky.jpg";
import third_balloon from "./img/third_balloon.png";
import balloon_4 from "./img/balloon_4.png";
import balloon_house from "./img/balloon_house.png";
import cloud1 from "./img/cloud_animation/cloud1.png";
import cloud2 from "./img/cloud_animation/cloud2.png";
import cloud3 from "./img/cloud_animation/cloud3.png";
import cloud4 from "./img/cloud_animation/cloud4.png";
import cloud5 from "./img/cloud_animation/cloud5.png";


import { FaAngleDoubleUp } from "react-icons/fa";
import scrollToTopImg from "./img/scrolltotop.png";

import Projects from "./components/Projects";
import Services from "./components/Services";
import AboutMe from "./components/AboutMe";
import TechStack from "./components/TechStack";






function App() {

  /*---------------------------New scroll to top function after adding Parallax effect---------------------------- */
  const handleScrollToTop = () => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    const wrapperEl = document.getElementById('wrapper');
    const handleScroll = () => {
      const scrollAmount = wrapperEl.scrollTop;
      const requiredScrollAmount = 300;
      setShowScrollTopButton(scrollAmount >= requiredScrollAmount);
    };
    wrapperEl.addEventListener('scroll', handleScroll);
    return () => {
      wrapperEl.removeEventListener('scroll', handleScroll);
    };
  }, [showScrollTopButton]);


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
  const [burgerClass, setBurgerClass] = useState("burger_bar unclicked");



  const navToggle = () => {
    if (active === "nav_menu") {
      setActive("nav_menu nav_active");
      setBurgerClass("burger_bar clicked");
    }
    else {
      setActive("nav_menu");
      setBurgerClass("burger_bar unclicked");
    }
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

  /*----------------------------------------FADE UP ANIMATIONS----------------------------------------------- */

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show_up");
        }
        else {
          entry.target.classList.remove("show_up");
        }
      })
    })
    const hiddenElements = document.querySelectorAll(".intro_section, .section_services, .btn_box, .section_aboutMe, .portfolio");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);






  return (
    <div className="App">
      <main>
        {showScrollTopButton && <img src={scrollToTopImg} className="top_btn_position top_btn_styles" onClick={handleScrollToTop} />}
        <section className="wrapper" id="wrapper" ref={wrapperRef} >
          <header>
            <nav className="nav">
              <a href="mailto:marcusvidranyi@gmail.com" className="marcus_email">marcusvidranyi@gmail.com</a>
              <ul className={active}>
                <li onClick={() => scrollToRef(wrapperRef)} className="nav_item">
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
                <div className={burgerClass}></div>
                <div className={burgerClass}></div>
                <div className={burgerClass}></div>
              </div>
            </nav>
            <img src={alien_sky} className="background" />
            <img src={balloon_only} className="foreground" />
            <img src={second_balloon} className="second_foreground" />
            <img src={third_balloon} className="third_foreground" />
            <h1 className="parallax_title">WELCOME</h1>
          </header>

          <section className="intro_section hidden_up">
            <div ref={home} className='intro'>
              <h1 className="section_title section_title_intro" >
                I am <strong><span style={{ color: "#FEB600" }}>Marcus</span> Vidrányi</strong>
              </h1>
              <p className="section_subtitle section_subtitle_intro">Front-End Developer</p>
              <img src={finalmyphoto} alt="my picture" className="intro_img"></img>
            </div>
          </section>
          <img src={balloon_house} className="fourth_foreground" />
          <section>
            <TechStack />
          </section>

          {/* Services */}
          <div ref={services}></div>
          <section style={{ padding: "0" }} className="section_services hidden_up">
            <Services />
          </section>
          <div className="btn_box hidden_up">
            <div className="btn" onClick={() => scrollToRef(myProjects)}>My Projects</div>
          </div>
          <div ref={aboutMe}></div>
          <section style={{ padding: "0 0 5vh 0" }} className="section_aboutMe hidden_up">
            <AboutMe />
          </section>

          <section ref={myProjects} className='my_projects_section'>
            <h2 className="section_title section_title_work" style={{ zIndex: "-1" }}>My Projects</h2>
            {/* <p className="section_subtitle section_subtitle_work">A selection of my range of work</p> */}

            <Projects />

          </section>

          <footer className="footer">

            <p>Thank you for visiting my website! Please contact me  at </p>
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
