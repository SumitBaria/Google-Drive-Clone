import React from "react";
import "../../../Styles/SideBarItems.css";

import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const SideBarItems = ({ arrow, icon, name }) => {
  return (
    <div className="sideBarItemsContainer">
      <div className="sideBarItems__Arrow">{arrow && <ArrowRightIcon />}</div>

      <div className="sideBarItemsNames">
        {icon}
        <p> {name}</p>
      </div>
    </div>
  );
};

export default SideBarItems;
