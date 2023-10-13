import { SectionHeading, WorkCard } from "../components";
import SmartFarm from "../assets/Smart_Farming.jpg";
import CarTracking from "../assets/Car_Tracher.jpg";
import AtegoNano from "../assets/Atego_Nano.jpg";

const Work = () => {
  return (
    <article
      id="projects"
      className="relative bg-slate-100 py-16 rounded-lg laptop:rounded-lg "
    >
      <SectionHeading subTitle="projects" title="featured work" />
      <section className="grid phone:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-5 p-4 place-items-center px-5 tablet:px-10 laptop:px-15 rounded-2xl">
        <WorkCard
          link="#"
          image={AtegoNano}
          name="Atego Nano"
          description="A variant of the arduino nano"
        />
        <WorkCard
          link="#"
          image={CarTracking}
          name="Car tracker"
          description="STM 32 Based car tracker"
        />
        <WorkCard
          link="#"
          image={SmartFarm}
          name="Smart Farm"
          description="A smart farm project"
        />
      </section>
    </article>
  );
};

export default Work;
