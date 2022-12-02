import * as React from 'react'

const PlusCircleMovil = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-plus-circle"
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
    <path d="M12 8v8M8 12h8" />
  </svg>
)

export default PlusCircleMovil
