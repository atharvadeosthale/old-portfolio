import React from "react";
import About from "./About";
import "./App.css";
import Header from "./Header";
import Navbar from "./Navbar";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// ..
AOS.init();
function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <ToastContainer hideProgressBar />
    </div>
  );
}

export default App;
