import React from "react";

const Skill = ({ name, percent }) => {
  return (
    <>
      <div className="skills__content__list grid">
        <div className="skills__content__list__data">
          <div className="skills__content__list__data__title">
            <h3 className="skills__content__list__data__title__name">{name}</h3>
            <span className="skills__content__list__data__title__number">
              {percent}%
            </span>
          </div>

          <div className="skills__content__list__data__bar">
            <span
              className={`skills__content__list__data__bar__percentage skills__${name}`}
              style={{ width: `${percent}% ` }}
            ></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
