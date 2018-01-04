import { product } from './models/product';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';

import { ShoppingCart } from './models/shopping-cart';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  async clearCart(){
    let cartId= await this.getorCreateCartId();
    this.db.object('/shopping-cart/'+ cartId + '/items').remove();
   }

  create() {
    return this.db.list('/shopping-cart').push({
      dateCreated: new Date().getTime()
    });
  }

  async getCart():Promise<Observable<ShoppingCart>> {
   let cartId = await this.getorCreateCartId();
    return this.db.object('/shopping-cart/' + cartId).map(x=>new ShoppingCart(x.items));
  }
  private getItem(cartId:string,productId:string){
    return this.db.object('/shopping-cart/'+cartId +'/items/'+productId);
   }

  async addToCart(product: product) {
   this.updateItem(product,1);
}



async removeFromCart(product:product){
  
  this.updateItem(product,-1);
}
async updateItem(product:product,change:number){
  let cartId = await this.getorCreateCartId();
  let item$=this.getItem(cartId,product.$key)
item$.take(1).subscribe(item=>{
  let quantity=(item.quantity || 0) + change;
  if(quantity===0) item$.remove();

  else item$.update({
  title:product.title,
  imageUrl:product.imageUrl,
  price:product.price,
  quantity:quantity
});
});
}

  private async getorCreateCartId(): Promise<string> {
    let cardId = localStorage.getItem('cardId');
    if (cardId) return cardId; 

      let result = await this.create();
      localStorage.setItem('cardId', result.key);
      return result.key;
  
}
}

