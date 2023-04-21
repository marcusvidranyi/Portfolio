import "../index.css";
import { useState, useRef, useEffect } from "react";



const Services = () => {

    return (
        <div>
            <section /* style={{padding: "0"}} */>
                <div className='my_services'>
                    <h2 className="section_title section_title_services">What I do</h2>
                    <div className="services">
                        <div className="service">
                            <h3>Design</h3>
                            <p>I strive to create beautiful and intuitive web apps, meaning I design with both aesthetics and usability in mind. I can bring your vision to life with a custom website that perfectly fits your needs.</p>
                        </div>
                        <div className="service">
                            <h3>Development</h3>
                            <p>I am a versatile frontend developer with a speciality in React JS. I also have a solid grip of the fundamentals of web development using HTML, CSS, and JavaScript.</p>
                        </div>
                    </div>

                    {/* <div className="btn" onClick={() => scrollToRef(myProjects)}>My Projects</div> */}
                </div>
            </section>




            
        </div>
    )
}

export default Services