import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { CSSTransition } from 'react-transition-group';
import apps_data from "../../apps_data";

const Links = ({ setShowSidebar }) => {
  const links = apps_data.map(link => {
    return <li key={link.path}><Link onClick={() => setShowSidebar(false)} to={link.path}>{link.name}</Link></li>;
  });
  return links;
};

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  return (
    <CSSTransition
      in={showSidebar}
      unmountOnExit={true}
      timeout={500}
      classNames="moveSidebar">
      <div className="sidebar">
        <div className="sb-icon">
          <FontAwesomeIcon
            className="sidebarArrow"
            icon={faArrowLeft}
            size="lg"
            onClick={() => setShowSidebar(false)} />
        </div>
        <div className="home">
          <h3>
            <Link to="/" onClick={() => setShowSidebar(false)}>Home</Link>
          </h3>
        </div>
        <div className="sb-apps">
          <h3>Apps</h3>
          <ul className="apps-list">
            <Links setShowSidebar={setShowSidebar} />
          </ul>
        </div>
        <div className="sb-about">
          <h3>
            <Link to="/about" onClick={() => setShowSidebar(false)}>About-me</Link>
          </h3>
        </div>
        <div className="sb-github">
          <h3>
            <a
              href="https://github.com/rosig"
              target='_blank'
              rel='noopener noreferrer'>Github</a>
          </h3>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Sidebar;