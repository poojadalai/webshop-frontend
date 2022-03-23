import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { Details, Home } from "./Pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Details />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
