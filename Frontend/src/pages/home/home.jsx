import React from "react";
import TopNavbar from "/src/components/topNavbar/TopNavbar";
import Navbar from "/src/components/navbar/NavBar";

export default function home() {
  return (
    <div>
      <TopNavbar />
      <Navbar />
      <h1>Hello from home</h1>
    </div>
  );
}
