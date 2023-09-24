import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { Menu } from "./pages/menu/Menu";
import { About } from "./pages/aboutus/About";
import { Contact } from "./pages/contact/Contact";

function App() {
  return (
    <div className="App">
      <div className="app-parent">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
