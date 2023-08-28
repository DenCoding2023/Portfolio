import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <h2>Dennis Luciano</h2>
      <p>
        <ul>
          <a href="https://github.com/DenCoding2023/Portfolio.git">
            <li className="logo">
              <VscGithubAlt />
            </li>
          </a>
          <a href="add a logo here/">
            <li className="logo">
              <AiOutlineLinkedin />
            </li>
          </a>
          <a href="Add a info/">
            <li className="logo">
              <FaInstagram />
            </li>
          </a>
        </ul>
      </p>
    </footer>
  );
}

export default Footer;
