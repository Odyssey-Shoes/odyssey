import { useState } from "react";
import TopNavbar from "./components/topNavbar/topNavbar";

import Navbar from "./components/navbar/navbar";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/home";
import Men from "./pages/men/men";
import Women from "./pages/women/women";
import Kids from "./pages/kids/kids";
import Sports from "./pages/sports/sports";


function App() {
  //const [count, setCount] = useState(0);
  return (
    <BrowserRouter>
    <div>
    <TopNavbar/>
      <Navbar/> 
    </div>
    <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/men" element={<Men/>}/>
        <Route path="/women" element={<Women/>}/>
        <Route path="/kids" element={<Kids/>}/>
        <Route path="/sports" element={<Sports/>}/>
      </Routes>
    </main>
    </BrowserRouter>

  )

}

export default App;
