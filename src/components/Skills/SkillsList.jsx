import React, { useState } from "react";
import "./_skills.scss";
import { BsBraces } from "react-icons/bs";
import { BiServer } from "react-icons/bi";
import { CgServer } from "react-icons/cg";

import SkillComponent from "./SkillComponent";

const Skills = () => {
  const [accordion1, setAccordion1] = useState(true);
  const [accordion2, setAccordion2] = useState(false);
  const [accordion3, setAccordion3] = useState(false);
  const openHandler = (value, name) => {
    if (name === "accordion1") {
      setAccordion1(!value);
    } else if (name === "accordion2") {
      setAccordion2(!value);
    } else if (name === "accordion3") {
      setAccordion3(!value);
    }
    // switch (name) {
    //   case "accordion1":
    //     console.log("here");
    //     console.log("barakse status ", !value);
    //     {
    //       setAccordion1(!value);
    //     }
    //     console.log("accordion ", accordion1);
    //   case "accordion2":
    //     setAccordion2(!value);

    //   case "accordion3":
    //     setAccordion3(!value);

    //   default: {
    //     setAccordion1(false);
    //     setAccordion2(false);
    //     setAccordion3(false);
    //   }
    // }
  };
  const frontSkills = [
    {
      name: "html",
      percent: "90",
    },
    {
      name: "css",
      percent: "75",
    },
    
    {
      name: "jQuery",
      percent: "80",
    },
    {
      name: "Javascript/ECMA 6",
      percent: "90",
    },
    {
      name: "Bootstrap/MaterialUI",
      percent: "90",
    },
    
    {
      name: "React/Redux/Redux toolkit",
      percent: "90",
    },
  ];
  const backEndSkills = [
    {
      name: "Ajax",
      percent: "90",
    },
    {
      name: "Laravel",
      percent: "80",
    },
    {
      name: "Nodejs",
      percent: "60",
    },
    
    {
      name: "MySql",
      percent: "80",
    },
    
    {
      name: "MongoDB",
      percent: "80",
    },
  ];
  const serverAndDeployment = [
    {
      name: "Firebase",
      percent: "90",
    },
    {
      name: "Linux",
      percent: "50",
    },
    {
      name: "DirectAdmin/Cpanel",
      percent: "90",
    },
    {
      name: "Docker",
      percent: "75",
    },
    {
      name: "Git/Gitlab",
      percent: "85",
    },
  ];
  return (
    <section className="skills section" id="skills">
      <div className="section__title">Skills</div>
      <div className="section__subtitle">My technical Level</div>
      <div className="skills__container container grid">
        <div>
          {/* ===================== Skill 1 ======================== */}
          <SkillComponent
            skillName="Front-End "
            time="4"
            skills={frontSkills}
            openHandler={openHandler}
            isActive={accordion1}
            AccordionName="accordion1"
            Icon={<BsBraces className="skills__content__header__icon" />}
          />

          {/* ===================== Skill 2 ======================== */}
          <SkillComponent
            skillName="Back-End & Database "
            time="4"
            skills={backEndSkills}
            isActive={accordion2}
            openHandler={openHandler}
            AccordionName="accordion2"
            Icon={<BiServer className="skills__content__header__icon" />}
          />
          {/* ===================== Skill 2 ======================== */}
          <SkillComponent
            skillName="Server and Deployment"
            time="4"
            skills={serverAndDeployment}
            isActive={accordion3}
            openHandler={openHandler}
            AccordionName="accordion3"
            Icon={<CgServer className="skills__content__header__icon" />}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
