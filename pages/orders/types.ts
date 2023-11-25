export class OrdersType {
  product: product;
  taxes: taxes;

  constructor(product: product, taxes: taxes) {
    this.product = product;
    this.taxes = taxes
  }

  private toObject() {
    return {
      "product":
      {
        "product_code": parseInt(this.product.productCode),
        "amount": parseInt(this.product.amount),
        "value": parseFloat(this.product.value),
      },
      "taxes":
      {
        "ipi": parseFloat(this.taxes.ipi),
        "icms": parseFloat(this.taxes.icms),
        "iss": parseFloat(this.taxes.iss)
      }
    }
  }

  serialize() {
    return JSON.stringify(this.toObject());
  }


}

interface product {
  productCode: number;
  amount: number;
  value: number
}

interface taxes {
  ipi: number;
  icms: number;
  iss: number
}

export type Endpoints = {
  getOrders:() => Promise<OrdersType[]>
}