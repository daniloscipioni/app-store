export type Product = {
  id:string,
  product_number:number,
  description:string,
  name:string
}

export class ProductType {
    name: string;
    description:string;
    
    constructor(name:string, description:string) {
        this.name = name;
        this.description = description
    }

    private toObject() {
        return {
          name: this.name,
          description: this.description
        }
      }
    
      serialize() {
        return JSON.stringify(this.toObject());
      }

 
}

export type Endpoints = {
  getProducts:() => Promise<Product[]>
}