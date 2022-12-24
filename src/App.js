
import { useState, useRef } from "react";
import ScrollToTop from './components/ScrollToTop';


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
        <a href="email" className="marcus_email">marcusvidranyi@gmail.com</a>
        <ul className={active}>
          <li onClick={() => scrollToSection(home)} className="nav_item"><a href="#home" className="nav_link">Home</a></li>
          <li onClick={() => scrollToSection(services)} className="nav_item"><a href="#services" className="nav_link">My Services</a></li>
          <li onClick={() => scrollToSection(aboutMe)} className="nav_item"><a href="#aboutme" className="nav_link">About me</a></li>
          <li onClick={() => scrollToSection(myProjects)} className="nav_item"><a href="#myprojects" className="nav_link">My Projects</a></li>
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
          <img src="https://picsum.photos/200/300" alt="my picture" className="intro_img"></img>
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

          <a href="#myprojects" className="btn">My Projects</a>
        </div>



      

        <section ref={aboutMe} className='about_me'>
        <h2 className="section_title section_title_about">Who I am</h2>
           <p className="section_subtitle section_subtitle_about">Front-End Developer from Budapest</p>
           
           <div className="about_me_body">
               <p>I'm a web developer and designer based out of Budapest, Hungary. I love building apps that solve real-world problems, and that are delightful to use. My specialities include Javascript, React JS, Tailwind CSS, and Styled Components.</p>
               <p>My background is in teaching and marketing, and I have a bachelors degree in English from Kings College. I also have five adorable cats.</p>
           </div>
           
           <img src="https://picsum.photos/200/300" alt="Jane leaning against a bus" className="about_me_img" />
        </section>

        <div ref={myProjects} className='my_projects_section'>
          <h3>My Projects</h3>
        </div>

      </main>
    </div>
  );
}

export default App;
