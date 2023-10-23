import React, { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    description: ""
  });

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

  const  submitForm = async (e) => {
    // We don't want the page to refresh
    e.preventDefault()

    const formURL = e.target.action
    const data = new FormData()

    // Turn our formData state into data we can use with a form submission
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    })

    // POST the data to the URL of the form
   await fetch(formURL, {
      method: "POST",
      body: data,
      headers: {
        'accept': 'application/json',
      },
    }).then((response) => response.json())
    .then((data) => {
      setFormData({ 
        name: "", 
        description: "", 
      })
      setFormSuccess(true)
      setFormSuccessMessage(data.Id)
    })
  }

  return (
    <div>
      <h1>Product form</h1>
      {formSuccess ? 
        <div>{formSuccessMessage}</div> 
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

          <button type="submit">Send message</button>
        </form>
      }
    </div>
  )
}