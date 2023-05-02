import "../index.css";





const Services = () => {



    return (
        <div>
            <section /* style={{padding: "0"}} */>
                <div className='my_services'>
                    <h2 className="section_title section_title_services">What I do</h2>
                    <div className="services">
                        <div className="service">
                            <h3>Design</h3>
                            <p>My objective is to develop elegant and user-friendly web applications, which means I think about both how they look and how they work. If you've got a vision for a website, I can help you make it happen with a custom design that's exactly what you need.</p>
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