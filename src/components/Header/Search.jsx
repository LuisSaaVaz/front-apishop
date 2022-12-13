import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTotals } from "../../shared/hooks/useTotals";
import { ButtonSearchFilter } from "../Buttons/ButtonSearch";
import { FormSearch } from "./FormSearch";
import { SearchList } from "./SearchList";

export const Search = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  let focus = false;

  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    text.length > 0 && navigate(`/products/filterBy/search/${text}`);
    //perder el foco del input
    event.target[0].blur();
    // setText("");
  };

  const handleFocus = () => {
    focus = true;
    console.log(focus);
  };

  const handleBlur = () => {
    focus = false;
    console.log(focus);
  };

  /* const { totals, loading, error } = useTotals(text);
  console.log(totals.data); */

  return (
    <div className="header__search__container">
      <FormSearch
        className="header__search__form"
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleFocus={handleFocus}
        handleBlur={handleBlur}
        text={text}
      />
      {/* <form className="header__form" onSubmit={handleSubmit}>
        <input
          className="header__form__input input"
          type="text"
          placeholder={`¿Qué estás buscando?`}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={text}
        />

        <ButtonSearchFilter />
        {text.length > 0 && (
          <p className="header__form__results results">
            50{{totals.data.allTotal}}
          </p>
        )}
      </form> */}
      {text.length > 0 && <SearchList text={text} />}
    </div>
  );
};
