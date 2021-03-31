import React from "react";
import "../../Styles/Main.css";
import MainBody from "./MainBody/MainBody";
import SideBar from "./SideBar/SideBar";
import SideIcons from "./SideIcons/SideIcons";

const Main = () => {
  return (
    <div className="mainContainer">
      <SideBar />
      <MainBody />
      <SideIcons />
    </div>
  );
};

export default Main;
