import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { getProductsService } from "../services";
import useAuth from "./useAuth";

const useProducts = (buildPath) => {
  const [products, setProducts] = useState([]);
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token } = useAuth();

  //Meter aquí o valor de nextPage (ou null se non hai next page)
  //Se este estado ten valor mostrar botón de ver máis
  //ou lóxica similar
  //const [areMore, SetAreMore] = useState(null);

  const location = useLocation();
  console.log(location);
  // const path = `${location.pathname}${location.search}`;
  const [params, setParams] = useSearchParams();

  const path = buildPath(location);

  /* useEffect(() => {
    window.scrollTo(0, 0);
    setError("");
    params.delete("page");
    setParams(params);
  }, []); */
  // const path = location.search ? `${location.pathname}${location.search}/page=${page}`
  //   : `${location.pathname}?page=${page}`;
  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        setError("");
        const allInfoProducts = await getProductsService(path, token);
        const pagination = allInfoProducts.info;
        const listProducts = allInfoProducts.object;

        //comprobar si la pagina se recargo
        /* if (window.performance.navigation.type === 1) {
          window.scrollTo(0, 0);
          params.set("page", 1);
          setParams(params);
        } */
        //actualizar el estado de products con listProducts
        //Si location.search no contiene page setProducts(listProducts) sino setProducts(products.concat(listProducts))
        if (params.get("page") > "1") {
          setProducts(products.concat(listProducts));
        } else {
          console.log("entra aqui");
          setProducts(listProducts);
          window.scrollTo(0, 0);
        }
        //Para paginacion por botones
        //setProducts(listProducts);
        //setProducts(products.concat(listProducts));

        //actualizar el estado de info con pagination
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

export default useProducts;
