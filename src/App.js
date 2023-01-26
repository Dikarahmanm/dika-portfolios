/** @format */

import About from "./component/About.jsx";
import Contact from "./component/Contact.jsx";
import Experience from "./component/Experience.jsx";
import Home from "./component/Home.jsx";
import NavBar from "./component/NavBar.jsx";
import Portfolio from "./component/Portfolio.jsx";
import SocialLinks from "./component/SocialLinks.jsx";

function App() {
  return (
    <div>
      <NavBar />
      <Home />

      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
