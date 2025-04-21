import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import Navbar from "./components/NavBar";
import About from "./components/About";
import Footer from "./components/Footer";
import bgImage from "./assets/hobbies.png";

function App() {
  return (
    <Router>
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

