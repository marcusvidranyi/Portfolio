import { useState, useEffect } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";
import scrollToTopImg from "../img/scrolltotop.png";
import Aos from "aos";
import "aos/dist/aos.css";

const ScrollToTop = () => {

    const [showScrollTopButton, setShowScrollTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const scrolled = document.documentElement.scrollTop;
            if (scrolled > 300) {
                setShowScrollTopButton(true);
                
            } else {
                setShowScrollTopButton(false);
            }
        })

    }, [showScrollTopButton]);

    useEffect(() => {
        Aos.init({duration: 1000});
    }, [])

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div>
            {showScrollTopButton && 
            <img src={scrollToTopImg} className="top_btn_position top_btn_styles" onClick={scrollTop} data-aos="fade-left"/>}
        </div>
    );
};
export default ScrollToTop;