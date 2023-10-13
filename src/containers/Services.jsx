// COMPONENTS
import { ServiceCard, SectionHeading } from "../components";

// IMAGES
import PCBDesign from "../assets/PCB_Design.png";
import MechanicalDesign from "../assets/mechanical_design.jpg";
import OnlineWriting from "../assets/online_writing.jpeg";
import HardwareDevelopment from "../assets/Hardware_Development.jpg";

const Services = () => {
  return (
    <article
      id="services"
      className=" relative w-full bg-black/30  backdrop-blur-lg py-16 service"
    >
      <SectionHeading subTitle="Services" title="What we offer" />
      <section className="grid phone:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-5 place-items-center px-5 tablet:px-10 laptop:px-15">
        <ServiceCard
          image={MechanicalDesign}
          heading="Mechnical Design"
          body="Architecting robust and scalable backend systems for optimal performance."
        />

        <ServiceCard
          image={PCBDesign}
          heading="PCB Design"
          body="Crafting captivating and interactive web experiences with precision."
        />

        <ServiceCard
          image={OnlineWriting}
          heading="Online Writing"
          body="Delivering tailor-made, fully functional applications to meet your unique requirements."
        />

        <ServiceCard
          image={HardwareDevelopment}
          heading="Hardware Development"
          body="Elevating and rejuvenating previously developed websites for a modern edge."
        />
      </section>
    </article>
  );
};

export default Services;
