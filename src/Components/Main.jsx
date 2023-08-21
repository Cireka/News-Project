import NewsBox from "./NewsBox";
import useFetch from "../utils/useFetch";

const Main = () => {
  const newsKey = import.meta.env.VITE_NEWS_KEY;

  const { data, loading } = useFetch(
    `https://newsdata.io/api/1/news?apikey=${newsKey}&image=1&language=en&full_content=1&size=9`
  );

  console.log(data);

  // exclude stupid image provider

  return (
    <main className="px-[18px] mt-[46px] mb-[86px]">
      <h2 className="mb-[24px] text-[36px] font-[roboto] font-[700] text-[#121221]">
        Latest News
      </h2>
      <div className="flex flex-wrap w-[100%] gap-[30px] ">
        {!loading &&
          data.results.slice(1).map((data) => {
            console.log(data);
            return (
              <NewsBox
                key={Math.random()}
                title={data?.title}
                picture={data?.image_url}
                author={data?.source_id}
                time={data?.pubDate}
              />
            );
          })}
      </div>
    </main>
  );
};
export default Main;
