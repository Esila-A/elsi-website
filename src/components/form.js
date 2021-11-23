import React, {useState} from "react";
import {send} from "emailjs-com";

const Form = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm (prevState => {
            return {
                ...prevState,
                [name]: value,
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        send (
            "service_7wmd5w3",
            "template_grkdefk",
            form,
            "user_tS3Y6YUhlJO7WBrDMRBN8"
        )
            .then(() => {
                console.log("SENT!");
            })
            .catch(() => {
                console.log("SOMETHING WENT WRONG...TRY AGAIN");
            });
    };

    return (
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="your name" value={form.name} onChange={handleChange} className="form_input input-one" autoComplete="off" />
                <input type="email" name="email" placeholder="your email" value={form.email} onChange={handleChange} className="form_input input-two" autoComplete="off" />
                <textarea name="message" cols="30" rows="15" placeholder="your message" value={form.message} onChange={handleChange} className="form_textarea" />
                <button type="submit" className="submit">Submit</button>
            </form>
    )
}

export default Form;
