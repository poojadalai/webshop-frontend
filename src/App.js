import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { Details, Home, Shop, Signup } from "./Pages";
import { Login } from "./Pages/Login";
import { useEffect } from "react";

function App() {

  // const [token, setToken] = useState("")
  // const [user, setUser] = useState()

  // useEffect(() => {
  //   if (token){
  //     // fetch user info from backend
  //   }
  // }, [token])


  return (
    <div className="App">
       {/* <Navbar user={user}/> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/products/:id" element={<Details />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
