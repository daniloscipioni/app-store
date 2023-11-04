
import { useState, useEffect } from 'react'
import Link from 'next/link'
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
      <Link href="/products/register">Criar novo produto</Link>
      <table border={1}>
        <thead>
          <tr>
            <td>Id</td>
            <td>Descrição</td>
            <td>Código do produto</td>
          </tr>
        </thead>
        <tbody>
          

          {products.map(product=>(
            <tr key={product.Id}>
              <td>{product.Id}</td>
              <td>{product.Description}</td>
              <td>{product.ProductNumber}</td>
              </tr>
              ))}
          
        </tbody>
      </table>
      <Link href="/">Voltar</Link>
    </div>
    
  )
}

export default List