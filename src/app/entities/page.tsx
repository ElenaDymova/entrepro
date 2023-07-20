import styles from './css/entities.module.css'
import { Metadata } from 'next'
import { Search } from "@/app/shared/components/Search";

export const metadata: Metadata = {
  title: "Entities",
  description: "User entities"
}

export default function Entities() {
  return (
    <main className={styles.root}>
      <Search />
      Entities page
    </main>
  )
}