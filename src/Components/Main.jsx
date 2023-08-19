import NewsBox from "./NewsBox";
import useFetch from "../utils/useFetch";

const Main = () => {
  const newsKey = import.meta.env.VITE_NEWS_KEY;

  const news = useFetch(
    `https://gnews.io/api/v4/search?q=example&apikey=${newsKey}&lang=en&max=9&page=1`
  );
  console.log(news);

  return (
    <main className="mt-[46px] mb-[86px]">
      <h2 className="mb-[24px] text-[36px] font-[roboto] font-[700] text-[#121221]">
        Latest News
      </h2>
      <div className="flex flex-wrap w-[100%] justify-stretch gap-[30px]">
        {news?.articles.slice(1).map((news) => {
          return (
            <NewsBox
              key={news.url}
              title={news.title}
              picture={news.image}
              author={news.source.name}
            />
          );
        })}
      </div>
    </main>
  );
};
export default Main;
