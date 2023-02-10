import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import "./styles.css";

export default function HeaderFooter() {
  return (
    <header>
      <span>abnnerBorges</span>
      <nav>
        <a
          href="https://github.com/AbnnerB"
          target="_blank"
          className="githubIcon"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/abnner-borges-05a631255/"
          target="_blank"
          rel="noreferrer"
          className="linkedinIcon"
        >
          <FaLinkedin />
        </a>
      </nav>
    </header>
  );
}
