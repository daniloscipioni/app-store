import { createAxiosInstance } from '../../utils/axios';
import { Endpoints } from "./types"


const API = 'http://localhost:8081'
const CONTEXT = '/v1/products'
const ProductService = (): Endpoints => {

    const xhr = createAxiosInstance(API, CONTEXT);

    return{
        getProducts: async () =>{
            return(
                await xhr.get('',{}));
        }
    }

};
export default ProductService;