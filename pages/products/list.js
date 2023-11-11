import { useState, useEffect } from 'react'
import Link from 'next/link'
import ListProducts from './components/list'
function List({ }) {
  const [products, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:8081/v1/products')
      .then((res) => res.json())
      .then((products) => {
        setData(products)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!products) return <p>No products data</p>

  return (
    <div>
      <div>
      <Link href="/products/register">Criar novo produto</Link>
      <Link href="/">Voltar</Link>
      </div>
      <ListProducts products={products}/>
 
    </div>
  )
}

export default List