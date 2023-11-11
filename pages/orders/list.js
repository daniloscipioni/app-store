
import { useState, useEffect } from 'react'
import Link from 'next/link'
import ListOrders from './components/list'
import OrdersType from './types'
function List() {
  const [orders, setData] = useState(new OrdersType)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:8080/v1/order')
      .then((res) => res.json())
      .then((orders) => {
        console.log(orders);
        setData(orders)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!orders) return <p>No orders data</p>

  return (
    <div>
      <div>
      <Link href="/orders/register">Criar nova ordem</Link>
      <Link href="/">Voltar</Link>
      </div>
      
      <ListOrders orders={orders} />
    </div>
  )
}

export default List