import React from "react";
import SideBarItems from "./SideBarItems";
import "../../../Styles/SideBar.css";

import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
import PeopleIcon from "@material-ui/icons/People";
import WatchLaterOutlinedIcon from "@material-ui/icons/WatchLaterOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import StorageOutlinedIcon from "@material-ui/icons/StorageOutlined";
import NewFile from "./NewFile/NewFile";

const SideBar = () => {
  return (
    <div className="sideBarContainer">
      <NewFile />
      <div className="sideBarItems">
        <SideBarItems arrow icon={<InsertDriveFileIcon />} name={"My Drive"} />
        <SideBarItems
          arrow
          icon={<ImportantDevicesIcon />}
          name={"Computers"}
        />
        <SideBarItems icon={<PeopleIcon />} name={"Share with me"} />
        <SideBarItems icon={<WatchLaterOutlinedIcon />} name={"Recent"} />
        <SideBarItems icon={<StarBorderOutlinedIcon />} name={"Starred"} />
        <SideBarItems icon={<DeleteOutlinedIcon />} name={"Trash"} />
        <hr />
        <SideBarItems icon={<StorageOutlinedIcon />} name={"Storage"} />
      </div>
    </div>
  );
};

export default SideBar;
