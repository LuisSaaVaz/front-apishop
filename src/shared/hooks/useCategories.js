import { useEffect, useState } from "react";
import { getCategoriesService } from "../services";

const useCategories = () => {
  const [ranking, setRanking] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        setLoading(true);
        setError("");
        const categories = await getCategoriesService();
        setLoading(false);
        setRanking(categories);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, []);

  return { ranking, loading, error };
};

export default useCategories;
