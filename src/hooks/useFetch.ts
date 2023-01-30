import { useEffect, useState } from "react";

interface IUseFetch<T> {
  loading: boolean;
  data?: T;
  isError: boolean;
}

function useFetch<T = unknown>(url: string): IUseFetch<T> {
  const baseUrl = "https://shopapi.taherifard.ir";
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T>({} as T);
  const [isError, setIsError] = useState(false);

  const token = localStorage.getItem("token");

  useEffect(() => {
    setLoading(true);
    fetch(baseUrl + url, {
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        setIsError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { loading, data, isError };
}

export default useFetch;
