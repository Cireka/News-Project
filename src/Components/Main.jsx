import NewsBox from "./NewsBox";
import useFetch from "../utils/useFetch";
import { useState } from "react";

const Main = () => {
  const [fetch, setFetch] = useState(false);
  const [amountToFetch, setAmountToFetch] = useState(9);
  const { loading, articles } = useFetch(amountToFetch, fetch);

  const moreNewsHandller = () => {
    setAmountToFetch(8);
    setFetch(!fetch);
  };

  return (
    <main className="px-[18px] mt-[46px] mb-[86px]">
      <h2 className="mb-[24px] text-[36px] font-[roboto] font-[700] text-[#121221]">
        Latest News
      </h2>
      <div className="flex flex-wrap w-[100%] gap-[30px] ">
        {!loading &&
          articles.slice(1).map((data) => {
            return (
              <NewsBox
                key={Math.random()}
                title={data?.title}
                link={data?.link}
                picture={data?.image_url}
                author={data?.source_id}
                time={data?.pubDate}
              />
            );
          })}
      </div>
      <div className="flex justify-center mt-16">
        <button onClick={moreNewsHandller}>See More</button>
      </div>
    </main>
  );
};
export default Main;
