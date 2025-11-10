import PropTypes from 'prop-types'
import styles from './customLink.module.css'


function Link({ href, children, text, onClick, className= '' }) {
  return (
    <a 
      href={href}
      onClick={onClick}
      className={`${styles.customLink} ${className}`}
    >
    {children || text}
    </a>
  )
}

Link.porpTypes ={
  href: PropTypes.string.isRequired,
  text: PropTypes.string,
  children: PropTypes.node,
  onclick: PropTypes.func,
  className: PropTypes.string,
  zise: PropTypes.string,
}

export { Link }