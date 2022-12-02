import React from "react";
import { useSearchParams } from "react-router-dom";

const ButtonList = ({ text, amount, close }) => {
  const [params, setParams] = useSearchParams();
  const handleClick = () => {
    if (params.toString() === "") {
      setParams({ location: text });
    } else {
      //si ya esta en la url se borra
      if (params.get("location") === text) {
        params.delete("location");
      } else {
        params.set("location", text);
      }
      params.set("page", 1);
      setParams(params);
    }
    close();
  };

  return (
    <li
      className={`locationSelect__element ${
        params.get("location") === text ? "selected" : null
      }`}
      onClick={handleClick}
    >
      <span className="locationSelect__element__textAmount">
        {"(" + amount + ")"}
      </span>
      <p className="locationSelect__element__text">{text}</p>
    </li>
  );
};

export default ButtonList;
