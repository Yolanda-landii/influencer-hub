import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";

function App() {
  return (
    <Router>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;