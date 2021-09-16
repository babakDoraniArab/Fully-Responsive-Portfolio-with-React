import React from "react";

import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { BiMessageSquareDots, BiMouse, BiDownArrowAlt } from "react-icons/bi";

import "./_home.scss";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__container__content grid">
          <div className="home__container__content__social">
            <a
              target="_blank"
              href="https://github.com/babakDoraniArab"
              className="home__container__content__social__icon"
            >
              <AiFillGithub />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/babak-doraniarab-018a9a53/"
              className="home__container__content__social__icon"
            >
              <AiFillLinkedin />
            </a>
            <a
              target="_blank"
              href="https://t.me/babakDoraniBarnameNevisi"
              className="home__container__content__social__icon"
            >
              <FaTelegramPlane />
            </a>
          </div>
          <div className="home__container__content__img">
            <svg
              className="home__container__content__img__blob"
              viewBox="0 0 200 187"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="mask0" mask-type="alpha">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
              </mask>
              <g mask="url(#mask0)">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
                <image
                  x="2"
                  y="-32"
                  className="home__container__content__img__blob-img"
                  href="/images/babaDorani-min.png"
                />
              </g>
            </svg>
          </div>

          <div className="home__container__content__data">
            <h1 className="home__container__content__data__title">
              Hi, I'babak
            </h1>
            <h3 className="home__container__content__data__subtitle">
              FullStack Developer
            </h3>
            <p className="home__container__content__data__Description">
              High level experince in web desing and knowledge producing quality
              work
            </p>
            <a href="#contact" className="button button--flex contactMe_btn">
              Contact Me
              <BiMessageSquareDots className="button-icon" />
            </a>
          </div>
        </div>

        <div className="home__container__content__scroll">
          <a
            href="#about"
            className="home__container__content__scroll_button button--flex contactMe_btn "
          >
            <BiMouse className="home__container__content__scroll_button_mouse" />
            <span className="home__container__content__scroll_button_name">
              Scroll down
            </span>
            <BiDownArrowAlt className="home__container__content__scroll_button_arrow" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
