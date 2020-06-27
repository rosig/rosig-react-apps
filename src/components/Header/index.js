import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = ({ setShowSidebar }) => {
  return (
    <div className="header">
      <div className="header-icon" onClick={() => setShowSidebar(true)}>
        <FontAwesomeIcon icon={faBars} size="lg" />
      </div>
      <h2 className="header-logo">
        <Link to="/">rosig-apps</Link>
      </h2>
      <h3 className="header-git">
        <a
          href="https://github.com/rosig"
          target='_blank'
          rel='noopener noreferrer'>Github</a>
      </h3>
    </div>
  );
};

export default Header;