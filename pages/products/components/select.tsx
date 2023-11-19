import ProductType from '../types';
import React, { useState } from "react"


function SelectProducts({ products }: ProductType) {
    
    const [product, setProduct] = useState('');
    const handleChange = (event) => {
        setProduct(event.target.value);
      };
    return (
        <>
           {
            <select name="productCode" onChange={handleChange} value={product} >
                <option>Selecione um produto</option>
                 {products.map(product => (
                    <option key={product.Id} value={product.ProductNumber}>{product.Description}</option>
                ))}
            </select>
            }
            
        </>
    )
}
export default SelectProducts;