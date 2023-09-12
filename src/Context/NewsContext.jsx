import React from "react";
import { useState, useEffect } from "react";
const newsKey = import.meta.env.VITE_NEWS_KEY;
const newsKeyBackup = import.meta.env.VITE_NEWS_KEY_BACKUP;

const starterValue = {
  data: {},
  setSearchWord: (Word) => {},
  setContentSize: (contentSize) => {},
  loadMore: (status) => {},
  loadNew: () => {},
  fetch: () => {},
  searchingWord: "",
  loading: false,
};
const appContext = React.createContext(starterValue);

const NewsContext = (props) => {
  const [data, setData] = useState({
    data: null,
    error: null,
    nextPage: null,
    articles: [],
  });
  const [contentSize, setContentSize] = useState(9);
  const [searchWord, setSearchingWord] = useState("");
  const [loadMore, setLoadMore] = useState(false);
  const [fetchState, setFetchState] = useState(false);
  const [loading, setLoading] = useState(false);

  // &domain=timeslive,independentuk,usatoday,tvtimes,euroweeklynews,
  useEffect(() => {
    if (!loadMore) {
      setLoading(true);
    }
    fetch(
      `https://newsdata.io/api/1/news?image=1&language=en&full_content=1&apikey=${newsKeyBackup}&size=${contentSize}${
        data.nextPage ? `&page=${data.nextPage}` : ""
      }${searchWord ? `&q=${searchWord}` : ""} `
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (!loadMore) {
          setData((prevData) => ({
            ...prevData,
            error: null,
            data,
            nextPage: data.nextPage,
            articles: [...data.results],
          }));
          setLoading(false);
        } else if (loadMore) {
          console.log("should have added");
          setData((prevData) => ({
            ...prevData,
            error: null,
            data,
            nextPage: data.nextPage,
            articles: [...prevData.articles, ...data.results],
          }));
          setLoading(false);
        }
      });
  }, [contentSize, fetchState]);

  const setSearchWordHandller = (Word) => {
    setSearchingWord(Word);
  };
  const setContentSizeHandller = (Size) => {
    setContentSize(Size);
  };

  const loadNewHandller = () => {
    setLoadMore(false);
  };
  const loadMoreHandller = () => {
    setLoadMore(true);
  };

  const fetchHandller = () => {
    setFetchState(!fetchState);
  };
  const contextValue = {
    data,
    setSearchWord: setSearchWordHandller,
    setContentSize: setContentSizeHandller,
    loadMore: loadMoreHandller,
    loadNew: loadNewHandller,
    fetch: fetchHandller,
    searchingWord: searchWord,
    loading: loading,
  };

  return (
    <appContext.Provider value={contextValue}>
      {props.children}
    </appContext.Provider>
  );
};

export { NewsContext, appContext };
