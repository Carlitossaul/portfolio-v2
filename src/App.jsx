import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Pdf from "./components/Nav/Pdf.jsx";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Landing from "./components/Landing/Landing";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route exact path="/pdf" element={<Pdf />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
