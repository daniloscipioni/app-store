export class OrdersType {
  product: product;
  
  constructor(product: product) {
    this.product = product;
  }

  private toObject() {
    return {
      "product":
      {
        "product_code": parseInt(this.product.productCode),
        "amount": parseInt(this.product.amount),
        "value": parseFloat(this.product.value),
         "taxes":{
           "ipi": parseFloat(this.product.taxes.ipi),
           "icms": parseFloat(this.product.taxes.icms),
           "iss": parseFloat(this.product.taxes.iss)
         }
      },
      
      
    }
  }

  serialize() {
    return JSON.stringify(this.toObject());
  }


}

interface product {
  productCode: number;
  amount: number;
  value: number;
  taxes: {
    ipi: number;
    icms: number;
    iss: number;
  };
}

export type Endpoints = {
  getOrders:() => Promise<OrdersType[]>
}