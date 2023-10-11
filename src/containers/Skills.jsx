import { SectionHeading, Skill, Experience } from "../components";

// SKILLS
import aws from "../assets/amazon.png";
import git from "../assets/git.png";
import figma from "../assets/figma.png";
import astro from "../assets/astro.png";
import nextJS from "../assets/Nextjs.png";
import mongodb from "../assets/mongoDB.png";
import express from "../assets/express.png";
import react from "../assets/react.png";
import nodeJS from "../assets/node.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import sass from "../assets/sass.png";
import tailwindcss from "../assets/tailwindcss.png";
import javascript from "../assets/javascript.png";
import typeScript from "../assets/typescript_logo.png";

const Skills = () => {
  return (
    <article
      id="skills"
      className=" bg-black/30 backdrop-blur-lg relative w-full   flex flex-col items-center justify-start py-16 laptop:pb-32 "
    >
      <SectionHeading subTitle="skills & experiences" title="Tools of work" />
      <section className="flex flex-col laptop:flex-row  items-center justify-center laptop:justify-between laptop:px-10 w-full gap-3 tablet:gap-10  laptop:h-[450px]">
        <section className="section_hidden grid skill grid-cols-3 tablet:grid-cols-4 gap-3 p-3 h-full ">
          <Skill icon={git} name="git" />
          <Skill icon={figma} name="figma" />
          <Skill icon={aws} name="aws services" />
          <Skill icon={astro} name="astro" />
          <Skill icon={nextJS} name="nextJS" />
          <Skill icon={mongodb} name="mongodb" />
          <Skill icon={express} name="express" />
          <Skill icon={react} name="react" />
          <Skill icon={nodeJS} name="nodeJS" />
          <Skill icon={html} name="html" />
          <Skill icon={sass} name="sass" />
          <Skill icon={css} name="css" />
          <Skill icon={tailwindcss} name="tailwindcss" />
          <Skill icon={javascript} name="javascript" />
          <Skill icon={typeScript} name="typescript" />
        </section>
        <section className="section_hidden skill experiences rounded-lg flex flex-col px-5 py-3 tablet:px-10 gap-1 h-full">
          <Experience />
        </section>
      </section>
    </article>
  );
};

export default Skills;
