import { useEffect, useState } from "react";
const useFetch = (apiLink) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(apiLink)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return data;
};

export default useFetch;
