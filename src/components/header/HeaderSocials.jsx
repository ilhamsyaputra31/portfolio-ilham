import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
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
  );
};

export default HeaderSocials;
