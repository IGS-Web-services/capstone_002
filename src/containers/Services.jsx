// COMPONENTS
import { ServiceCard, SectionHeading } from "../components";

// IMAGES
import FrontEnd from "../assets/Front_End Dev.png";
import MernStack from "../assets/MERN_Dev.png";
import WebDesign from "../assets/Web Design.jpeg";
import Backend from "../assets/Backend_Dev.jpg";

const Services = () => {
  return (
    <article
      id="services"
      className=" relative w-full bg-black/30  backdrop-blur-lg py-16 service"
    >
      <SectionHeading subTitle="Services" title="What we offer" />
      <section className="grid phone:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-5 place-items-center px-5 tablet:px-10 laptop:px-15">
        <ServiceCard
          image={FrontEnd}
          heading="Front End Excellence"
          body="Crafting captivating and interactive web experiences with precision."
        />

        <ServiceCard
          image={Backend}
          heading="Backend Mastery"
          body="Architecting robust and scalable backend systems for optimal performance."
        />

        <ServiceCard
          image={MernStack}
          heading="Fullstack Expertise"
          body="Delivering tailor-made, fully functional applications to meet your unique requirements."
        />

        <ServiceCard
          image={WebDesign}
          heading="Website Enhancement"
          body="Elevating and rejuvenating previously developed websites for a modern edge."
        />
      </section>
    </article>
  );
};

export default Services;
