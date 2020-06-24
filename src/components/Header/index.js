import React from "react";
import "./style.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className="header">
      <div className="header-icon">
        <FontAwesomeIcon icon={faBars} size="lg" />
      </div>
      <h2 className="header-logo">React Layouts</h2>
      <h3 className="header-git">Github</h3>
    </div>
  );
};

export default Header;