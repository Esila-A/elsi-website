import photo from "../photos/Elsi.jpg";

const Home = () => {
    return (
        <div className="home">
            <img src={photo} alt="profile-photo" className="photo" />
            <div className="home_text">
                <h1 className="home_header-one">Hi!</h1>
                <h2 className="home_header-two">I'm Elsi</h2>
                <p className="home_paragraph">I make .... lalala</p>
            </div>
        </div>
    )
}

export default Home;
