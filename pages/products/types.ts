type Product = {
    name: string
    stargazers_count: number
  }

export default class ProductType {
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