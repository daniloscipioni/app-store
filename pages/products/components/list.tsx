import ProductType from '../types';

function ListProducts({ products }: ProductType) {
    return (
        <table>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Descrição</td>
                    <td>Product Number</td>
                </tr>
            </thead>
            <tbody>
        
            {products.map(product => (
            <tr key={product.Id}>
              <td>{product.Id}</td>
              <td>{product.Description}</td>
              <td>{product.ProductNumber}</td>
            </tr>
          ))}

            </tbody>
        </table>
    );
}
export default ListProducts;