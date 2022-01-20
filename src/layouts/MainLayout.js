import React from "react";
import Navbar from "../components/Navbar";
import Wrapper from "../components/Wrapper";
import "todomvc-app-css/index.css";

function MainLayout() {
  return (
    <div>
      <Navbar />
      <Wrapper />
    </div>
  );
}

export default MainLayout;
