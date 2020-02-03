import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SideBar() {
  return (
    <div className="SideBar">
      <FontAwesomeIcon className="SideBar-icon" icon={["fab", "facebook"]} />
      <FontAwesomeIcon className="SideBar-icon" icon={["fab", "twitter"]} />
      <FontAwesomeIcon className="SideBar-icon" icon={["fab", "instagram"]} />
    </div>
  );
}
