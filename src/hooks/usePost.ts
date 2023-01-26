import { useState } from "react";

function usePost(url: string) {
  const baseUrl = "https://shopapi.taherifard.ir";
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  const post = async (body?: Object) => {
    setLoading(true);
    const response = await fetch(baseUrl + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    setLoading(false);
    return data;    
  };

  return { loading, post };
}

export default usePost;
