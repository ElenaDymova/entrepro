import Link from "next/link";

export default function Home() {
  return (
    <main>
      Pages
      <ul>
        <li>
          <Link href="/entities">Entities</Link>
        </li>
        <li>
          <Link href="/operations">Operations</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </main>
  )
}
