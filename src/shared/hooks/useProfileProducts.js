import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsService } from "../services";

const useProfileProducts = () => {
  const [products, setProducts] = useState([]);
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //recuperar el id del ownerUser de la url
  const { id } = useParams();
  const path = `/products/filterBy/userId/${id}`;
  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const allInfoProducts = await getProductsService(path);
        const pagination = allInfoProducts.info;
        const listProducts = allInfoProducts.object;
        setProducts(products.concat(listProducts));
        setInfo(pagination);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [path]);

  return { products, info, loading, error };
};

export default useProfileProducts;
