import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import "./styles.css";

export default function HeaderFooter() {
  return (
    <header>
      <span>abnnerborges</span>
      <nav>
        <FaGithub />
        <FaLinkedin />
      </nav>
    </header>
  );
}
