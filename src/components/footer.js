import Contact from "./contact";
const Footer = () => {
    return (
        <footer className="footer">
            <Contact />
            <ul className="footer-list">
                <li className="list"><a href="https://www.instagram.com/mr.pandaev/" target="_blank" rel="noreferrer" className="link">Instagram</a></li>
                <li className="list"><a href="https://www.tiktok.com/@elsipandaev?" target="_blank" rel="noreferrer" className="link">TikTok</a></li>
                <li className="list"><a href="https://www.youtube.com/c/ElsiAdajew" target="_blank" rel="noreferrer" className="link">YouTube</a></li>
                <li className="list"><a href="https://www.facebook.com/nihloelsi" target="_blank" rel="noreferrer" className="link">FaceBook</a></li>
            </ul>
        </footer>
    )
}

export default Footer;
