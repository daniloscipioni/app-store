
import React, { useState } from "react"
import Link from 'next/link'
import ProductType from './types'
export default function Product() {
  const [formData, setFormData] = useState({ProductType});

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

    // POST the data to the URL of the form
    fetch(formURL, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        'accept': 'application/json',
      },
    }).then((response) => response.json())
      .then((data) => {
        setFormData({ProductType})
        setFormSuccess(true)
        setFormSuccessMessage("ID CADASTRADO = " + data.Id + "\n" + "PRODUTO CADASTRADO = " + data.Name)
      })
  }

  return (
    <div>
      <h1>Product form</h1>
      {formSuccess ?
        <div>
          {formSuccessMessage}
          <Link href="/products/list">Voltar</Link>
          
        </div>
        :
        <form method="POST" action="http://localhost:8081/v1/products" onSubmit={submitForm}>
          <div>
            <label>Name</label>
            <input type="text" name="name" onChange={handleInput} value={formData.name} />
          </div>

          <div>
            <label>Description</label>
            <input type="text" name="description" onChange={handleInput} value={formData.description} />
          </div>

          <button type="submit">Criar produto</button>
          <Link href="/products/list">Voltar</Link>
        </form>
      }
      
    </div>
  )
}