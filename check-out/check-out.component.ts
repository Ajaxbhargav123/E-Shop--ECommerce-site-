import { Observable } from 'rxjs/Observable';

import { product } from './../models/product';
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { ShoppingCart } from '../models/shopping-cart';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit { 
  cart$: Observable<ShoppingCart>; 

  constructor(private shoppingcartService:ShoppingCartService) { }
  
 async ngOnInit(){
   this.cart$= await this.shoppingcartService.getCart();
  } 
}
