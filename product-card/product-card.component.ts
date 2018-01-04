import { ShoppingCartService } from './../shopping-cart.service';
import { product } from './../models/product';
import { Component,Input} from '@angular/core';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent  {
  
@Input('product') product:product;
@Input('show-action') showAction=true;
@Input('shopping-cart') shoppingCart : ShoppingCart;
  constructor(private cartService:ShoppingCartService) { }

  addTocart(){
    this.cartService.addToCart(this.product);
}
}