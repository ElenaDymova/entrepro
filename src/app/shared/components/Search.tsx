"use client"
import { ChangeEvent, useState } from "react";

export function Search() {
  const [ search, setSearch ] = useState('')

  const handleSearchUpdate = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  return (
    <>
      <input placeholder="search"
             value={search}
             onChange={handleSearchUpdate}/>
    </>
  )
}