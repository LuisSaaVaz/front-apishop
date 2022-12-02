import React from "react";
import { ButtonSearchFilter } from "../Buttons/ButtonSearchFilter";

export const FormSearch = (handleSubmit, handleChange, text) => {
  return (
    <form className="header__form" onSubmit={handleSubmit}>
      {/* <SearchIcon className='header__form__search'/>  */}
      <input
        className="header__input input"
        type="text"
        placeholder={`¿Qué estás buscando?`}
        onChange={handleChange}
        // onFocus={text.length > 0 && open}
        value={text}
      />
      {/* <SearchIcon /> */}
      <ButtonSearchFilter text={text} />
    </form>
  );
};
