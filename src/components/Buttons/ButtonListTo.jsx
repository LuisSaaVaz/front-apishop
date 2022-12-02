
import '../../styles/link.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ButtonListTo = ({ to = '/', render, text, classe, children }) => {
  return (
    <motion.li
      className={!classe ? 'navbar__list__item' : classe}
      whileTap={{
        scale: 0.9,
      }}
    >
      <Link className="link" to={to} onClick={!render ? null : render}>
        <span>{children}</span>

        <p>{text}</p>
      </Link>
    </motion.li>
  )
}

export default ButtonListTo
