import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { CSSTransition } from 'react-transition-group';

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
            <Link to="/">Home</Link>
          </h3>
        </div>
        <div className="sb-apps">
          <h3>Apps</h3>
          <ul className="apps-list">
            <li><Link to="/calculator">Calculadora</Link></li>
            <li><Link to="/hex-rgb">Hex-Rgb</Link></li>
            <li><Link to="/journi">Journi</Link></li>
            <li><Link to="/lerp-rings">Lerp-Rings</Link></li>
            <li><Link to="/magic-cube">Cubo Mágico</Link></li>
            <li><Link to="/memory-game">Jogo da Memória</Link></li>
            <li><Link to="/todos">Todos</Link></li>
          </ul>
        </div>
        <div className="sb-about">
          <h3>
            <Link to="/about">About-me</Link>
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