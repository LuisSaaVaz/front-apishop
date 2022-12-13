import * as React from "react";

const SearchIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 49.87}
    height={props.height || 49.88}
    viewBox="0 0 49.87 49.88"
    {...props}
  >
    <title>{"Search"}</title>
    <g data-name="Layer 2">
      <path
        className="cls-1"
        d="M49.14 45.61 38.58 35.05a2.77 2.77 0 0 0-3.91 0 17.49 17.49 0 1 1 4.92-16.35 17.7 17.7 0 0 1-.18 8.3 2.5 2.5 0 1 0 4.84 1.29 22.54 22.54 0 1 0-7.72 11.82l9.07 9.06a2.5 2.5 0 0 0 3.54 0 2.5 2.5 0 0 0 0-3.56z"
      />
      <path
        className="cls-2"
        d="M30 30a2.46 2.46 0 0 0-3-.27 8.52 8.52 0 0 1-8.66.17 2.41 2.41 0 0 0-2.87.33l-.15.14a2.41 2.41 0 0 0 .42 3.81 13.55 13.55 0 0 0 14-.28 2.41 2.41 0 0 0 .41-3.74z"
      />
    </g>
  </svg>
);

export default SearchIcon;
