import "./App.css";
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/HomePage/Home";
import Details from "./Pages/DetailsPage/Details";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Details />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
