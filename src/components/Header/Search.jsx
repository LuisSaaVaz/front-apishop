import { useState } from "react";
import { useNavigate } from "react-router-dom";
import modalEffects from "../../shared/helpers/modalEffects";
import useModal from "../../shared/hooks/useModal";
import { useTotals } from "../../shared/hooks/useTotals";
import { ButtonSearchFilter } from "../Buttons/ButtonSearchFilter";
import Modal from "../Modal/Modal";
import { FormSearch } from "./FormSearch";
import { SearchList } from "./SearchList";

export const Search = () => {
  const [text, setText] = useState("");
  const { close, modalOpen, open } = useModal();
  const { sliceMid } = modalEffects();
  const navigate = useNavigate();
  let focus = false;

  const handleChange = (event) => {
    open();
    setText(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    text.length > 0 && navigate(`/products/filterBy/search/${text}`);
    //perder el foco del input
    event.target[0].blur();
    close();
    // setText("");
  };

  const handleFocus = () => {
    focus = true;
  };

  const handleBlur = () => {
    focus = false;
  };

  /* const { totals, loading, error } = useTotals(text);
  console.log(totals.data); */

  return (
    <div className="header__search__container">
      {/* <FormSearch
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        text={text}
      /> */}
      <form className="header__form" onSubmit={handleSubmit}>
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
            50{/* {totals.data.allTotal} */}
          </p>
        )}
      </form>
      {/* <ul className="header__form__list results">
        <li>hola</li>
        <li>hola</li>
        <li>hola</li>
        <li>hola</li>
      </ul> */}
      {focus && text.length > 0 && <SearchList text={text} close={close} />}
    </div>
  );
};
