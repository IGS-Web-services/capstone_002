import { SectionHeading, EducationCard, Experience } from "../components";

const Skills = () => {
  return (
    <article
      id="skills"
      className=" bg-black/30 backdrop-blur-lg relative w-full   flex flex-col items-center justify-start py-16 laptop:pb-32 "
    >
      <SectionHeading subTitle="education & experiences" title="my journey" />
      <section className="flex flex-col laptop:flex-row  items-center justify-center laptop:justify-between laptop:px-10 w-full gap-3 tablet:gap-10  laptop:h-[450px]">
        <section className="section_hidden flex flex-col gap-3 p-3 h-full ">
          <EducationCard
            title="Bachelor's Degree in Mechatronic Engineering"
            institution="Dedan Kimathi University"
            date="2019 - Present"
          />
          <EducationCard
            title="Secondary School Education"
            institution="Ikuu Boys High School"
            date="2015-2018"
          />
        </section>
        <section className="section_hidden skill experiences rounded-lg flex flex-col px-5 py-3 tablet:px-10 gap-1 h-full">
          <Experience />
        </section>
      </section>
    </article>
  );
};

export default Skills;
