const SectionHeading = ({ title, subTitle }) => {
  return (
    <header>
      <h2 className="uppercase phone:text-xs text-sm  font-bold text-slate-700 text-center my-1">
        {subTitle}
      </h2>
      <h2 className="uppercase phone:text-xl text-4xl text-red-600 font-bold text-center my-1 tablet:my-3">
        {title}
      </h2>
    </header>
  );
};

export default SectionHeading;
