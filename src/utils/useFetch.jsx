import { useEffect, useState } from "react";
const newsKey = import.meta.env.VITE_NEWS_KEY;
const newsKeyBackup = import.meta.env.VITE_NEWS_KEY_BACKUP;
const useFetch = (contentSize, dependency, LoadMore, SearchWord) => {
  const [searchPhrase, setSearchPhrase] = useState({
    oldWord: "",
    newWord: "",
  });
  useEffect(() => {
    setSearchPhrase((prevValue) => ({
      oldWord: prevValue.newWord,
      newWord: SearchWord,
    }));
  }, [SearchWord]);

  const [data, setData] = useState({
    data: null,
    loading: true,
    error: null,
    nextPage: null,
    articles: [],
  });

  // When i click loadmore button i need to fetch data in specific way and when i click enter on the nav bar specific way there

  useEffect(() => {
    fetch(
      `https://newsdata.io/api/1/news?image=1&language=en&full_content=1&apikey=${newsKeyBackup}&size=${contentSize}&domain=timeslive,independentuk,usatoday,tvtimes,euroweeklynews,${
        data.nextPage ? `&page=${data.nextPage}` : ""
      }${SearchWord ? `&q=${SearchWord}` : ""} `
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (LoadMore === "Load More") {
          setData((prevData) => ({
            ...prevData,
            loading: false,
            error: null,
            data,
            nextPage: data.nextPage,
            articles: [...prevData.articles, ...data.results],
          }));
        } else if (LoadMore === "New Batch") {
          setData((prevData) => ({
            ...prevData,
            loading: false,
            error: null,
            data,
            nextPage: data.nextPage,
            articles: [...data.results],
          }));
        }
      })
      .catch((err) => {
        console.log(err);
        setData((prevData) => ({
          ...prevData,
          loading: false,
          error: err,
        }));
      });
  }, [dependency, LoadMore]);
  return data;
};

export default useFetch;
