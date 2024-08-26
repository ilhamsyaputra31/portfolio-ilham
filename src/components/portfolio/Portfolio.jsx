import { useState } from 'react';
import "./portfolio.css";

import IMG1 from "../../assets/viewin.png";
import IMG2 from "../../assets/nn.png";
import IMG3 from "../../assets/sumbawa.png";
import IMG4 from "../../assets/belanya.png";

import React from "react";

//Portfolio function
const Portfolio = () => {

  const [expandedId, setExpandedId] = useState(null);
  const MAX_LENGTH = 100;

  const toggleDescription = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const soloProjects = [
    {
      id: 1,
      title: "Web React js and Tailwind CSS",
      img: IMG1,
      description: "Website ini dibangun dengan teknologi terbaru, menggunakan Vite sebagai bundler, React.js untuk pengembangan interaktif dan dinamis, serta Tailwind CSS untuk menciptakan antarmuka yang elegan dan responsif. Website ini tidak hanya menawarkan tampilan yang modern, tetapi juga pengalaman pengguna yang optimal di berbagai perangkat.",
      technologies: "React JS | Tailwind CSS",
      link: "https://viewin-green.vercel.app/",
      github: "https://github.com/ilhamsyaputra31/Viewin",
    },
    {
      id: 2,
      title: "website laravel Berbentuk SaaS",
      img: IMG2,
      description: "Website ini dibangun menggunakan Laravel dan telah dikembangkan menjadi sebuah platform Software as a Service (SaaS) yang handal. Dengan teknologi backend yang solid, situs ini menawarkan berbagai fitur canggih untuk memenuhi kebutuhan pengguna. Di dalamnya, terdapat sistem login yang aman dan efisien, memastikan bahwa setiap data pengguna terlindungi dengan baik. Selain itu, fitur CRUD yang lengkap memungkinkan pengelolaan data dengan mudah melalui antarmuka yang intuitif.",
      technologies: "Laravel | Mysql | Javascript",
      link: "#",
      github: "https://github.com/ilhamsyaputra31/Website-laravel",
    },
    {
      id: 3,
      title: "website SIG Pariwisata Sumbawa",
      img: IMG3,
      description: " Website ini dibangun menggunakan Laravel dan dirancang untuk memudahkan pengguna dalam mengeksplorasi berbagai destinasi wisata di Sumbawa.Fitur - fitur utama termasuk sistem pemesanan yang memungkinkan pengguna untuk memesan paket wisata secara langsung melalui platform, serta fitur CRUD (Create, Read, Update, Delete) yang memungkinkan pengguna melihat dan mengelola titik- titik lokasi wisata secara interaktif.Dengan peta yang terintegrasi, pengguna dapat dengan mudah menemukan lokasi wisata yang diinginkan dan mendapatkan informasi detail terkait tempat tersebut. ",
      technologies: "Laravel | Mysql | Javascript",
      link: "#",
      github: "https://github.com/ilhamsyaputra31/SIG-PariwisataSumbawa-Laravel",
    },
    {
      id: 4,
      title: "LandingPage e-commerce",
      img: IMG4,
      description: " Wwebsite ini dibangun menggunakan React.js dan Tailwind CSS untuk menciptakan pengalaman berbelanja online yang interaktif dan modern. Halaman ini responsif, memastikan tampilan optimal di berbagai perangkat, mulai dari desktop hingga smartphone. Fitur dark mode yang disediakan memungkinkan pengguna untuk memilih tampilan yang paling nyaman sesuai dengan preferensi mereka, baik dalam mode terang maupun gelap. Dengan integrasi antara React.js dan Tailwind CSS.",
      technologies: "React JS | Tailwind CSS",
      link: "#",
      github: "https://github.com/ilhamsyaputra31/E-commers-landingpage",
    },
  ];



  return (
    <section id="portfolio">
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>
                {expandedId === pro.id || pro.description.length <= MAX_LENGTH
                  ? pro.description
                  : `${pro.description.substring(0, MAX_LENGTH)}...`}
                {pro.description.length > MAX_LENGTH && expandedId !== pro.id && (
                  <span>
                    <a onClick={() => toggleDescription(pro.id)} className="toggle-link">
                      Read More
                    </a>
                  </span>
                )}
              </p>
              {expandedId === pro.id && (
                <a onClick={() => toggleDescription(pro.id)} className="toggle-link">
                  Read Less
                </a>
              )}
              <p className="portfolio__item-technologies">{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};



export default Portfolio;
