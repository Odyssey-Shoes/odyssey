//import { useState } from "react";
import TopNavbar from "./components/topNavbar/topNavbar";
import Navbar from "./components/navbar/NavBar";

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from "./pages/home/home";
import Men from "./pages/men/men";
import Women from "./pages/women/women";
import Kids from "./pages/kids/kids";
import Sports from "./pages/sports/sports";
import Sales from "./pages/sales/sales";
import Wishlist from "./pages/wishlist/wishlist";
import Cart from "./pages/cart/cart";
import Account from "./pages/account/account";


function App() {
  //const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
    
      
   
    
    <main>

    <TopNavbar></TopNavbar>
      <Navbar />
      
    
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Account />} />

      </Routes>
    </main>
    
    </BrowserRouter>
  );
}

export default App;
