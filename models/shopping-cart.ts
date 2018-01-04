import { product } from './product';
import { ShoppingCartItems } from "./shopping-cart-item";

export class ShoppingCart{
    items:ShoppingCartItems[]=[];
constructor(public itemsMap:{[productId:string]:ShoppingCartItems}) {
    this.itemsMap=itemsMap || {};
    for(let productId in itemsMap){
        let item=itemsMap[productId];
        let x=new ShoppingCartItems();
        Object.assign(x,item);
        x.$key=productId;
        this.items.push(x);
    }
}

get totalPrice(){
    let sum=0;
    for(let productId in this.items)
  sum +=  this.items[productId].totalPrice;
  return sum;
}

getQuantity(product:product){
   let item = this.itemsMap[product.$key];
    return item ? item.quantity:0; 
  }

get TotalItemCount(){
    let count=0;
    for(let productId in this.itemsMap)
    count +=  this.itemsMap[productId].quantity;
    return count;
}
}