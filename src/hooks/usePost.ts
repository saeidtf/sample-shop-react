import { useState } from "react";
import instance from "../util/serviceHandler";

function usePost(url: string) {
  const [loading, setLoading] = useState(false);

  const post = async (body?: Object) => {
    setLoading(true);
    const response = await instance
      .post(url, body)
      .then((res) => res.data)
      .catch((err) => {
        return { success: false, message: "Error on server" };
      })
      .finally(() => {
        setLoading(false);
      });

    return response;
  };

  return { loading, post };
}

export default usePost;
