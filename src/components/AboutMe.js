import "../index.css";
import portfolio_picture from "../img/profilepicture01.jpeg";

const AboutMe = () => {
    return (
        <div className='about_me'>
            <h2 className="section_title section_title_about">Who I am</h2>
            <div className="about_me_body">
                <p>I'm a web developer and designer based in Budapest, Hungary.
                    I create websites that are not only visually stunning but also user-friendly,
                    fast-loading, and optimized for search engines.
                    I use the latest technology and design trends to create websites that stand out from the crowd and engage your audience.</p>
            </div>

            <img src={portfolio_picture} alt="Jane leaning against a bus" className="about_me_img" />
        </div>
    )
}

export default AboutMe