import { Fragment, useEffect, useContext } from "react";
import Navbar from "../Components/Navbar";
import { useLocation } from "react-router-dom";
import useFetch from "../utils/useFetch";
import NewsBox from "../Components/NewsBox";
import { useState } from "react";
import { appContext } from "../Context/NewsContext";

const SearchForNewsPage = () => {
  const ctx = useContext(appContext);
  useEffect(() => {
    ctx.setContentSize(8);
    ctx.fetch();
  }, [ctx.searchingWord]);
  const { articles, loading } = ctx.data;

  const moreNewsHandller = () => {
    ctx.loadMore(true);
    ctx.fetch();
  };

  return (
    <Fragment>
      <Navbar />
      <main className="px-[18px] mt-[46px] mb-[86px]">
        <h2 className="mb-[24px] text-[36px] font-[roboto] font-[700] text-[#121221]">
          Search Results For "{ctx.searchingWord}"
        </h2>
        <div className="flex flex-wrap w-[100%] gap-[30px] ">
          {!loading &&
            articles.map((data) => {
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
