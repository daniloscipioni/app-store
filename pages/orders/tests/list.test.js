import { describe, expect, test } from '@jest/globals';
import { OrdersType } from '../types'
import OrderService from '../index'
const OrderSvc = OrderService();
const myMock1 = jest.fn();
// const a = new OrdersType(
  
// );
console.log(myMock1.mock.instances);

describe('List of orders',  () => {
  test('Is a list of orders', async () => {
    var orders = await OrderSvc.getOrders();
      expect(orders.data[0].Id).toBe("6547f7060e76ef08cc95066c");
  });
});