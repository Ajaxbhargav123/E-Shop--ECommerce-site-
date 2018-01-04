import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, Input } from '@angular/core';
import { OrderService } from '../order.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Order } from './../models/order';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  @Input('cart') cart:ShoppingCart;
  shipping = {}; 
  userId:string;
  userSubscription:Subscription;

  constructor(
    private router:Router,
    private orderService:OrderService,
    private authService:AuthService
  ) { }

  ngOnInit() {
    this.userSubscription = this.authService.user$.subscribe(user=>this.userId=user.uid) 
  }

  ngOnDestroy(){
    this.userSubscription.unsubscribe();
      }
  async placeOrder() {
    let order = new Order(this.userId ,this.shipping, this.cart);
  let result = await this.orderService.placeOrder(order);
  this.router.navigate(['/order-success',result.key]);
  }    
}
