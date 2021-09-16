import React from "react";
import "./_about.scss";
import { BiDownload } from "react-icons/bi";
const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>
      <div className="about__container container grid">
        <img src="/images/about.jpg" alt="" className="about__img" />
        <div class="about__data">
          <p className="about__description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
            est rem debitis corrupti deleniti illum consequatur dolorem quod
            quia ducimus et earum ullam, laborum ipsa sunt sint eius? Impedit
          </p>
          <div className="about__info">
            <div>
              <span className="about__info-title">08+</span>
              <span className="about__info-name">
                Years <br /> experience
              </span>
            </div>

            <div>
              <span className="about__info-title">20+</span>
              <span className="about__info-name">
                completed <br /> project
              </span>
            </div>

            <div>
              <span className="about__info-title">05+</span>
              <span className="about__info-name">
                companies <br /> worked
              </span>
            </div>
          </div>
          <div className="about__buttons">
            <a
              href="/pdf/resume.pdf"
              className="button button--flex"
              download=""
            >
              Download CV
              <BiDownload className="button-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
