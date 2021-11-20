import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <ul className="navigation">
                    <li className="navigation-list">
                        <NavLink to="/home" className="link">Home</NavLink>
                    </li>
                    <li className="navigation-list">
                        <NavLink to="/about" className="link">About</NavLink>
                    </li>
                    <li className="navigation-list">
                        <NavLink to="/gallery" className="link">Gallery</NavLink>
                    </li>
                    <li className="navigation-list">
                        <NavLink to="/collaborations" className="link">Collaborations</NavLink>
                    </li>
                    <li className="navigation-list">
                        <NavLink to="/interviews" className="link">Interviews</NavLink>
                    </li>
                    <li className="navigation-list">
                        <NavLink to="/sintar" className="link">Sintar</NavLink>
                    </li>
                    <li className="navigation-list">
                        <NavLink to="/suchary" className="link">Suchary</NavLink>
                    </li>
        </ul>
    )
}

export default Header;
