import styles from './css/sidebar.module.css'
import Link from "next/link";

export function Sidebar(){
  return (
    <div className={styles.sidebar}>
      <ul>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/entities">Entities</Link>
        </li>
        <li>
          <Link href="/operations">Operations</Link>
        </li>
      </ul>
    </div>
  )
}