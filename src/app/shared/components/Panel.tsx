import styles from './css/panel.module.css'
import Link from "next/link";
import { Search } from "@/app/shared/components/Search";

export function   Panel() {
  return (
    <div className={styles.panel}>
      <Search />

    </div>
  )
}