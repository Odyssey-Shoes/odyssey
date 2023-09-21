//import { useState } from "react";
// import { BrowserRouter, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TopNavbar from "./components/topNavbar/topNavbar";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import Men from "./pages/men/men";
import Women from "./pages/women/women";
import Kids from "./pages/kids/kids";
import Sport from "./pages/sport/sport";
import Login from "./pages/login/login";
import Sale from "./pages/sale/sale";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <div>
      {
        <Router>
          <TopNavbar />
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/sport" element={<Sport />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sale" element={<Sale />} />
          </Routes>
        </Router>

        /* <BrowserRouter>
        <TopNavbar />
        <Navbar />
        <Route path="/">
          <Home />
        </Route>
        <Route path="/men">
          <Men />
        </Route>
        <Route path="/women">
          <Women />
        </Route>
        <Route path="/kids">
          <Kids />
        </Route>
        <Route path="/sport">
          <Sport />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </BrowserRouter> */
      }
    </div>
  );
}

export default App;
