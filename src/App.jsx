//React
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

//styles
import imgLoading from "./assets/loadingport.gif";
import styles from "./App.module.css";

//components views
import Landing from "./pages/Landing/Landing";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

//components views lazy
const Experience = lazy(() => import("./pages/Experience/Experience"));
const Portfolio = lazy(() => import("./pages/Portfolio/Portfolio"));
const Pdf = lazy(() => import("./components/Nav/Pdf.jsx"));
const Contact = lazy(() => import("./pages/Contact/Contact"));

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
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route exact path="/pdf" element={<Pdf />} />
        </Routes>
      </Suspense>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
