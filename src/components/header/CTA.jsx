import React from "react";
import CV from "../../assets/CV Ilham.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn btn-primary">
        Download CV
      </a>
      {/* <a href="#contact" className="btn btn-primary">
        Let's talk
      </a> */}
    </div>
  );
};

export default CTA;
