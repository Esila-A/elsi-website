import insta from "../photos/instagram.svg";
import tiktok from "../photos/tik-tok.png";
import youtube from "../photos/youtube.svg";
import facebook from "../photos/facebook.svg";

import Contact from "./contact";
const Footer = () => {
    return (
        <footer className="footer">
            <Contact />
            <div className="footer-list">
                <a href="https://www.instagram.com/mr.pandaev/" target="_blank" rel="noreferrer" className="link"><img
                    src={ insta } alt="instagram_icon" className="icon"/></a>
                <a href="https://www.tiktok.com/@elsipandaev?" target="_blank" rel="noreferrer" className="link"><img
                    src={ tiktok } alt="tiktok_icon" className="icon"/></a>
                <a href="https://www.youtube.com/c/ElsiAdajew" target="_blank" rel="noreferrer" className="link"><img
                    src={ youtube } alt="youtube_icon" className="icon"/></a>
                <a href="https://www.facebook.com/nihloelsi" target="_blank" rel="noreferrer" className="link"><img
                    src={ facebook } alt="facebook_icon" className="icon"/></a>
            </div>
        </footer>
    )
}


export default Footer;
