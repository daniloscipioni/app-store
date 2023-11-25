import { createAxiosInstance } from '../../utils/axios';
import { Endpoints } from "./types"


const API = 'http://localhost:8080'
const CONTEXT = '/v1/order'
const OrderService = (): Endpoints => {

    const xhr = createAxiosInstance(API, CONTEXT);

    return{
        getOrders: async () =>{
            return(
                await xhr.get('',{}));
        }
    }

};
export default OrderService;