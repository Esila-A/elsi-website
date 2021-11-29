import {NavLink} from "react-router-dom";

const Navigation = (props) => {
    return (
        <ul className="navigation">
            <li className="navigation-list" onClick={() => props.isMobilePhone && props.closeMenu()}>
                <NavLink to="/home" className="link">Home</NavLink>
            </li>
            <li className="navigation-list" onClick={() => props.isMobilePhone && props.closeMenu()}>
                <NavLink to="/about" className="link">About</NavLink>
            </li>
            <li className="navigation-list" onClick={() => props.isMobilePhone && props.closeMenu()}>
                <NavLink to="/gallery" className="link">Gallery</NavLink>
            </li>
            <li className="navigation-list" onClick={() => props.isMobilePhone && props.closeMenu()}>
                <NavLink to="/collaborations" className="link">Collaborations</NavLink>
            </li>
            <li className="navigation-list" onClick={() => props.isMobilePhone && props.closeMenu()}>
                <NavLink to="/interviews" className="link">Interviews</NavLink>
            </li>
            <li className="navigation-list" onClick={() => props.isMobilePhone && props.closeMenu()}>
                <NavLink to="/sintar" className="link">Sintar</NavLink>
            </li>
        </ul>
    )
}

export default Navigation;
