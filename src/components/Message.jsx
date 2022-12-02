import React from 'react'
import '../styles/text.css'

const Message = ({ className = 'text', text }) => {
  return <p className={className}>{text}</p>
}

export default Message
