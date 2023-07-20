import styles from './css/operations.module.css'
import {Metadata} from 'next'
import { Search } from "@/app/shared/components/Search";

export const metadata: Metadata = {
  title: "Operations",
  description: "User operations"
}

export default function Operations() {
  return (
    <main className={styles.root}>
      <Search/>
      Operations page
    </main>
  )
}