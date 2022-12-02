import { Link } from "react-router-dom";

export const Inventory = ({id}) => {
    return (
        <ul className="inventory__container">
            <li className="inventory__list__li">
                <p className="inventory__info__text">CATÁLOGO</p>
                <button className="inventory__ul__button">
                    <Link to={`/products/filterBy/userId/${id}`}>Mis productos</Link>
                </button>
            </li>
            <li className="inventory__list__li">
                <p className="inventory__info__text">GESTIONES</p>
                <ul className="inventory__info__list">
                    <li>
                        <button className="inventory__ul__button">
                            <Link to={`/products/filterBy/bought?buyer_id=${id}`}>Compras</Link>
                        </button>
                    </li>
                    <li>
                        <button className="inventory__ul__button">
                            <Link to={`/products/filterBy/bought?user_id=${id}`}>Ventas</Link>
                        </button>
                    </li>
                </ul>
            </li>
                
        </ul>
    );
};