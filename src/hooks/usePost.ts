import { useState } from "react";

function usePost(url: string) {
  const baseUrl = "https://shopapi.taherifard.ir";

  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  const post = async (body?: Object) => {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), 10000);

    try {
      setLoading(true);
      const response = await fetch(baseUrl + url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token && { Authorization: `Bearer ${token}` }),
        },
        body: JSON.stringify(body),
        signal: controller.signal,
      });
      const data = await response.json();
      return data;
    } catch (err) {
      return { success: false, message: "Error on server" };
    } finally {
      setLoading(false);
      clearTimeout(id);
    }
  };

  return { loading, post };
}

export default usePost;
