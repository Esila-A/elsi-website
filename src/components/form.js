import {useState} from "react";
import {send} from "emailjs-com";

// const Form = () => {
//     const [name, setName] = useState("");
//     const [email,setEmail] = useState("");
//     const [message, setMessage] = useState("");
//
//     const onSubmit = (e) => {
//         e.preventDefault();
//         send(
//             "service_7wmd5w3",
//             "template_grkdefk",
//             name,
//             "user_tS3Y6YUhlJO7WBrDMRBN8"
//         )
//             .then((response) => {
//                 console.log("SUCCESS!", response.status, response.text);
//             })
//             .catch((err) => {
//                 console.log("FAILED...TRY AGAIN", err);
//             });
//     };
//
//     return (
//         <div className="form-background">
//             <form className="form" onSubmit={onSubmit}>
//                 <input type="text" value={name} onChange={event => setName(event.target.value)} placeholder={"Name"} className="form_input input-one"/>
//                 <input type="email" value={email} onChange={event => setEmail(event.target.value)} placeholder={"Email"} className="form_input input-two"/>
//                 <textarea name="" id="" cols="30" rows="15" value={message} onChange={event => setMessage(event.target.value)} placeholder={"Message"} className="form_textarea"/>
//                 <button type={"submit"} className="submit">Submit</button>
//             </form>
//         </div>
//     )
// }

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

        const messageOne = <span className="message-one">"SENT!"</span>;
        const messageTwo = <span className="message-two">"SOMETHING WENT WRONG...TRY AGAIN"</span>;

        send (
            "service_7wmd5w3",
            "template_grkdefk",
            form,
            "user_tS3Y6YUhlJO7WBrDMRBN8"
        )
            .then (() => {
                console.log(messageOne);
            })
            .catch (() => {
                console.log(messageTwo);
            });
    };

    return (
        <div className="form-background">
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="your name" value={form.name} onChange={handleChange} className="form_input input-one" />
                <input type="email" name="email" placeholder="your email" value={form.email} onChange={handleChange} className="form_input input-two" />
                <textarea name="message" cols="30" rows="15" placeholder="your message" value={form.message} onChange={handleChange} className="form_textarea" />
                <button type="submit" className="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form;
