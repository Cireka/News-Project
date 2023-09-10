import React from "react";
import { useState, useEffect } from "react";
const newsKey = import.meta.env.VITE_NEWS_KEY;
const newsKeyBackup = import.meta.env.VITE_NEWS_KEY_BACKUP;

const starterValue = {
  data: {},
  setSearchWord: (setSearchWord) => {},
  setContentSize: (contentSize) => {},
  loadMore: () => {},
  loadNew: () => {},
  fetch: () => {},
};
const appContext = React.createContext(starterValue);

const NewsContext = (props) => {
  const [data, setData] = useState({
    data: null,
    loading: true,
    error: null,
    nextPage: null,
    articles: [],
  });
  const [contentSize, setContentSize] = useState(9);
  const [searchWord, setSearchWord] = useState(null);
  const [loadMore, setLoadMore] = useState(false);
  const [fetchState, setFetchState] = useState(false);

  useEffect(() => {
    fetch(
      `https://newsdata.io/api/1/news?image=1&language=en&full_content=1&apikey=${newsKeyBackup}&size=${contentSize}&domain=timeslive,independentuk,usatoday,tvtimes,euroweeklynews,${
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
            loading: false,
            error: null,
            data,
            nextPage: data.nextPage,
            articles: [...data.results],
          }));
        } else if (loadMore) {
          setData((prevData) => ({
            ...prevData,
            loading: false,
            error: null,
            data,
            nextPage: data.nextPage,
            articles: [...prevData.articles, ...data.results],
          }));
        }
      });
  }, [contentSize, fetchState]);

  const setSearchWordHandller = (Word) => {
    setSearchWord(Word);
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
  };

  return (
    <appContext.Provider value={contextValue}>
      {props.children}
    </appContext.Provider>
  );
};

export { NewsContext, appContext };
