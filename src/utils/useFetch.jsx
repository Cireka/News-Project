import { useEffect, useState } from "react";
const newsKey = import.meta.env.VITE_NEWS_KEY;
const newsKeyBackup = import.meta.env.VITE_NEWS_KEY_BACKUP;
const useFetch = (contentSize, dependency) => {
  const [data, setData] = useState({
    data: null,
    loading: true,
    error: null,
    nextPage: null,
    articles: [],
  });

  useEffect(() => {
    fetch(
      `https://newsdata.io/api/1/news?image=1&language=en&full_content=1&apikey=${newsKeyBackup}&size=${contentSize}&domain=timeslive,independentuk,usatoday,tvtimes,euroweeklynews,${
        data.nextPage ? `&page=${data.nextPage}` : ""
      }`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData((prevData) => ({
          ...prevData,
          loading: false,
          error: null,
          data,
          nextPage: data.nextPage,
          articles: [...prevData.articles, ...data.results],
        }));
      })
      .catch((err) => {
        console.log(err);
        setData((prevData) => ({
          ...prevData,
          loading: false,
          error: err,
        }));
      });
  }, [dependency]);
  return data;
};

export default useFetch;
