import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import imgLoading from "./assets/loadingport.gif";
import styles from "./App.module.css";

//components views
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Landing from "./components/Landing/Landing";

//components views lazy
const About = lazy(() => import("./components/About/About"));
const Portfolio = lazy(() => import("./components/Portfolio/Portfolio"));
const Pdf = lazy(() => import("./components/Nav/Pdf.jsx"));
const Contact = lazy(() => import("./components/Contact/Contact"));

function App() {
  return (
    <div>
      <Nav />
      <Suspense
        fallback={
          <div className={styles.loadingContainer}>
            <img className={styles.loading} src={imgLoading} alt="loading" />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route exact path="/pdf" element={<Pdf />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
