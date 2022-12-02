import * as React from 'react'

const Star = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={60}
    viewBox="0 0 24 24"
    fill="#f7dfe5"
    stroke="#FF6B67"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-star"
    {...props}
  >
    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

export default Star
