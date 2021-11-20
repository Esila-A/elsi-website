import * as React from "react";
import "./scss/main.scss";
import {Route, Routes} from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import About from "./pages/about";
import Gallery from "./pages/gallery";
import Collaborations from "./pages/collaborations";
import Interviews from "./pages/interviews";
import Sintar from "./pages/sintar";
import Suchary from "./pages/suchary";
import Footer from "./components/footer"

function App() {
  return (
      <>
          <Header />
          <main>
              <Routes>
                  <Route path="/home" element={<Home />} />
                  <Route path="about" element={<About />} />
                  <Route path="gallery" element={<Gallery />} />
                  <Route path="collaborations" element={<Collaborations />} />
                  <Route path="interviews" element={<Interviews />} />
                  <Route path="sintar" element={<Sintar />} />
                  <Route path="suchary" element={<Suchary />} />
              </Routes>
          </main>
          <Footer />
      </>
  );
}

export default App;
