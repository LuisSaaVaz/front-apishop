import * as React from 'react'

const PlusCircle = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-plus-circle"
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
    <path d="M12 8v8M8 12h8" />
  </svg>
)

export default PlusCircle
