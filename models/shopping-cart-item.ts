import { product } from './product';
export class ShoppingCartItems{
    $key:string;
    title:string;
    imageUrl:string;
    price:number;
    quantity:number;
    
  // constructor(public product:product, public quantity:number ) { } 

    get totalPrice(){
        return this.price * this.quantity;
    }
}