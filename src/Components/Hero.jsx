import useFetch from "../utils/useFetch";
import moment from "moment/moment";

const Hero = () => {
  const newsKey = import.meta.env.VITE_NEWS_KEY;
  const { data } = useFetch(
    `https://newsdata.io/api/1/news?apikey=${newsKey}&image=1&language=en&full_content=1&size=10`
  );

  const title = data?.results[0].title;
  const author = data?.results[0].source_id;
  const image = data?.results[0].image_url;
  const publishedDate = data?.results[0].pubDate;
  const content = data?.results[0]?.content.split(" ");
  const description = content?.slice(0, 80).join(" ");

  const hoursDifference = moment().diff(moment(publishedDate), "hours");
  return (
    <section className="px-[18px]">
      <h1 className="font-[Roboto] text-[48px] font-[700] text-[#121221] mb-[24px]">
        Hot Topics
      </h1>
      <div className="flex items-start gap-[30px]">
        <div className="rounded-lg shrink-0 relative  bg-black/30 xl:w-[870px] xl:h-[400px] w-[100%] h-[400px]  ">
          <img
            className="object-cover w-[100%] h-[100%]"
            alt="News Article Picture"
            src={image}
          />
          <div className="absolute bottom-[36px] left-[32px]">
            <p className="text-[#F8F8F8] text-[32px] font-[700]">{title}</p>
            <div className="flex items-center gap-[27px]">
              <p className="hero-overlay-details">
                {hoursDifference} Hours Ago
              </p>
              <p className="hero-overlay-details uppercase ">{author}</p>
            </div>
          </div>
        </div>
        <div className="grow hidden xl:block">
          <p className="text-[18px] text-[400] leading-[188%] text-[#444]">
            <span className="text-[#444] font-[600] text-[36px] leading-[180%]">
              dolor
            </span>{" "}
            {description}{" "}
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
