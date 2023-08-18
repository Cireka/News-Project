const Hero = () => {
  return (
    <section>
      <h1 className="font-[Roboto] text-[48px] font-[700] text-[#121221] mb-[24px]">
        Hot Topics
      </h1>
      <div className="flex items-start gap-[30px]">
        <div className="rounded-lg shrink-0 w-[870px] h-[400px] relative  bg-black/30">
          <img
            className="absolute -z-10"
            alt="News Article Picture"
            src="/src/assets/Rectangle 1.png"
          />
          <div className="absolute bottom-[36px] left-[32px]">
            <p className="text-[#F8F8F8] text-[32px] font-[700]">
              Headline Of The News Article
            </p>
            <div className="flex items-center gap-[27px]">
              <p className="hero-overlay-details">2 Hours Ago</p>
              <p className="hero-overlay-details">BBC</p>
            </div>
          </div>
        </div>
        <div className="w-[280px]">
          <p className="text-[18px] text-[400] leading-[188%] text-[#444]">
            <span className="text-[#444] font-[600] text-[36px] leading-[180%]">
              dolor
            </span>{" "}
            sit amet consectetur adipisicing elit. Sequi, eaque sunt, assumenda
            officia voluptate nostrum vitae aliquam quis autem velit repudiandae
            nulla. Cumque quasi perferendis doloribus, sequi itaque autem quo.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
            <a
              href="/"
              className="text-[#121221] font-[600] text-[18px] leading-[180%] "
            >
              Read more...
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
