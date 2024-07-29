import Link from 'next/link'
 
function Home() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/create">Create</Link>
      </li>
      <li>
        <Link href="/read">Read</Link>
      </li>
      <li>
        <Link href="/update">Update</Link>
      </li>
      <li>
        <Link href="/delete">Delete</Link>
      </li>
    </ul>
  )
}
 
export default Home