import React from "react";
import "./Journi.css";

import logo from "./journi_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Journi = () => {
  return (
    <div className="journi-container">
      <img className="journi-logo" src={logo} alt="Logo" />

      <h5>
        Journi é uma plataforma para ajudar alunos a escolher uma universidade
        e um curso, baseado nas suas expectativas, com a colaboração de
        pessoas relacionadas aos cursos, que compartilham suas experiências.
        </h5>
      <h5>
        O projeto foi desenvolvido na disciplina Projetão, do Cin-Ufpe, por
        uma equipe de 14 pessoas, composta por alunos de Psicologia, Ciência
        da Computação, Eng. da Computação, Eng. Biomédica e Química.
        </h5>
      <h5>A implementação foi realizada utilizando VueJs e NodeJs.</h5>

      <a
        href="https://github.com/Projetao-2019-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faGithub}
          size="3x"
          className="journi-icon-git"
        />
      </a>
    </div>
  );
};

export default Journi;
