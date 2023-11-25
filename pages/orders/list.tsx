
import { useState } from 'react'
import Link from 'next/link'
import ListOrders from './components/list'
import {OrdersType} from './types'
import OrderService from './index'
import { AxiosError } from 'axios' 
import { useQuery } from 'react-query'

const OrderSvc = OrderService();
function List() {
  const [ordersList, setOrdersList] = useState<OrdersType[]>([])
  const [isLoading, setLoading] = useState(true)
  const {isFetching, error, refetch } = useQuery<OrdersType[], AxiosError>(
    [],
    () => fetchOrders(),
    {
      retry:1,
    }
  )

  async function fetchOrders(): Promise<OrdersType[]>{
    const orders = await OrderSvc.getOrders();    
    setOrdersList(orders.data)
    setLoading(false)
    return orders
  }


  if (isLoading) return <p>Loading...</p>
  if (!ordersList) return <p>No orders data</p>

  return (
    <div>
      <div>
      <Link href="/orders/register">Criar nova ordem</Link>
      |
      <Link href="/">Voltar</Link>
      </div>
      
      <ListOrders orders={ordersList} />
    </div>
  )
}

export default List