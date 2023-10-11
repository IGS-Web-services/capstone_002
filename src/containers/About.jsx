import resume from "../assets/resume.pdf";
import banner from "../assets/profile_picture.jpg";
import { SectionHeading } from "../components";

const About = () => {
  return (
    <div id="about">
      <article className="w-full py-12 lg:py-16 px-5 bg-slate-100  rounded-lg">
        <SectionHeading subTitle="About" title="Who am I" />
        <section className="flex flex-col lg:flex-row items-center gap-12">
          <figcaption className=" order-2 lg:order-1 relative w-full lg:w-[50%] flex flex-col items-center lg:items-start justify-center py-12 pl-5 text-center ">
            <p className="text-md md:text-lg text-center lg:text-start pt-3 pb-10 ">
              Im a proficient <span className="">web developer</span> with a
              keen interest in building stunning, user-centric and
              lightning-fast web applications using cutting-edge technologies
              like Astro and Next.js.
            </p>

            <a
              href={resume}
              download="Alfred_Gichia"
              className="bg-red-600 hover:bg-red-500 h-12 rounded-lg px-4  text-white w-[80%] md:w-56 flex flex-row items-center justify-center mx-auto lg:mx-0"
            >
              View Resume
            </a>
          </figcaption>
          <img
            className="order-1 lg:order-2 w-full md:w-[70%] lg:w-[40%] aspect-square h-full rounded-lg"
            src={banner}
            alt="Banner Image "
          />
        </section>
      </article>
    </div>
  );
};

export default About;
