import useFetch from "../utils/useFetch";
const Hero = () => {
  const newsKey = import.meta.env.VITE_NEWS_KEY;
  const news = useFetch(
    `https://gnews.io/api/v4/search?q=example&apikey=${newsKey}&lang=en&max=9&page=1`
  );
  const title = news?.articles[0]?.title;
  const author = news?.articles[0]?.author;
  const image = news?.articles[0]?.image;
  return (
    <section>
      <h1 className="font-[Roboto] text-[48px] font-[700] text-[#121221] mb-[24px]">
        {title}
      </h1>
      <div className="flex items-start gap-[30px]">
        <div className="rounded-lg shrink-0 w-[870px] h-[400px] relative  bg-black/30">
          <img
            className="object-cover w-[100%] h-[100%]"
            alt="News Article Picture"
            src={image}
          />
          <div className="absolute bottom-[36px] left-[32px]">
            <p className="text-[#F8F8F8] text-[32px] font-[700]">
              Headline Of The News Article
            </p>
            <div className="flex items-center gap-[27px]">
              <p className="hero-overlay-details">2 Hours Ago</p>
              <p className="hero-overlay-details">{author}</p>
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
