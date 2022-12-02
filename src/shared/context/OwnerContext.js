import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const OwnerContext = createContext();

export const OwnerProviderComponent = ({ children }) => {
  const [ownerUser, setOwnerUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getOwner = async () => {
      try {
        const data = JSON.parse(localStorage.getItem("ownerUser"));
        setOwnerUser(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getOwner();
  }, [id]);

  return (
    <OwnerContext.Provider value={{ ownerUser, loading, error }}>
      {children}
    </OwnerContext.Provider>
  );
};
