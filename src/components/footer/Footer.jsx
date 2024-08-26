import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        Ilham Syaputra
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.instagram.com/ilhmsyaptra/"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
        <a href="https://github.com/ilhamsyaputra31" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/ilham-syaputra-374165284/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>

      </div>
    </footer>
  );
};

export default Footer;
