import React from "react";
import "../../../Styles/SideIcons.css";
import AddIcon from "@material-ui/icons/Add";

const SideIcons = () => {
  return (
    <div className="sideIconsContainer">
      <div className="sideIcons">
        <div className="sideIconsImg">
          <div>
            <img
              src="https://www.gstatic.com/companion/icon_assets/calendar_2020q4_2x.png"
              alt="Calender"
            />
          </div>
          <div>
            <img
              src="https://www.gstatic.com/companion/icon_assets/keep_2020q4v3_2x.png"
              alt="Keep"
            />
          </div>
          <div>
            <img
              src="https://www.gstatic.com/companion/icon_assets/tasks2_2x.png"
              alt="Tasks"
            />
          </div>
        </div>
        <AddIcon className="addIcon" />
      </div>
    </div>
  );
};

export default SideIcons;
