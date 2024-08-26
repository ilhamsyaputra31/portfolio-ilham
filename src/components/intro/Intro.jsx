import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from "../../assets/aku1.jpg";

// import ME from '../../assets/Rasif Tagizade image.jpg';

const Intro = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Rasif Taghizade" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small></small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small></small>
            </article>
          </div>
          <p>
            Nama Saya Ilham Syaputra <br />
            Saya adalah adalah seorang Software Engineer yang bersemangat dengan keahlian dalam berbagai framework JavaScript dan PHP, termasuk React.js, CodeIgniter, dan Laravel. Keterampilan teknis yang saya milik telah memungkinkan saya untuk sukses mengerjakan berbagai proyek, menunjukkan kemampuan saya dalam membangun dan mengembangkan aplikasi dinamis. Antusiasme saya terhadap teknologi mendorong saya untuk terus mengeksplorasi dan berinovasi di bidang ini, menjadikannya aset berharga di lingkungan yang berfokus pada teknologi.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
