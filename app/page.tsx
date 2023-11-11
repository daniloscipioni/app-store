import Link from 'next/link'
export default function Home() {
  return (
    <main>
    <header>
      <div>
        <Link href="/products/list">Products</Link>
        <Link href="/orders/list">Orders</Link>
      </div>
      </header>
     
      <footer>
        <p>
          Developed by @daniloscipioni
        </p>
      </footer>

    </main>
  )
}
