import React, { useState } from "react"
import Link from 'next/link'
import OrdersType from './types'
import Select from '../../components/select'
export default function Order() {
  const [formData, setFormData] = useState({OrdersType});

  const [formSuccess, setFormSuccess] = useState(false)
  const [formSuccessMessage, setFormSuccessMessage] = useState("")

  const handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue
    }));
  }

  const submitForm = (e) => {
    // We don't want the page to refresh
    e.preventDefault()
    const formURL = e.target.action
    const order = new OrdersType({productCode:formData.productCode,amount:formData.amount,value:formData.value},{ipi:formData.ipi,icms:formData.icms,iss:formData.iss})
    // POST the data to the URL of the form
    fetch(formURL, {
      method: "POST",
      body: order.serialize(),
      headers: {
        'accept': 'application/json',
      },
    }).then((response) => response.json())
      .then((data) => {
        setFormData({
          OrdersType
        })
        setFormSuccess(true)
        setFormSuccessMessage("Order ID = " + data.Id)
      }).catch((err) => {
        setFormSuccess(true)
        setFormSuccessMessage("Erro de conexão -> " + err.message )
        console.log("Erro de conexão -> ", err.message)
       })
  }

  return (
    <div>

      <h1>Order form</h1>
      {formSuccess ?
      <div>
      {formSuccessMessage} 
      <div> 
        <p>
        <Link href="/orders/list">Voltar</Link>
        </p>
      </div>
    </div>
        :
        <form method="POST" action="http://localhost:8080/v1/order" onSubmit={submitForm}>
          <div>
            <label>Product Code</label>
            <Select name="productCode" onChange={handleInput} value={formData.productCode}></Select>
          </div>
          <div>
            <label>Amount</label>
            <input type="text" name="amount" onChange={handleInput} value={formData.amount} />
          </div>
          <div>
            <label>Value</label>
            <input type="text" name="value" onChange={handleInput} value={formData.value} />
          </div>

          <div>
            <label>Ipi</label>
            <input type="text" name="ipi" onChange={handleInput} value={formData.ipi} />
          </div>
          <div>
            <label>Icms</label>
            <input type="text" name="icms" onChange={handleInput} value={formData.icms} />
          </div>
          <div>
            <label>Iss</label>
            <input type="text" name="iss" onChange={handleInput} value={formData.iss} />
          </div>

          <button type="submit">Criar Ordem</button>
          <Link href="/orders/list">Voltar</Link>
        </form>
      }
    </div>
  )
}