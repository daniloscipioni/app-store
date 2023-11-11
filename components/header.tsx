import Link from 'next/link'
export default function Header() {
    return (
        <header>
            <div>
                <Link href="/products/list">Products</Link>
                <Link href="/orders/list">Orders</Link>
            </div>
        </header>
    )
}