import styles from './css/entities.module.css'
import {Metadata} from 'next'

export const metadata: Metadata = {
  title: "Entities",
  description: "User entities"
}

export default function Entities() {
  return (
    <main className={styles.root}>
      Entities page
    </main>
  )
}