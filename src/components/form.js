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

    const [notice, setNotice] = useState(
        <button type="submit" className="submit">Submit</button>
    )

    const handleSubmit = (e) => {
        e.preventDefault();

        send (
            "service_7wmd5w3",
            "template_grkdefk",
            form,
            "user_tS3Y6YUhlJO7WBrDMRBN8"
        )
            .then(() => {
                setNotice (
                    <p className="positive">SENT!</p>
                );
            })
            .catch(() => {
                setNotice (
                    <p className="negative">SOMETHING WENT WRONG... TRY AGAIN</p>
                )
            });
    };

    return (
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="your name" value={form.name} onChange={handleChange} className="form_input input-one for" autoComplete="off" required={true}/>
                <input type="email" name="email" placeholder="your email" value={form.email} onChange={handleChange} className="form_input input-two for" autoComplete="off" required={true}/>
                <textarea name="message" rows="15" placeholder="your message" value={form.message} onChange={handleChange} className="form_textarea for" required={true}/>
                {notice}
            </form>
    )
}

export default Form;
