import { Component,Input } from '@angular/core';
import { ShoppingCartService } from './../shopping-cart.service';
import { product } from './../models/product';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent {
  @Input('product') product:product;
  @Input('shopping-cart') shoppingCart;
    constructor(private cartService:ShoppingCartService) { }
  
    addTocart(){
      this.cartService.addToCart(this.product);
  }
  removeFromCart(){
    this.cartService.removeFromCart(this.product);
  }
 
  }
