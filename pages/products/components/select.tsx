import ProductType from '../types';
import React, { useState } from "react"


const SelectProducts =  props  => {
    const [product, setProduct] = useState('');
    const handleChange = (event) => {
        props.handleResult(event.target.value)
        setProduct(event.target.value);
      };
    return (
        <>
           {
            <select name="productCode" onChange={handleChange} value={product} >
                <option>Selecione um produto</option>
                 {props.products.map(product => (
                    <option key={product.Id} value={product.ProductNumber}>{product.Description}</option>
                ))}
            </select>
            }
            
        </>
    )
}
export default SelectProducts;