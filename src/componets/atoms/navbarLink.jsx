import { Link } from "react-router-dom";
import styles from './navbarLink.module.css'

function NavbarLink({ href, text, onClick, className = '' }) {
  return (
    <Link to={href} onClick={onClick} className={`${styles.link} ${className}`}>
      {text}
    </Link>
  )
}

export { NavbarLink }