
import { useState, useEffect } from 'react'
import Link from 'next/link'
function List({ }) {
  const [orders, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:8080/v1/order')
      .then((res) => res.json())
      .then((orders) => {
        console.log(orders)
        setData(orders)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!orders) return <p>No orders data</p>

  return (
    <div>
      <Link href="/orders/register">Criar nova ordem</Link>
      <table border={1}>
        <thead>
          <tr>
            <td>Id</td>
            <td>Descrição</td>
            <td>Valor</td>
            <td>Quantidade</td>
          </tr>
        </thead>
        <tbody>
          

          {orders.map(order=>(
            <tr key={order.Id}>
              <td>{order.Id}</td>
              <td>{order.Product.ProductName}</td>
              <td>{order.Product.Value}</td>
              <td>{order.Product.Amount}</td>
              </tr>
              ))}
          
        </tbody>
      </table>
      <Link href="/">Voltar</Link>
    </div>
  )
}

export default List