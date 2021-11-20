import React, { useState } from "react";
import Form from "./form";

const Contact = () => {

    const [contactOn, setContact] = useState(false);

    const handleTurnOffClick = () => {
        setContact(false);
    }

    const handleTurnOnClick = () => {
        setContact(true);
    }

    const ContactOn = ({onClick}) => {
        return (
            <>
                <Form />
                <button onClick={onClick}>Contact me!</button>
            </>
        )
    }

    const ContactOff = ({onClick}) => {
        return (
            <>
                <button onClick={onClick}>Contact me!</button>
            </>
        )
    }

    let contact;
    if (contactOn) {
        contact = <ContactOn onClick={handleTurnOffClick}/>
    } else {
        contact = <ContactOff onClick={handleTurnOnClick}/>
    }

    return (
        <div>
            { contact }
        </div>
    );
}

export default Contact;