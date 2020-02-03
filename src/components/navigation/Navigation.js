import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navigation(props) {
  let { aboutSwitch } = props;
  return (
    <header className="Navigation">
      <FontAwesomeIcon className="Navigation-icon__left" icon="home" />
      <FontAwesomeIcon
        className="Navigation-icon__right"
        icon="info-circle"
        onClick={aboutSwitch}
      />
    </header>
  );
}
