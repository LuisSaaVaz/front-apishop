import * as React from "react";

const SearchIcon = (props) => (
  <button className="header__form__search" type="submit">
    {/*
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-search"
      {...props}
    >
      <circle cx={11} cy={11} r={8} />
      <path d="m21 21-4.35-4.35" />
    </svg>*/}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 49.87 49.88"
      className="header__search__icon"
      {...props}
    >
      <title>Search</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Search">
          <path
            className="cls-1"
            d="M49.14 45.61L38.58 35.05a2.77 2.77 0 0 0-3.91 0 17.49 17.49 0 1 1 4.92-16.35 17.7 17.7 0 0 1-.18 8.3 2.5 2.5 0 1 0 4.84 1.29 22.54 22.54 0 1 0-7.72 11.82l9.07 9.06a2.5 2.5 0 0 0 3.54 0 2.5 2.5 0 0 0 0-3.56z"
            id="id_101"
          ></path>
          <path
            className="cls-2"
            d="M30 30a2.46 2.46 0 0 0-3-.27 8.52 8.52 0 0 1-8.66.17 2.41 2.41 0 0 0-2.87.33l-.15.14a2.41 2.41 0 0 0 .42 3.81 13.55 13.55 0 0 0 14-.28 2.41 2.41 0 0 0 .41-3.74z"
            id="id_102"
          ></path>
        </g>
      </g>
    </svg>
  </button>
);

export default SearchIcon;
