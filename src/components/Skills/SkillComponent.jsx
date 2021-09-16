import React from "react";
import { FaAngleDown } from "react-icons/fa";
import Skill from "./Skill";
const SkillComponent = ({
  skillName,
  time,
  skills,
  Icon,
  isActive,
  openHandler,
  AccordionName,
}) => {
  return (
    <>
      <div
        className={`skills__content ${
          isActive ? "skills__open" : "skills__close"
        }`}
      >
        <div
          className="skills__content__header"
          onClick={() => openHandler(isActive, AccordionName)}
        >
          {Icon}
          <div>
            <h1 className="skills__content__header__title">{skillName}</h1>
            <span className="skills__content__header__subtitle">
              More Than {time} years
            </span>
          </div>
          <FaAngleDown className="skills__content__header__arrow" />
        </div>
        {skills.map((skill) => (
          <Skill key={skill.name} name={skill.name} percent={skill.percent} />
        ))}
      </div>
    </>
  );
};

export default SkillComponent;
