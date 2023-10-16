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
import Signup1 from "./pages/signup/signup1";
import Signup2 from "./pages/signup/signup2";

function App() {
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
            <Route path="/signup" element={<Signup1 />} />
            <Route path="/verify" element={<Signup2 />} />
          </Routes>
        </Router>
      }
    </div>
  );
}

export default App;
