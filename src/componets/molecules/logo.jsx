import { Link } from "../atoms/customLink"
import { Microscope } from "lucide-react";
import styles from './logo.module.css'

function Logo({ absolute = false, className = "" }) {
  const nameLogo = 'SmartWeb'

  const combinedClass = `${styles.logo} ${absolute ? styles.absolute : ''} ${className}`

  return (
    <div className={combinedClass}>
      <Link href='/' className={styles.logoLink}>
        <span className={styles.logoIcon}>
          <Microscope size={50} strokeWidth={2} />
        </span>
        <span className={styles.logoName}>{nameLogo}</span>
      </Link>
    </div>
  )
}

export { Logo }