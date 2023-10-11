import banner from "../assets/banner_1.png";
import blob from "../assets/blob.svg";
const BannerImage = () => {
  return (
    <figure className=" h-[400px] md:min-h-[600px] md:h-max  lg:h-full w-full lg:w-[50%] relative  flex flex-row items-end justify-center ">
      <img
        className="absolute bottom-0  lg:left-12 aspect-square w-full md:w-[70%] lg:w-[78%]"
        src={banner}
        alt="Banner Image "
      />
      <img
        className="absolute bottom-0 h-[95%] md:h-[80%] lg:h-[88%] bottom-0 w-full z-[-2] blob"
        src={blob}
        alt="Blob Image "
      />
    </figure>
  );
};

export default BannerImage;
