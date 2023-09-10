import { Fragment, useEffect } from "react";
import Navbar from "../Components/Navbar";
import { useLocation } from "react-router-dom";
import useFetch from "../utils/useFetch";
import NewsBox from "../Components/NewsBox";
import { useState } from "react";

const amountToFetch = 8;

const SearchForNewsPage = () => {
  const [data, seData] = useState(null);
  const { state } = useLocation();
  const { searchingWord } = state;
  const [loadMethod, setLoadMethod] = useState(false);
  const { loading, articles } = useFetch(
    amountToFetch,
    searchingWord,
    loadMethod,
    searchingWord
  );

  useEffect(() => {
    seData(articles);
  }, [articles, searchingWord]);

  const moreNewsHandller = () => {
    setLoadMethod("Load More");
  };

  return (
    <Fragment>
      <Navbar />
      <main className="px-[18px] mt-[46px] mb-[86px]">
        <h2 className="mb-[24px] text-[36px] font-[roboto] font-[700] text-[#121221]">
          Search Results For "{state.searchingWord}"
        </h2>
        <div className="flex flex-wrap w-[100%] gap-[30px] ">
          {!loading &&
            data.map((data) => {
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
    </Fragment>
  );
};

export default SearchForNewsPage;
