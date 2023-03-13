import { BaseService } from "./baseService.js";



export class OrderService extends BaseService {
    constructor(){
        super("data/orders.json")
    }

    addOrder(){
        
    }

    getOrderById(id){
        return this.data.find(o => o.id == id)
    }

    getAllOrders(){
        return this.data
    }

}