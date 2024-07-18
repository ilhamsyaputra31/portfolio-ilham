import "./portfolio.css";

import IMG1 from "../../assets/viewin.png";
import IMG2 from "../../assets/nn.png";
import IMG3 from "../../assets/sumbawa.png";

import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Simple Web React js and Tailwind CSS",
      img: IMG1,
      description: "Website ini di bangun menggunakan vite react js dan tailwind css",
      technologies: "React JS | Tailwind CSS",
      link: "https://viewin-green.vercel.app/",
      github: "https://github.com/ilhamsyaputra31/Viewin",
    },
    {
      id: 2,
      title: "website laravel",
      img: IMG2,
      description: "Website ini di bangun menggunkan laravel dan sudah berbentuk SaaS",
      technologies: "Laravel | Mysql | Javascript",
      link: "https://rentalhub.site/",
      github: "https://github.com/ilhamsyaputra31/Website-laravel",
    },
    {
      id: 3,
      title: "website SIG Pariwisata Sumbawa",
      img: IMG3,
      description: "Website wisata sumbawa yang bertujuan untuk mengembangkan pariwisata sumbawa",
      technologies: "Laravel | Mysql | Javascript",
      link: "#",
      github: "https://github.com/ilhamsyaputra31/SIG-PariwisataSumbawa-Laravel",
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
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
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
