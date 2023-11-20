import { useState, useEffect } from 'react'
import Link from 'next/link'
import ListProducts from './components/list'
import ProductService from './index'
import Product from './types'
import { useQuery } from 'react-query'
import { AxiosError } from 'axios' 
const ProductSvc = ProductService();

function List({ }) {
  const [isLoading, setLoading] = useState(true)
  const [productList, setProductList] = useState<Product[]>([])
  const {isFetching, error, refetch } = useQuery<Product[], AxiosError>(
    [],
    () => fetchProducts(),
    {
      retry:1,
    }
  )

  async function fetchProducts(): Promise<Product[]>{
    const products = await ProductSvc.getProducts();    
    setProductList(products.data)
    setLoading(false)
    return products
  }



  if (isLoading) return <p>Loading...</p>
  if (!productList) return <p>No products data</p>

  return (
    <div>
      <div>
      <Link href="/products/register">Criar novo produto</Link>
      |
      <Link href="/">Voltar</Link>
      </div>
      <ListProducts products={productList}/>
 
    </div>
  )
}

export default List