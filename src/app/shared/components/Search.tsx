"use client"
import { ChangeEvent, useState } from "react";
import styles from "@/app/shared/components/css/sidebar.module.css";

export function Search() {
  const [ search, setSearch ] = useState('')

  const handleSearchUpdate = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  return (
    <>
      <input className={styles.search} placeholder="search"
             value={search}
             onChange={handleSearchUpdate}/>
    </>
  )
}