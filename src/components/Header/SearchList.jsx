import React from "react";
import { Link } from "react-router-dom";

export const SearchList = ({ text }) => {
  return (
    <ul className="searchlist__ul">
      <Link to={`/products?search='name=${text}'`}>
        <li className="searchlist__li">{`Nombre "${text}", productos`}</li>
      </Link>
      <Link to={`/products?search=category&text=${text}`}>
        <li className="searchlist__li">{`Categoria "${text}", productos`}</li>
      </Link>
      <Link to={`/products?search='location=${text}`}>
        <li className="searchlist__li">{`Ubicacion "${text}", productos`}</li>
      </Link>
      <Link to={`/products?search='caption=${text}`}>
        <li className="searchlist__li">
          {" "}
          {`Descripcion "${text}", productos`}
        </li>
      </Link>
    </ul>
  );
};
