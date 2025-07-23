import { useEffect, useState } from "react";

export const useContent = (url:any) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
            throw new Error("Network response was not ok");
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error("Error fetching data:", error);
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    fetchData();
    }, [url]);

  return {data, error, loading};
}