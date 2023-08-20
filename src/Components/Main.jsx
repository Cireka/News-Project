import NewsBox from "./NewsBox";
import useFetch from "../utils/useFetch";

const Main = () => {
  const newsKey = import.meta.env.VITE_NEWS_KEY;

  // const news = useFetch(
  //   `https://gnews.io/api/v4/search?q=example&apikey=${newsKey}&lang=en&max=9&page=1`
  // );

  return (
    <main className="px-[18px] mt-[46px] mb-[86px]">
      <h2 className="mb-[24px] text-[36px] font-[roboto] font-[700] text-[#121221]">
        Latest News
      </h2>
      <div className="flex flex-wrap w-[100%] gap-[30px] ">
        <NewsBox
          key={Math.random()}
          title={"Ukrine Pushing Back"}
          picture="/src/assets/Rectangle 1.png"
          author={"BBC"}
          time={2}
        />
        <NewsBox
          key={Math.random()}
          title={"Ukrine Pushing Back"}
          picture="/src/assets/Rectangle 1.png"
          author={"BBC"}
          time={2}
        />
        <NewsBox
          key={Math.random()}
          title={"Ukrine Pushing Back"}
          picture="/src/assets/Rectangle 1.png"
          author={"BBC"}
          time={2}
        />
        <NewsBox
          key={Math.random()}
          title={"Ukrine Pushing Back"}
          picture="/src/assets/Rectangle 1.png"
          author={"BBC"}
          time={2}
        />
        <NewsBox
          key={Math.random()}
          title={"Ukrine Pushing Back"}
          picture="/src/assets/Rectangle 1.png"
          author={"BBC"}
          time={2}
        />
        <NewsBox
          key={Math.random()}
          title={"Ukrine Pushing Back"}
          picture="/src/assets/Rectangle 1.png"
          author={"BBC"}
          time={2}
        />
        <NewsBox
          key={Math.random()}
          title={"Ukrine Pushing Back"}
          picture="/src/assets/Rectangle 1.png"
          author={"BBC"}
          time={2}
        />
        <NewsBox
          key={Math.random()}
          title={"Ukrine Pushing Back"}
          picture="/src/assets/Rectangle 1.png"
          author={"BBC"}
          time={2}
        />
      </div>
    </main>
  );
};
export default Main;
