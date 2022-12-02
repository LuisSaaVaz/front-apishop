import { createContext, useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import {
  getLikeProductIdService,
  getProductsService,
  getUserService,
} from "../services";

export const ProductContext = createContext();

export const ProductProviderComponent = ({ children }) => {
  const [product, setProduct] = useState(null);
  const [ownerUser, setOwnerUser] = useState(null);
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //Datos Dinámicos
  const [name, setName] = useState(null);
  const [category, setCategory] = useState(null);
  const [location, setLocation] = useState(null);
  const [price, setPrice] = useState(null);
  const [likes, setLikes] = useState(null);
  const [valoration, setValoration] = useState(null);
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState(null);

  //Recuperar productLocation de localStorage
  const locationURL = JSON.parse(localStorage.getItem("productLocation"));

  //recuperar el user del authContext
  const { user } = useAuth();

  useEffect(() => {
    const loadProductAndOwnerUser = async () => {
      try {
        setLoading(true);
        let data;
        locationURL && (data = await getProductsService(locationURL));
        const product = data.object[0];
        const ownerUser = await getUserService(product.user_id);

        setProduct(product);
        setOwnerUser(ownerUser);
        setName(product.name);
        setCategory(product.category);
        setLocation(product.location);
        setPrice(product.price);
        setLikes(product.likes);
        setValoration(product.valoration);
        setImage(product.image);
        setCaption(product.caption);
        //si hay user comprobar si el producto tiene like de ese usuario
        if (user) {
          const like = await getLikeProductIdService(product.id, user.id);
          setLiked(like);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadProductAndOwnerUser();
  }, [
    locationURL,
    user,
    liked,
    name,
    category,
    location,
    price,
    likes,
    valoration,
    image,
    caption,
  ]);

  return {
    product,
    ownerUser,
    setName,
    setCategory,
    setLocation,
    setPrice,
    setValoration,
    setImage,
    setCaption,
    likes,
    setLikes,
    liked,
    setLiked,
    loading,
    error,
  };
};
