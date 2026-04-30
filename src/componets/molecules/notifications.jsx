import { Bell } from "lucide-react"
import styles from './notifications.module.css'

function Notifications() {
  return(
    <div className={styles.notificactions}>
      <Bell />
    </div>
  )
}

export {Notifications}