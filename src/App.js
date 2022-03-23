import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { Details, Home,Shop } from "./Pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
