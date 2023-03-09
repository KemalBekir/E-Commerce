import { useEffect, useState } from "react";
import { makeRequest } from "../../makeRequest";

const useFetch = (url) => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setloading(true);
        const res = await makeRequest.get(url);
        setdata(res.data.data);
      } catch (err) {
        setError(true);
      }
      setloading(false);
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
