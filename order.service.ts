import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ShoppingCartService } from './shopping-cart.service';

@Injectable()
export class OrderService {

  constructor(private db:AngularFireDatabase, private shoppingcartservice:ShoppingCartService) { }

  getOrder(){
    return this.db.list('/orders');
  }

  getOrdersByUser(userId: string) {
    return this.db.list('/orders', {
      query: {
        orderByChild: 'userId',
        equalTo: userId        
      }
    
    });
  }
 async placeOrder(order){
   let result= await this.db.list('/orders').push(order);
  this.shoppingcartservice.clearCart();
   return result;
  }
}
