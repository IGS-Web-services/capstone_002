import { SectionHeading } from "../components";

const Contact = () => {
  return (
    <article className="w-full bg-slate-100 rounded-t-lg">
      <section className="section_hidden w-full py-16">
        <SectionHeading subTitle="Have a gig?" title="Reach out" />
        <section className="section_hidden flex flex-col  gap-8 w-full items-center justify-center">
          <form className="w-full text-slate-800 text-sm flex flex-col items-center justify-start gap-2 ">
            <input
              type="text"
              placeholder="Your Name"
              className="w-72 tablet:w-[550px] px-2 appearance-none h-12 border-2 text-gray-700 leading-tight focus:outline-none  focus:border-purple-400 placeholder:text-sm bg-slate-200 border-none rounded-lg text-start  "
            />
            <textarea
              placeholder="Your message"
              className="w-72 tablet:w-[550px] px-2 appearance-none h-36 py-2 border-2 text-gray-700 leading-tight focus:outline-none  focus:border-purple-400 placeholder:text-sm bg-slate-200 border-none rounded-lg text-start "
            ></textarea>
          </form>
          <button className="bg-red-600 hover:bg-red-700 h-12 w-48 rounded-lg text-slate-100">
            Submit
          </button>
        </section>
      </section>
    </article>
  );
};

export default Contact;
