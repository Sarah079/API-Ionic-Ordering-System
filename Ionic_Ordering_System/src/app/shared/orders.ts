import { Restaurant } from "./Restaurant";
import { cart } from "./cart";
import { customer } from "./customer";
export class orders {
    
    Restaurant!: Restaurant;
    cartitems!: cart;
    customer!: customer;
    orderrest: Restaurant[] = [];
    orderdet: cart[] = [];
    custorder: customer[] = [];
}