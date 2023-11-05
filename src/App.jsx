import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [price, setPrice] = useState(0);
  const serverUrl = import.meta.env.VITE_SERVER_URL;

  async function fetchdata() {
    const response = await axios.get(serverUrl);
    const decPrice = response.data.usdPrice;
    console.log(decPrice.toFixed(8));
    setPrice(decPrice.toFixed(8));
    console.log(price);
  }

  // fetchdata();
  return (
    <>
      <Navbar price={price} />
      {/* <Home /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
