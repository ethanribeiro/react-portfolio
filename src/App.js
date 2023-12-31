import './App.css';

import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from 'react-router-dom';

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
