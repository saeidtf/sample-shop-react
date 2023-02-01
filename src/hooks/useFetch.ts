import { useEffect, useState } from "react";
import instance from "../util/serviceHandler";
interface IUseFetch<T> {
  loading: boolean;
  data?: T;
  isError: boolean;
}

function useFetch<T = unknown>(url: string): IUseFetch<T> {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T>({} as T);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setLoading(true);

    instance
      .get(url)
      .then((res) => {
        setData(res.data);
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
