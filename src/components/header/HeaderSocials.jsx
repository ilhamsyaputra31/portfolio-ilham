import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

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
    </div>
  );
};

export default HeaderSocials;
