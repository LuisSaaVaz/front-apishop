import React, { useEffect, useState } from "react";
import { getTotalsProductsService } from "../services";

export const useTotals = (text) => {
  const [totals, setTotals] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTotals = async () => {
      try {
        setLoading(true);
        setError("");
        const totalsSearch = await getTotalsProductsService(text);
        setTotals(totalsSearch);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadTotals();
  }, [text]);

  return { totals, loading, error };
};
