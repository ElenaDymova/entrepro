import styles from './css/operations.module.css'
import {Metadata} from 'next'

export const metadata: Metadata = {
  title: "Operations",
  description: "User operations"
}

export default function Operations() {
  return (
    <main className={styles.root}>
      Operations page
    </main>
  )
}