import React, { useState } from "react";
import Navbar from "../../components/Header/Navbar";
import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";

const Root = () => {
  const [wish,setWish]=useState([])
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-6xl mx-auto">
        <Outlet context={{wish,setWish}}></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Root;
