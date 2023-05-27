import "../index.css";

import portfolio_screenshot from "../img/portfolio_screenshot.jpg";
import edesM from "../img/edesM.jpg";
import EventHorizon from "../img/EventHorizon.jpg";
import CatchUp from "../img/CatchUp.jpg";
import tbkiskola_screenshot from "../img/tbkiskola_screenshot.jpg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp, faLocationDot, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faFacebookMessenger, faCss3, faHtml5, faReact } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
    return (
        <div className="portfolio hidden_up">
            <div className="portfolio_item">
                <img src={tbkiskola_screenshot} alt="Portfolio website" className="portfolio_img" />
                <div className="portfolio_info">
                    <h3>Törökbálinti Kutyaiskola</h3>
                    <p>Client Website, still under construction</p><span>To view the code, please contact me.</span>
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
                            <button>VIEW CODE</button>
                            <button><a href="https://tbkiskola.web.app/">VISIT PAGE</a></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio_item">
                <img src={portfolio_screenshot} alt="Portfolio website" className="portfolio_img" />
                <div className="portfolio_info">
                    <h3>My portfolio</h3>
                    <p>This portfolio</p>
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
                            <button><a href="https://github.com/marcusvidranyi/portfolio">VIEW CODE</a></button>
                            <button><a href="https://marcusvidranyi.com/">VISIT PAGE</a></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio_item">
                <img src={edesM} alt="edesm pastry shop website" className="portfolio_img" />
                <div className="portfolio_info">
                    <h3>ÉdesM</h3>
                    <p>Client Website for a pastry shop</p><span>Please contact me to view code</span>
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
                            <button>VIEW CODE</button>
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


        </div>
    )
}

export default Projects