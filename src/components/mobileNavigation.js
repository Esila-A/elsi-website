import Navigation from "./navigation";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/all";
import {useState} from "react";

const MobileNavigation = () => {

    const [icon, setIcon] = useState(false);

    const openIcon = <FiMenu className="menu" onClick={() => setIcon(!icon)} />

    const closeIcon = <IoClose className="menu" onClick={() => setIcon(!icon)}/>

    const closeMenu = () => setIcon(false)

    return (
        <div className="mobileNav">
            {icon ? closeIcon : openIcon}
            {icon && <Navigation isMobilePhone={true} closeMenu={closeMenu}/>}
        </div>
    )
}

export default MobileNavigation;
