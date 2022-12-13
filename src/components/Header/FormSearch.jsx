import React from "react";
import { ButtonSearch } from "../Buttons/ButtonSearch";

export const FormSearch = ({
  handleSubmit,
  handleChange,
  handleFocus,
  handleBlur,
  text,
}) => {
  return (
    <form className="header__search__form" onSubmit={handleSubmit}>
      <ButtonSearch text={text} />
      <input
        className="header_form__input input"
        type="text"
        placeholder={`¿Qué estás buscando?`}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={text}
      />
      {text.length > 0 && (
        <p className="header__form__results results">
          50{/* {{totals.data.allTotal}} */}
        </p>
      )}
    </form>
  );
};
