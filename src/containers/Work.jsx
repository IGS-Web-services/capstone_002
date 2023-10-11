import { SectionHeading, WorkCard } from "../components";
import ChurchApp from "../assets/Church_App.png";
import ElimuHub from "../assets/Elimu_Mkononi.png";
import FrancisPortfolio from "../assets/Francis_Portfolio.png";

const Work = () => {
  return (
    <article
      id="projects"
      className="relative bg-slate-100 py-16 rounded-lg laptop:rounded-lg "
    >
      <SectionHeading subTitle="projects" title="featured work" />
      <section className="grid phone:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-5 p-4 place-items-center px-5 tablet:px-10 laptop:px-15 rounded-2xl">
        <WorkCard
          status="version 1.0"
          link="https://elimu-mkononi.netlify.app/"
          image={ElimuHub}
          name="Elimu Hub"
          description="An e-learning platform with analytics and custom authentication"
        />
        <WorkCard
          status="under construction"
          link="https://aipca-app.vercel.app/"
          image={ChurchApp}
          name="AIPCA Nyahururu"
          description="A church application meant to simplify communication and automate record keeping"
        />
        <WorkCard
          status="version 1.0"
          link="https://francisgitau.vercel.app/"
          image={FrancisPortfolio}
          name="Portfolio"
          description="A portfolio website for skills display"
        />
      </section>
    </article>
  );
};

export default Work;
