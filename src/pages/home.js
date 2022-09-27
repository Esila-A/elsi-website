import photo from "../photos/elsi.png";

const Home = () => {
    return (
        <div className="home">
            <img src={photo} alt="profile" className="photo" />
            <div className="home_text">
                <h1 className="home_header-one">Hi!</h1>
                <h2 className="home_header-two">I'm Elsi</h2>
                <p className="home_paragraph">I take photos, make videos and I love doing that! <br/> Need a photographer? get in touch!</p>
            </div>
        </div>
    )
}

export default Home;
