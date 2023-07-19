import styles from './css/dashboard.module.css'
import {Metadata} from 'next'

export const metadata: Metadata = {
  title: "Dashboard",
  description: "User dashboard"
}

export default function Dashboard() {
  return (
    <main className={styles.root}>
      Dashboard page
    </main>
  )
}