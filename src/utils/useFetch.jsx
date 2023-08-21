import { useEffect, useState } from "react";
const useFetch = (apiLink) => {
  const [data, setData] = useState({
    data: null,
    loading: true,
    error: null,
  });
  useEffect(() => {
    fetch(apiLink)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData((prevData) => ({
          ...prevData,
          loading: false,
          error: null,
          data,
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
  }, []);
  return data;
};

export default useFetch;
