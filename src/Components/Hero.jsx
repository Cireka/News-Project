import moment from "moment/moment";
import { useContext } from "react";
import { appContext } from "../Context/NewsContext";

const Hero = () => {
  const ctx = useContext(appContext);
  const title = ctx.data?.articles[0]?.title;
  const author = ctx.data?.articles?.[0]?.source_id;
  const image = ctx.data?.articles?.[0]?.image_url;
  const publishedDate = ctx.data?.articles?.[0]?.pubDate;
  const content = ctx.data?.articles?.[0]?.content.split(" ");
  const description = content?.slice(1, 72).join(" ");
  const firstWord = content?.[0];
  const link = ctx.data?.articles?.[0]?.link;

  const redirectHandller = () => {
    window.location.href = link;
  };

  const hoursDifference = moment().diff(moment(publishedDate), "hours");
  return (
    <section className="px-[18px]">
      <h1 className="font-[Roboto] text-[48px] font-[700] text-[#121221] mb-[24px]">
        Hot Topics
      </h1>
      <div className="flex items-start gap-[30px]">
        <div
          onClick={redirectHandller}
          className="rounded-lg shrink-0 relative  bg-black/30 xl:w-[870px] xl:h-[400px] w-[100%] h-[400px]  "
        >
          <img
            className="object-cover w-[100%] h-[100%] hover:cursor-pointer"
            alt="News Article Picture"
            src={image}
          />
          <div
            onClick={redirectHandller}
            className="absolute bottom-[36px] left-[32px]"
          >
            <p className="text-[#F8F8F8] text-[32px] font-[700]  max-sm:text-[22px] hover:cursor-pointer">
              {title}
            </p>
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
              {firstWord}
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
