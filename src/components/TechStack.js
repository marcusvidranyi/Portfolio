import "../index.css";
import gitHub from "../img/github_icon_2.png";
import commandline from "../img/tech_stack_img/commandline.png";
import firebase from "../img/tech_stack_img/firebase.png";
import git from "../img/tech_stack_img/git.png";
import github from "../img/tech_stack_img/github.png";
import html from "../img/tech_stack_img/html.png";
import javascript from "../img/tech_stack_img/javascript.png";
import nodejs from "../img/tech_stack_img/nodejs.png";
import react from "../img/tech_stack_img/react.png";
import responsive from "../img/tech_stack_img/responsive.png";
import restful from "../img/tech_stack_img/restful.png";
import sass from "../img/tech_stack_img/sass.png";
import vscode from "../img/tech_stack_img/vscode.png";
import w3c from "../img/tech_stack_img/w3c.png";
import wordpress from "../img/tech_stack_img/wordpress.png";
import css3 from "../img/tech_stack_img/css3.png";
import scrum from "../img/tech_stack_img/scrum.png";
import bootstrap from "../img/tech_stack_img/bootstrap.png";

const TechStack = () => {
    return (

        <div className="tech_stack hidden" id="tech_stack">
            <h3>Tech stack and skills</h3>
            <div className="tech_logo_img_box">
                <div className="tech_logo_img_container">
                    <div className="tech_logo_img" style={{
                        backgroundImage: `url(${html})`,
                        backgroundSize: "95%",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                    <p>HTML5</p>
                </div>
                <div className="tech_logo_img_container">
                    <div className="tech_logo_img" style={{ backgroundImage: `url(${css3})` }}></div>
                    <p>CSS3</p>
                </div>
                <div className="tech_logo_img_container">
                    <div className="tech_logo_img" style={{
                        backgroundImage: `url(${javascript})`,
                        backgroundSize: "85%",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center"
                    }}></div>
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
                    <div className="tech_logo_img" style={{
                        backgroundImage: `url(${sass})`,
                        backgroundSize: "100%",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center"
                    }}></div>

                    <p>SASS</p>
                </div>
                <div className="tech_logo_img_container">
                    <div className="tech_logo_img" style={{ backgroundImage: `url(${scrum})` }}></div>
                    <p>SCRUM</p>
                </div>
                <div className="tech_logo_img_container">
                    <div className="tech_logo_img" style={{
                        backgroundImage: `url(${bootstrap})`,
                        backgroundSize: "100%",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center"
                    }}></div>
                    <p>BOOTSTRAP</p>
                </div>
                {/* <div className="tech_logo_img_container">
                <div className="tech_logo_img" style={{ backgroundImage: `url(${commandline})` }}></div>
                <p>COMMAND LINE</p>
              </div> */}
                <div className="tech_logo_img_container">
                    <div className="tech_logo_img" style={{ backgroundImage: `url(${vscode})` }}></div>
                    <p>VSCODE</p>
                </div>
                {/* <div className="tech_logo_img_container">
                <div className="tech_logo_img" style={{ backgroundImage: `url(${responsive})`, backgroundSize: "100%", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}></div>
                <p>RESPONSIVE WEBSITES</p>
              </div> */}
                {/* <div className="tech_logo_img_container">
                <div className="tech_logo_img" style={{ backgroundImage: `url(${w3c})`, backgroundSize: "100%", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}></div>
                <p>WEB ACCESSIBILITY</p>
              </div> */}
                <div className="tech_logo_img_container">
                    <div className="tech_logo_img" style={{ backgroundImage: `url(${wordpress})` }}></div>
                    <p>WORDPRESS</p>
                </div>
            </div>

        </div>

    )
}

export default TechStack