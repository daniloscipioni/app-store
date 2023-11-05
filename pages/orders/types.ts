import internal from "stream";

export default class OrdersType {
    product: product;
    taxes:taxes;
    
    constructor(product:product, taxes:taxes) {
         this.product = product;
         this.taxes = taxes
    }

    private toObject() {
        return {
          product: this.product,
          taxes: this.taxes,
        }
      }

      serialize() {
        return JSON.stringify(this.toObject());
      }
    

}

interface product{
    productCode:number;
    amount:number;
    value:number
}

interface taxes{
    ipi:number;
    icms:number;
    iss:number
}

