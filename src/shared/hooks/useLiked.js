import { useEffect, useState } from "react";
import { getLikeProductIdService } from "../services";
import useAuth from "./useAuth";

export const useLike = (productId, userId) => {
  const [liked, setLiked] = useState(false);
  const { token } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadLike = async () => {
      try {
        setLoading(true);
        setError("");
        const like = await getLikeProductIdService(productId, userId);
        setLiked(like);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadLike();
  }, [productId, userId, token]);

  return { liked, setLiked, loading, error };
};
