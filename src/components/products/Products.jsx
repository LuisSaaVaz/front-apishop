import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading";
import Card from "./Card";

export const Products = ({ products, loading, nextPage }) => {
  const navigate = useNavigate();
  return (
    //<InfiniteScroll
    /* dataLength={products.length}
			hasMore={true}
			loader={loading && <Loading classe='loader__nextProducts' />}
			next={() => {
				if (nextPage) {
					navigate(nextPage)
				}
			}} */
    //>
    <ul className="productList__list">
      {products.map((product) => (
        <Card key={product.id} section="products" element={product} />
      ))}
    </ul>
    //</InfiniteScroll>
  );
};
