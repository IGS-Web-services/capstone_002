const Banner = () => {
  return (
    <div>
      <article
        id="home"
        className=" bg-black/40  lg:h-screen flex items-center justify-center  relative w-full py-16  backdrop-blur-xs "
      >
        <figcaption className=" relative w-full flex flex-col items-center justify-center py-12 pl-5 text-center gap-5 ">
          <h4 className="text-xl lg:text-2xl text-cream">
            Mechatronics Engineer
          </h4>
          <h2 className="text-2xl md:text-4xl lg:text-6xl uppercase font-bold ">
            <span className="text-red-600">Alfred Gichia </span>
          </h2>
        </figcaption>
      </article>
    </div>
  );
};

export default Banner;
