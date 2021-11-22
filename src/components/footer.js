import insta from "../photos/instagram_icon.svg";
import tiktok from "../photos/tiktok_icon.svg";
import youtube from "../photos/youtube_icon.svg";
import facebook from "../photos/facebook_icon.svg";

import Contact from "./contact";
const Footer = () => {
    return (
        <footer className="footer">
            <Contact />
            <ul className="footer-list">
                <li className="list"><a href="https://www.instagram.com/mr.pandaev/" target="_blank" rel="noreferrer" className="link"><img
                    src={ insta } alt="instagram_icon" className="icon"/></a></li>
                <li className="list"><a href="https://www.tiktok.com/@elsipandaev?" target="_blank" rel="noreferrer" className="link"><img
                    src={ tiktok } alt="tiktok_icon" className="icon"/></a></li>
                <li className="list"><a href="https://www.youtube.com/c/ElsiAdajew" target="_blank" rel="noreferrer" className="link"><img
                    src={ youtube } alt="youtube_icon" className="icon"/></a></li>
                <li className="list"><a href="https://www.facebook.com/nihloelsi" target="_blank" rel="noreferrer" className="link"><img
                    src={ facebook } alt="facebook_icon" className="icon"/></a></li>
            </ul>
        </footer>
    )
}

export default Footer;
