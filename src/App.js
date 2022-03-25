import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { Details, Home, Shop, Signup, Cart } from "./Pages";
import { Login } from "./Pages/Login";
import { useEffect, useState } from "react";

function App() {
  // const [token, setToken] = useState("")
  // const [user, setUser] = useState()

  // useEffect(() => {
  //   if (token){
  //     // fetch user info from backend
  //   }
  // }, [token])

  const [cart, setCart] = useState([]);

  // console.log(cart);

  return (
    <div className="App">
      {/* <Navbar user={user}/> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop setCart={setCart} cart={cart} />} />
        <Route
          path="/products/:id"
          element={<Details setCart={setCart} cart={cart} />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
