import OrdersType from '@/pages/orders/types';

function ListOrders({ orders }: OrdersType) {
    return (
        <table>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Descrição</td>
                    <td>Valor</td>
                    <td>Quantidade</td>
                </tr>
            </thead>
            <tbody>

                {orders.map(order =>
                    <tr key={order.Id}>
                        <td>{order.Id}</td>
                        <td>{order.Product.ProductName}</td>
                        <td>{order.Product.Value}</td>
                        <td>{order.Product.Amount}</td>
                    </tr>
                )}

            </tbody>
        </table>
    );
}
export default ListOrders;