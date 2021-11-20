import {useState} from "react";

const Form =() => {
    const [name, setName] = useState("");
    const [email,setEmail] = useState("");
    const [message, setMessage] = useState("");

    return (
        <form>
            <input type="text" value={name} onChange={event => setName(event.target.value)} placeholder={"Name"} />
            <input type="text" value={email} onChange={event => setEmail(event.target.value)} placeholder={"Email"} />
            <textarea name="" id="" cols="30" rows="10" value={message} onChange={event => setMessage(event.target.value)} placeholder={"Message"} />
            <button type={"submit"}>Submit</button>
        </form>
    )
}

export default Form;
