import React from "react";
import { Link } from "react-router-dom";

export const SearchList = ({ text, close }) => {
  return (
    <ul className="header__search__list">
      <Link to={`/products?search='name=${text}'`} onClick={close}>
        <li className="header__search__item">{`Nombre "${text}", productos`}</li>
      </Link>
      <Link to={`/products?search=category&text=${text}`} onClick={close}>
        <li className="header__search__item">{`Categoria "${text}", productos`}</li>
      </Link>
      <Link to={`/products?search='location=${text}`} onClick={close}>
        <li className="header__search__item">{`Ubicacion "${text}", productos`}</li>
      </Link>
      <Link to={`/products?search='caption=${text}`} onClick={close}>
        <li className="header__search__item">{`Descripcion "${text}", productos`}</li>
      </Link>
    </ul>
  );
};
